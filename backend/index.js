const express=require('express')
const cors=new require('cors');
const app=new express();
const PORT=4000;
//connect the connection.js to server file
require('./connection');

const movieData=require('./model/MovieData')


app.use(express.json());
app.use(cors());
//API  endpoint fetch data from DB

app.post('/new-movie',async(req,res)=>{
    try{
        var item=req.body;
        const dataitem=new movieData(item);
        const saveddata=await dataitem.save();
        res.send('Post succesful')

    }
    catch(error){
        console.log(error);

    }
})

app.get('/list-movies',async(req,res)=>{
    try{
            const data=await movieData.find();
            res.send(data);
    }
    catch(error){
        console.log("Error occures");

    }
})


//checking whether the server is live or not

app.listen(PORT,()=>{
    console.log("Server is running on Port Number:4000");
})