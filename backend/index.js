const express = require('express');// import express
const app=express();//asign express to app build method/package/module/library
const port=5000;

const userRouter=require('./routers/userRouter');
const cors=require('cors');

//allow client to make reqest
app.use(cors({origin:'http://localhost:3000'}))
app.use(express.json());
app.use('/user',userRouter);

app.get('/',(req,res)=>{
    res.send('working fine')
});
app.get('/add',(req,res)=>{
    res.send('Add request on server')
});
//home
//getall
app.listen(port,()=>{console.log('server started')});

//explain method used in program
{/* This code is for creating a node.js server. The app.get() method is used to handle the get request from the user. 
The '/' route is used to handle the root route for the server. 
The app.listen() method is used to listen to the port number on which the server should run. 
When the user accesses the root route, it will send the response as 'working fine'.*/}