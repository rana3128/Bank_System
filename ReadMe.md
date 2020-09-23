steps 
1. start mongo db in localhost 
2. create database `Bank_sys` 
3. start backend by `npm start`
4. call adduser api from post mant and few users for testing . by using blow curl in postman 

curl --location --request POST 'http://localhost:5000/bank/adduser' \
--header 'Content-Type: application/json' \
--data-raw '{
    "accountType": "BasicSavings",
    "accountNumber": "10001",
    "username": "robert"
}'


5. add money to user account. by using blow curl in postman 

curl --location --request POST 'http://localhost:5000/bank/addBalance' \
--header 'Content-Type: application/json' \
--data-raw '{
    "accountNumber": "10001",
    "addBanalce": 10
}'

6.  transfer money between accounts. by using blow curl in postman 

curl --location --request POST 'http://localhost:5000/bank/transferMoney' \
--header 'Content-Type: application/json' \
--data-raw '{
    "fromAccountId": "10001",
    "toAccountId": "10003",
    "amount": 10
}'