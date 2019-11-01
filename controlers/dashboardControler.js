
const userModel=require("../models/user");
const ingrModel=require("../models/ingredient");
const ingrTypeModel=require("../models/ingredientTypes");
const prodMenuModel=require("../models/menu")
const jwt=require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;




function getUser(req){
    let authToken=req.headers['authorization']
    
   return jwt.verify(authToken, JWTKey).data; 
}
exports.login=(req, res, next)=>{
    userModel.findOne({$or:[{userName:req.body.userName},{email:req.body.userName}]},(err,user)=>{
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
                    jwt.sign({ data:data},JWTKey,{expiresIn: '7d'},(err,token)=>{
                        res.json(token)
                    })                    
                }
                else{
                    res.status(400).json("Wrong user name or password") 
                }
                
            });            
        }
        else{
            res.status(400).json("Wrong user name or password")
        }        
    })    
}

exports.getUsers=(req,res,next)=>{    
    var decoded = getUser(req)  
    userModel.findOne({_id:decoded.id},(err,data)=>{
        if (data.role=="superAdmin"){
            userModel.find({_id:{$ne:decoded.id}},(err,user)=>{
                res.json(user)
            })
        }
        else{
            res.json([])
        }
        
    })
  
}
exports.addUser=(req,res,next)=>{
    
    var decoded = getUser(req)
    userModel.findOne({_id:decoded.id},(err,data)=>{
        if (data.role=="superAdmin"){
            bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    req.body.password=hash
                    req.body.role="Admin"
                    userModel.create(req.body,(err,user)=>{
                        res.json(user);
                    })
                });
            });
            
        }
        else{
            res.json([])
        }
        
    })
}

exports.getIngrMenu=(req,res,next)=>{   
    let decoded = getUser(req)
    ingrModel.find({user_id:decoded.id},(err,ingr)=>{
        res.json(ingr)
    }) 
    
}

exports.getIngredient=(req,res,next)=>{   
    let decoded = getUser(req)
    ingrTypeModel.find({user_id:decoded.id},(err,ingr)=>{
        res.json(ingr)
    }) 
    
}

exports.getProdMenu=(req,res,next)=>{   
    let decoded = getUser(req)
    prodMenuModel.find({user_id:decoded.id},(err,prod)=>{
        res.json(prod)
    }) 
    
}

exports.addIngrMenu=(req,res,next)=>{   
    let decoded = getUser(req)
    let dat={
        title:req.body.title,
        user_id:decoded.id,        
    }
    ingrModel.create(dat,(err,ingrMenu)=>{
        res.json(ingrMenu);
    })  
    
}
exports.addProdMenu=(req,res,next)=>{   
    let decoded = getUser(req)
    let dat={
        title:req.body.title,
        user_id:decoded.id,        
    }
    prodMenuModel.create(dat,(err,prodMenu)=>{
        res.json(prodMenu);
    })  
    
}
exports.addIngredient=(req,res,next)=>{  
    console.log(req.file)
    console.log(req.body)
    let decoded = getUser(req)
    let data=req.body
    data.user_id=decoded.id
    data.normal_price=data.price
    data.image=req.file.filename

    ingrTypeModel.create(data,(err,ingr)=>{
        res.json(ingr);
    })    
}


exports.deleteIngredient=(req,res,next)=>{  
    ingrTypeModel.findOneAndDelete({_id:req.query.id},(err,data)=>{
        res.json(data)
    })       
}