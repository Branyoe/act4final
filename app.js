const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("./public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/form1', (req, res) => {
    res.sendFile(__dirname + '/public/form1.html');
});

app.get('/form2', (req, res) => {
    res.sendFile(__dirname + '/public/form2.html');
});

app.get('/form3', (req, res) => {
    res.sendFile(__dirname + '/public/form3.html');
});

app.get('/form4', (req, res) => {
    res.sendFile(__dirname + '/public/form4.html');
});


app.listen(port, () => {
    console.log("Server on port " + port);
});