const express=require('express');
const router=express.Router();
const Employee= require('../model/employee');

 //Read employees profile from the database

router.get('/',(req,res)=>{
Employee.find()
.sort({date:-1})
.then(employees=>res.json(employees));
});

//write to the database

router.post('/',(req,res)=>{
    const newEmployee=new Employee({
        name:req.body.name,
        DOB:req.body.DOB,
        gender:req.body.gender,
        salary:req.body.salary
    }
    )
    newEmployee.save().then(employee=>res.json(employee));

    
});
//detete employee
router.delete('/:id',(req,res)=>{
    Employee.findById(req.params.id)
    .then(employee=>employee.remove())
    .then(()=>res.json({sucess:true}))
    .catch(err=>res.status(404).json({sucess:false}));
})
//update employee 
router.put('/:id',(req,res)=>{
 const updatedEmployee=new Employee({
     _id:req.params.id,
     name:req.body.name,
     DOB:req.body.DOB,
     gender:req.body.gender,
     salary:req.body.salary   
    });
    Employee.updateOne({_id:req.params.id}, updatedEmployee).then(()=>res.status(201).json({sucess:true}))
    .catch(err=>res.status(404).json({sucess:false}))

})

module.exports=router;