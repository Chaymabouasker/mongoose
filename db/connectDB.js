const mongoose=require('mongoose');
const connectDB=()=>{
    mongoose.connect('mongodb://localhost:27017/mydb')
    .then(()=>(console.log('connected to database')))
    .catch((err)=>console.log(err))
}


module.exports=connectDB