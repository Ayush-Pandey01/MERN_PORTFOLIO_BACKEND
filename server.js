const express =require('express');
const app = express();
require("dotenv").config();
const dbConfig = require('./config/dbConfig.js');
const portfolioRoute = require('./routes/portfolioRoutes.js');
app.use(express.json());


app.use('/api/portfolio',portfolioRoute);

const port = process.env.PORT || 4000
const path =require('path');

app.listen(port,()=>{
    console.log(`Server is listining on Port ${port}`);
})
