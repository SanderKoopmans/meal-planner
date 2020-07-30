const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', async (req,res) => {
    try {
        const list = await db.getRecipeList();
        res.send(list);
        res.end();
    } catch (err) {
        console.log(err);
    }
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'../client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
