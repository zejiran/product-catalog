const express = require('express');
const port = 3001;

const connectDB = require('./config/db');

connectDB();
const app = express();

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});