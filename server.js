const express = require('express');
const path = require('path');
require('dotenv').config()

const app = express();
const port = process.env.Port;

app.use('/transcripts', express.static(path.join(__dirname, 'Transcripts')));

app.listen(port, () => {
    console.log(`Server is running on ${process.env.IP_Address}`);
});

let TranscriptLink = process.env.IP_Address

module.exports = TranscriptLink;