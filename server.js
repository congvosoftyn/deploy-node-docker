const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    return res.send('Hello World!')
})

app.listen(4000,()=>{
    console.log('Server is running port 4000')
})