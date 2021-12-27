const mongoose=require('mongoose')
const {Schema,model}=mongoose
const personSchema=new Schema({
    name:{type:String,required:true},
    age:Number,
    favoriteFood:[String]
})
const persons=model('persons',personSchema)
module.exports=persons