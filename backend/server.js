const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
require('dotenv').config();

const port = 3001;

// Connect to the database
connectDB();

// Create an Express app
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define API routes
app.use('/api/products', require('./routes/productRoutes'));

// Middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
