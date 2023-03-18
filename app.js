const express = require('express')
const path = require('path')
const app = express()

//set static path
app.use(express.static(path.join(__dirname, 'static')));

// app.get('/:file_path/:filename', (req, res) => {
//     res.sendFile(req.params.file_path + '/' + req.params.filename, { root: __dirname });
//     }
// );


app.route('/:filename').get((req, res) => {
    console.log(req.params.filename);
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});