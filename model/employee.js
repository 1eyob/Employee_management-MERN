const mongoose=require('mongoose');
const Schema= mongoose.Schema;
const EmployeeSchema= new Schema({
name:{
    type: String,
    required:true
},

DOB:{
type:Date,
required: true,
trim:true
},

gender:{
type:String,
required:true
},

salary:{
    type:Number,
    required:true
}


})
module.exports= Employee=mongoose.model('employee',EmployeeSchema);
/*const Employee=mongoose.model('employee',EmployeeSchema);
module.exports=Employee;*/
