const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());  // Parse JSON body

// Authentication Routes
app.use('/auth', authRoutes);

// Root route (for testing)
app.get('/', (req, res) => {
    res.send('User Auth App Running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
