const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.port;

// Define a route
app.get('/', (req, res) => {
    res.send('This is home routes');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});