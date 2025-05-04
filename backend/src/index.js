const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/users');

const app = express();

app.use(cors()); //secure transfers
app.use(express.json());

app.use('/api/users', userRoutes)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
