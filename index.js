const express = require('express');

const app = express();
const port = process.env.port || 5000;
const server = app.listen(port, () => {
    console.log('llistening on port: ' + port);
});

app.use(express.static('public'));
