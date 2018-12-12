module.exports = [{
    fact: {
        action: 'password_reset',
        label: 'Action to reset the user\'s password',
        rules: [
            "[subject.profile === 'service_desk']",
            "[subject.username === object.username]"
        ]
    }
}];