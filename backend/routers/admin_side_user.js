const router = require('express').Router();
let admin_side_user = require('../models/admin_side_user');
const bcrypt = require('bcryptjs');

router.route('/registrationRequest').post((req, res)=>{
       bcrypt.hash(req.body.password, 10,function(err,hashedPass){
        if(err){
            res.json({
                error:err
            })
          }
          
        const email = req.body.email;
        const status = "Pendding";
        const password = hashedPass;
        const type = req.body.type;

        const newadmin_side_user = new admin_side_user({
             email,
             password,
             type,
             status
        })

        newadmin_side_user.save().then(() => {
                res.status(200).send({status :"User Reg Request Sent"});
        }).catch((err) =>{
            console.log(err);
        });

       

      })
});

router.post('/:login', (req, res) => {
    
    const email = req.body.email;
    const password= req.body.password;

    admin_side_user.findOne({$and: [{email:email},{status:"Approved"}]})
    .then(systemreg =>{
        if(systemreg){
                bcrypt.compare(password, systemreg.password, function(err, result){
                    if(err){
                        res.json({
                            error:err
                        })
                    }
                    if(result){
                                admin_side_user.find({email:email})
                                    .then(SystemUserSearch => res.json({
                                              success:SystemUserSearch[0].type,
                                            }))
                                    .catch(err => res.status(400). res.json({
                                              success:false,
                                            }))
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

router.route('/updatePassword/:email').put((req, res)=>{
    let email = req.params.email;
       
       bcrypt.hash(req.body.password, 10,function(err,hashedPass){
        if(err){
            res.json({
                error:err
            })
          }
           const password = hashedPass;
           const updatePass={
               password
           }
       const update1 =  admin_side_user.findOneAndUpdate({email:email},updatePass).then(() => {
                 res.status(200).send({status :"Password Updated"});
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: "Error with Updating Data",error: err.message});
        });
          
    })
});  

module.exports = router;