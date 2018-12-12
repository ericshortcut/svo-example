const express = require('express');
const bodyParser = require('body-parser');
const facts = require('./facts');
const Engine = SVO.buildFacts(facts);
const SVO = require('svo')
const userDB = require('./userDB');
const app = express();
const port = 8080;

app.use(bodyParser.json());

app.post('/user/reset-password', function(req, res, next) {
    console.log(userDB);
    const user = userDB.find( u => u.id == req.headers['user']);
    const action = 'password_reset';

    if(user){
        Engine.setAction('password_reset')
        .setSubjectAndObject(user,req.body)
        .then((s, v, o) => {
            console.log(`\n>>>[ok]:Usuário ${s.name} resetou a senha do ${o.username}`);
            res.send(`[ok]:Usuário ${s.name} resetou a senha do ${o.username}`);
        })
        .fail((s, v, o) => {
            console.log(`\n>>>[ACCESS DENIED]:Usuário ${s.name} não resetou a senha do ${o.username}`);
            res.send(`[ACCESS DENIED]:Usuário ${s.name} não resetou a senha do ${o.username}.`);
        });
    }else{
        res.send('User Not found');
    }
    
});

app.listen(port,(err)=>{
    if(err){ return console.log(err);}
    console.log(`Running on ${port}`);
})

