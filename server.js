const express=require('express')
const connectDB=require('./db/connectDB')
const persons=require('./model/personSchema')
const app=express()
connectDB()
const addPr=async()=>{
    const pr=await new persons({name:'John',age:28,favoriteFood:['pizza']});
   await pr.save(function(err){
        if (err) return console.log(err);
    })
}
//addPr()
const create=()=>{
    persons.create({name:'Karla',age:'32',favoriteFood:['spaghetti','hamburger']},{name:'David',age:'25',favoriteFood:['sushi','tacos']},{name:'Emily',age:'30',favoriteFood:['lasagna','cheesecake']},{name:'Henry',age:'16',favoriteFood:['sushi']})
}
//create()
const findPr=()=>{
    persons.find({name:'Karla'},(err,data)=>{err?console.log(err):console.log(data)})
}
//findPr()
const findOne=()=>{
    persons.findOne({favoriteFood:['sushi']},(err,data)=>{err?console.log(err):console.log(data)})
}
//findOne()
const findId=()=>{
    persons.findById("61c9b2340fbf827a1195d1d6",(err,data)=>{err?console.log(err):console.log(data)})
}
//findId()
const FindEditSave=async()=>{
 const pr=await persons.findById("61c9b2340fbf827a1195d1d7").exec()
await  pr.favoriteFood.push('cheeseburger')
await pr.save()
console.log('done');

}
//FindEditSave()
const FindUpdate=()=>{
    persons.findOneAndUpdate({name:'John'},{age:20},(err,data)=>{err?console.log(err):console.log(data)})
}
//FindUpdate()
const FindIdRemove=()=>{
    persons.findByIdAndRemove("61c9b2340fbf827a1195d1d5",(err,data)=>{err?console.log(err):console.log(data)})
}
//FindIdRemove()
const MaryRemove=()=>{
    persons.remove({name:'Mary'},(err,data)=>{err?console.log(err):console.log(data)})
}
//MaryRemove()
const ChainQuery=()=>{
    persons.find({favoriteFood:["hamburger"]})
    .sort({name:1})
    .limit(2)
    .select("-age")
    .exec((err,data)=>{err?console.log(err):console.log(data)})
}
//ChainQuery()

const port = process.env.port || 5000
app.listen(port,(err)=>err?console.log(err):console.log(`server is running on port ${port}`))