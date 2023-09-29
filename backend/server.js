const express = require('express');
const port = 3001;
const connectDB = require('./config/db');
require('dotenv').config();

connectDB();
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/products', require('./routes/productRoutes'))
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
