const express = require('express')
const cors = require('cors')
require('dotenv').config();
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db');
const testiRoute = require('./routes/testimonial_route');
const port = 4000

const app = express()
connectDB()

app.use(cookieParser())

app.use(cors({origin: "http://localhost:3000", credentials: true}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api', testiRoute)

app.listen(port, () => {
    console.log(`Server run on port ${port}`);
})