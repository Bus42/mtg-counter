const express = require('express');
const app = express();
const path =require('path');

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);

//PathLocationStrategy

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/mtg-counter/index.html'));
});

console.log(`Server listening, open browser to localhost:${process.env.PORT || 8080 }`);

