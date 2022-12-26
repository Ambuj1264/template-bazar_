// require('dotenv').config()
const express=require('express');

var cors = require('cors')
const app=express();
const db=require("./connection/db")
const router=require("./routes/router")
const port= 8000;


app.use(cors())
app.use(express.urlencoded({extended:false}));

app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
}
)


