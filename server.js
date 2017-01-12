const express = require('express');
const path = require('path');
const app = express();

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port: ${port}`));