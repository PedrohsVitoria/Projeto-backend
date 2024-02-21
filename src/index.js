const express = require('express')
const dotenv = require('dotenv');

dotenv.config();

const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)


app.listen(process.env.PORT || 3000)