const express = require('express');

const server = express();

server.get('/curso', (req, res) => {
    //return res.send('heloo wodlldld!');
    return res.json({curso: 'sddsad'})
})

server.listen(3000);