require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser'); // Import the cookie-parser middleware
const dbConfig = require('./config/dbConfig');

const userRoute = require('./routes/userRoute');
const adminRoute = require('./routes/adminRoute');

const app = express();

// Connect to MongoDB
dbConfig();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser()); // Add cookie-parser as middleware

// Routes
app.use('/api/user', userRoute);
app.use('/api/admin', adminRoute);

// Listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
