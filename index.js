const express = require('express');
require('dotenv').config();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
    res.send('Hello Twitter!');
});

app.get('/login', (req, res) => {
    res.send('Login Page');
});

app.get('/youtube', (req, res) => {
    res.send('Hello YouTube!');
}
);
app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);

