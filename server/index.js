const express = require('express');
const path = require('path');
const db = require('./db');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(bodyParser.json());

app.post('/api/search', async (req, res) => {
    const params = req.body;
    try {
        const results = await db.searchUrl(params);
        console.log('result from search', results);
        res.send(results);
        res.end();
    } catch (err) {
        console.log(err);
    }
})

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'../client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
