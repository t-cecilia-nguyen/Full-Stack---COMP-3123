const express = require('express');
const app = express();
const SERVER_PORT = process.env.port || 3001;

// GET /hello
app.get('/hello', (req, res) => {
    res.type('text/plain');
    res.send('Hello Express JS');
});

// GET /user
app.get('/user', (req, res) => {
    const { firstname = 'Pritesh', lastname = 'Patel' } = req.query;
    res.json({
        firstname: firstname,
        lastname: lastname
    });
});

// POST /user
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({
        firstname: firstname,
        lastname: lastname
    });
});

// Start server
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});