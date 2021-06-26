const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mysqlConnection = require('../dbConnection.js');
let user = require('../models/user');

router.route('/add').post((req,res) => {
      bcrypt.hash(req.body.password, 10,function(err,hashedPass){
        if(err){
            res.json({
                error:err
            })
        }

    const username = req.body.username;
    const email = req.body.email;
    const password = hashedPass;
    const nic = req.body.nic;
    const type = req.body.type;

    mysqlConnection.query('insert into user( username,password,email,nic,type ) values ( ?, ?, ?, ?, ?, ? ,?, ?)', [  username,password,email,nic,type ], (error, rows, fields) => {
        if(!error) {
            res.json({Status : "User Details saved"})
        } else {
            console.log(error);
        }
     });

    });
});

router.get('/:users', (req, res) => {
    mysqlConnection.query('select * from user', (error, rows, fields) => {
        if(!error) {
            res.json(rows);
        } else {
            console.log(error);
        }
    });
});

router.post('/:login', (req, res) => {
    
    const loginname = req.body.loginname;
    const typePassowrd= req.body.typePassowrd;

    mysqlConnection.query('select * from user where username = ?', [loginname], (error, rows, fields) => {
        if(!error) {
              const password = rows[0].password;
              bcrypt.compare(typePassowrd, password, function(err, isMatch) {
                    if (err) {
                        throw err
                    } else if (!isMatch) {
                        res.json({
                            success:"false",
                        })  
                    } else {
                         res.json({
                            success: rows[0].type,
                        })   
                    }
                })
        } else {
            console.log(error);
        }
    })
});

router.get('/searchUserProfile/:username', (req, res) => {
    const { username } = req.params;
    mysqlConnection.query('select * from user where username = ?',[username], (error, rows, fields) => {
        if(!error) {
            res.json(rows);
        } else {
            console.log(error);
        }
    });
});


router.put('/updateUserProfile/:username', (req, res) => {
    const { username } = req.params;
    const nic = req.body.nic;
    const email = req.body.email;

    mysqlConnection.query('update user set nic=? , email =?  where username = ?',[username,nic,email,username], (error, rows, fields) => {
        if(!error) {
            res.json(rows);
        } else {
            console.log(error);
        }
    });
});

router.put('/updatePassword/:username', (req, res) => {
    const { username } = req.params;
    const typeForgotPassowrd = req.body.typeForgotPassowrd;
      bcrypt.hash(typeForgotPassowrd, 10,function(err,hashedPass){
        if(err){
            res.json({
                error:err
            })
        }

    mysqlConnection.query("update user set password = ?  where username = ?",[hashedPass  , username], (error, rows, fields) => {
        if(!error) {
               res.json({
                Status: 'Status updated'
            });
        } else {
            console.log(error);
        }
    });
  });
});

module.exports = router;