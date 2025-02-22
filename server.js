const express= require('express');
const app= express();
const Port=3000;
app.use(express.json());
const data=require("./data.json");
app.get('/api/data',(req,res)=>{
    res.json(data);
});
app.listen(Port,()=>{
    console.log(`Server running on http://localhost:${Port}`);
})