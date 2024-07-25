const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://nehasebastian04:neha41Mongo@cluster0.b59on8b.mongodb.net/movieDB?retryWrites=true&w=majority&appName=Cluster0')
.then((res)=>{
    console.log('DB connected');
})
.catch((res)=>{
    console.log('DB not connected')
})