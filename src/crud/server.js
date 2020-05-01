const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

let data;
let users;


if(fs.existsSync(`${__dirname}/data/data.json`) && fs.existsSync(`${__dirname}/data/users.json`)) {
    data = fs.readFileSync(`${__dirname}\\data\\data.json`, 'utf8');
    data = JSON.parse(data);

    users = fs.readFileSync(`${__dirname}/data/users.json`, 'utf8');
    users = JSON.parse(users);
}
else if(fs.existsSync(`${__dirname}/data/test-data.json`) && fs.existsSync(`${__dirname}/data/test-users.json`)) {
    data = fs.readFileSync(`${__dirname}/data/test-data.json`, 'utf8');
    data = JSON.parse(data);

    users = fs.readFileSync(`${__dirname}/data/test-users.json`, 'utf8');
    users = JSON.parse(users);
}
else {
    fs.appendFileSync(`${__dirname}/data/test-users.json`, '{}');
    fs.appendFileSync(`${__dirname}/data/test-data.json`, '{}');

    data = fs.readFileSync(`${__dirname}/data/test-data.json`, 'utf8');
    data = JSON.parse(data);

    users = fs.readFileSync(`${__dirname}/data/test-users.json`, 'utf8');
    users = JSON.parse(users);
}

const synchronizeData = () => {
    fs.writeFileSync(`${__dirname}\\data\\data.json`, JSON.stringify(data, null, 4), 'utf8')
    fs.writeFileSync(`${__dirname}\\data\\users.json`, JSON.stringify(users, null, 4), 'utf8')
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (req, res) => {
console.log(req.body);
    
})

app.listen(3005, () => console.log('on3000'));

