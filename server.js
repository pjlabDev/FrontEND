/*jshint esversion: 6 */
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('/dist/pfpedro'));
app.get('/*', function(req, res) {
    res.sendFile(path.join('/dist/pfpedro/index.html'));
});
app.listen(process.env.PORT || 8080);