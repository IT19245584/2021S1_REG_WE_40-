const user = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

router.route('/register').post((req, res, next)=>{
    bcrypt.hash(req.body.password, 10,function(err,hashedPass){
        if(err){
            res.json({
                error:err
            })
        }

         let systemreg = new user({
            username : req.body.username,
            email : req.body.email,
            nic : req.body.nic,
            type : req.body.type,
            password : hashedPass
        })
        systemreg.save()
        .then(systemreg =>{
            res.json({
                message:'User Added'
            })
        }).catch(error=>{
            res.json({
                message:'User Name is Already Used'
            })
        })

    })
});

router.route('/login').post((req, res, next) => {
    var email = req.body.email;
    var password = req.body.password;

    user.findOne({$or: [{email:email}]})
    .then(systemreg =>{
        if(systemreg){
                bcrypt.compare(password, systemreg.password, function(err, result){
                    if(err){
                        res.json({
                            error:err
                        })
                    }
                    if(result){
                        let token = jwt.sign({name: systemreg.name}, 'verySecretValue', {expiresIn: '1h'})
                        res.json({
                            message: systemreg.type,
                            
                        })      
                    }else{
                         res.json({
                            success:false,
                            
                        })    
                    }
                })

        }else{
            res.json({
                success:false,
            })
        }
    })
});
module.exports = router;