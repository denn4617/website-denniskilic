const express = require('express');
const path = require('path');
const app = express();

//'207.154.207.8'
const hostname = 'localhost';
const port = 80;


app.use('/public', express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname + '/public/html/index.html'));

});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
