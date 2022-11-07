const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, 'build')));

app.listeners(5173 || 3000, (err) => {
    err ? console.log('err', err) : console.log('Funcionou')
})