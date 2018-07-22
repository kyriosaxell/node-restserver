require('./config/config')

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get( '/usuario', (req, res) =>{
    res.send('Holaaaaa');
});

app.post('', (req, res) => {
    res.send('Holaaaaa');
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.send({
        id
    });
});

app.delete('', (req, res) => {
    res.send('Holaaaaa');
});
app.listen(process.env.PORT, ()=> {
    console.log('Puerto');
})