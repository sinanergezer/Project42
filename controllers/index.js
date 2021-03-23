const express=require('express');
const nameRouter=express.Router();
const data=require('../models');
nameRouter.get('/',function (req,res){
    res.render('index');
});