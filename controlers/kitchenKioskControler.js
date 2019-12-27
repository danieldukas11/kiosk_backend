const userModel=require("../models/user");
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