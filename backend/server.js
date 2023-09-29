const express = require('express');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
require('dotenv').config();

const port = 3001;

// Connect to the database
connectDB();

// Create an Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware
app.use(errorHandler);

// Define API routes
app.use('/api/products', require('./routes/productRoutes'));

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
