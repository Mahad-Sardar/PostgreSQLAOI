const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    try{
        res.json('WELCOME TO HR API')
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/',async(req,res)=>{
    try{
        res.json('WELCOME TO HR API')
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/region',async(req,res)=>{
    try{
        const result = await pool.query('select * from regions');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});
app.get('/country',async(req,res)=>{
    try{
        const result = await pool.query('select * from Countries');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});
app.get('/count',async(req,res)=>{
    try{
        const result = await pool.query('select count(First_name) as count from employees');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});
app.get('/employee',async(req,res)=>{
    try{
        const result = await pool.query('select * from employees');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
})
app.get('/job',async(req,res)=>{
    try{
        const result = await pool.query('select * from jobs');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
})
app.get('/department',async(req,res)=>{
    try{
        const result = await pool.query('select * from department');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
})
app.get('/location',async(req,res)=>{
    try{
        const result = await pool.query('select * from locations');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
})
app.get('/totalcrty',async(req,res)=>{
    try{
        const result = await pool.query('select count(country_id) from countries');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
})
app.get('/totaldpt',async(req,res)=>{
    try{
        const result = await pool.query('select count(department_id) from departments');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
})
app.get('/totaldpt',async(req,res)=>{
    try{
        const result = await pool.query('select count(department_id) from departments');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
})



const PORT = process.env.PORT || 6005;
app.listen(PORT,()=>{
      console.log(`Connected Successfully...on PORT ${PORT}`)
});