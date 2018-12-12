curl -i -X POST \
    -H "Content-Type: application/json" \
    -H "user: 1" \
    -d '{ "username": "john.doe@mail.com", "password":"124578" }' \
    http://localhost:8080/user/reset-password

curl -i -X POST \
    -H "Content-Type: application/json" \
    -H "user: 2" \
    -d '{ "username": "john.doe@mail.com", "password":"124578" }' \
    http://localhost:8080/user/reset-password

curl -i -X POST \
    -H "Content-Type: application/json" \
    -H "user: 1" \
    -d '{ "username": "jane.doe@mail.com", "password":"124578" }' \
    http://localhost:8080/user/reset-password