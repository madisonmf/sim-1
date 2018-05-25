const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const controller = require('./controller');

const app = express();
app.use( bodyParser.json() );

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
})

app.get('/api/inventory', ( req, res ) => {
    console.log("ayo mad!");
    req.app.get('db').get_inventory().then(products => {
        res.status(200).json(products)
    }).catch(err => {
        res.json({ message: 'yo mad, shit is busted.'})
    })
});

const port = 4000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );
