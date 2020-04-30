const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (req, res) => {
console.log(req.body);
    
})

app.listen(3000, () => console.log('on3000'));

// const data = fs.readFileSync(__dirname + '/data.json');
// fs.writeFileSync(__dirname + '/data.json', 'hi')
// fs.writeFileSync(__dirname + '/data.json', data + 'hi')
// fs.writeFileSync(__dirname + '/data.json', data + 'hi')
// console.log(data);
// fs.writeFileSync(__dirname + '/data.json', 'hi')
// console.log(data);

// fs.readFileSync('./data.json')