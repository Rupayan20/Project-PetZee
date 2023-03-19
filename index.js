const express = require('express')
const path = require('path')
const mongo = require('mongodb').MongoClient
const app = express()

const DB_URL = "mongodb+srv://aritramaji14:2rN9OL2mom3rKaSW@petstorecluster.uqh8nns.mongodb.net/?retryWrites=true&w=majority"
//set static path
app.use(express.static(path.join(__dirname, 'static')));

app.use(express.urlencoded({ extended: true }));

// app.get('/:file_path/:filename', (req, res) => {
//     res.sendFile(req.params.file_path + '/' + req.params.filename, { root: __dirname });
//     }
// );


app.post('/api_signup', (req, res) => {
    mongo.connect(DB_URL).then(client => {
        
        client.db('petzee').collection('users').insertOne({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).then(result => {
            //console.log(result)
            if(result){
                res.send({success: true});
            }else{
                res.send({success: false});
            }
        }).catch(err => {
            res.send({success: false , error: err})
        })

    }).catch(err => {
        res.send({success: false , error: err})
    })
});


app.post('/api_login', (req, res) => {
    mongo.connect(DB_URL).then(client => {
        client.db('petzee').collection('users').findOne({
            email: req.body.email,
            password: req.body.password
        }).then(result => {
            //console.log(result)
            if(result){
                //
                res.send({success: true});
            }else{
                res.redirect('/login');
                res.send({success: false});
            }
        }).catch(err => {
            res.send({success: false , error: err})
        })
    }).catch(err => {
        res.send({success: false , error: err})
    })
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});