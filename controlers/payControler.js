const userModel=require("../models/user");
const orderModel=require("../models/orders");
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
exports.login=(req, res, next)=>{
    userModel.findOne({$or:[{userName:req.body.email},{email:req.body.email}]},(err,user)=>{
      if(err){
        res.status(400).json(err)
        return
    }
      if(user){
        bcrypt.compare(req.body.password, user.password, function(err, pass) {
          if(err){
              res.status(400).json(err)
              return
          }
          if(pass){            
            let data={
                id:user._id,
                userName:user.userName,
                role:user.role
            }
            jwt.sign({ data:data},JWTKey,{expiresIn: '168h'},(err,token)=>{
                res.json(token)
            })                    
           
                        
          }
          else{
              res.status(400).json("Wrong User Name or Password") 
          }
          
        });
      }
      else{
        res.status(400).json("Wrong User Name or Password")
      }
      
    })
    
  }

  exports.checkCode=(req, res, next)=>{
      
      orderModel.findOne({$and:[{code:req.body.key},{isPaid:false}]},(err,order)=>{
        if(err){
          res.status(400).json(err)
          return
        }
        if(!order){
          let er={
            message:"Order With Code Not Found Please Write Right Code",
            code:400
          }
          res.status(400).json(er)
          console.log(er)
          return
        }
          res.json(order);
      })
  }