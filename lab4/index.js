const express = require('express');
const app = express();
const SERVER_PORT = process.env.port || 3000;

// http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/', (req, res) => {
    res.send('POST - Hello World');
});

// Listening to the server
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});