const express= require('express');
const mongoose=  require('mongoose');
const bodyParser= require('body-parser');
const app= express();
app.use(bodyParser.json());
const employees= require('./routes/employees');

const db= require('./config/keys').mongoURI;

mongoose.connect(db).then(()=>console.log('database connected'));

app.use('/api/employees',employees);
const port= process.env.PORT || 5000;
app.listen(port,()=>console.log(`server running on port ${port}`));










