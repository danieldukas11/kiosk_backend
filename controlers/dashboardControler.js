
const userModel=require("../models/user");
const ingrModel=require("../models/ingredient");
const ingrTypeModel=require("../models/ingredientTypes");
const prodMenuModel=require("../models/menu");
const productModel=require("../models/product");
const specialModel=require("../models/special")
const comboMenuModel=require("../models/combomenu")
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
exports.getComboMenu=(req,res,next)=>{   
    let decoded = getUser(req)
    comboMenuModel.find({user_id:decoded.id},(err,prod)=>{
        res.json(prod)
    }) 
    
}

exports.getProducts=(req,res,next)=>{   
    let decoded = getUser(req)
    productModel.find({user_id:decoded.id},(err,prod)=>{
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
    let decoded = getUser(req)
    let data=req.body
    data.user_id=decoded.id
    data.normal_price=data.price
    data.image=req.file.filename

    ingrTypeModel.create(data,(err,ingr)=>{
        res.json(ingr);
    })    
}

exports.addProduct=(req,res,next)=>{  
    let decoded = getUser(req)
       let dat={} 
       dat.customizable=req.body.customizable;
       dat.sizable=req.body.sizable;
       dat.title=req.body.title;
       dat.image=req.file.filename
       dat.menu_ids=JSON.parse(req.body.menu_ids)
       dat.user_id=decoded.id
      
       if(dat.sizable&&req.body.sizes){          
           dat.sizes=JSON.parse(req.body.sizes);
           dat.size=dat.sizes[1];
           dat.price=dat.size.price     
             
        }
        if(dat.customizable){
           if(req.body.defaultIngr&&req.body.defaultIngr.length) {
               let a=0
               let ingr=JSON.parse(req.body.defaultIngr)
               console.log(ingr)
               ingr.forEach(ing => {
                   a+=ing.price
               });              
               dat.price=a 
           }
           console.log(dat.price)
        }
        if(req.body.price&&dat.customizable!="true"&&dat.sizable!="true"){
            dat.price=req.body.price
        }
        productModel.create(dat,(err,product)=>{
           if(product.customizable){
            let defingr=JSON.parse(req.body.defaultIngr)
                if(defingr&&defingr.length){
                    defingr.forEach(ding => {
                        ingrTypeModel.updateOne({_id:ding._id},{$push:{default_ids:product._id}},(err,ingr)=>{
                            let pringr=JSON.parse(req.body.prodIngr)
                            if(pringr&&pringr.length){
                                pringr.forEach(ing=>{
                                    ingrModel.updateOne({_id:ing._id},{$push:{product_ids:product._id}},(err,ingr)=>{
                                        
                                    })
                                })
                            }
                        })
                    });              
                }
                res.json(product)
            }
            else{
                res.json(product)
            }
            
        })    

}

exports.addCombo=(req,res,next)=>{ 
    let decoded = getUser(req)  
    let dat={
        title:req.body.title,
        image:req.file.filename,
        user_id:decoded._id,
        price:req.body.price
    }    
    specialModel.create(dat,(err,combo)=>{
        res.json(combo)
    })    
    
}


exports.addComboMenu=(req,res,next)=>{ 
    let decoded = getUser(req)  
    let dat=req.body  
    dat.user_id= decoded.id
    comboMenuModel.create(dat,(err,comboMenu)=>{
        res.json(comboMenu)
    })
    
}
    
exports.addComboProd=   (req,res,next)=>{ 
    if(req.body.products&&req.body.products.length){     
       productModel.updateMany(
        { _id: { $in: req.body.products } },
        {$push:{special_menu_ids:req.body.special_menu_id}},
        (err,data)=>{
            console.log(req.body.products)
            res.json(data)
        })
     
       
    }
   
    
}
function* updateProd(req){
    req.body.products.forEach( async prod=>{
        let p1=await productModel.updateOne({_id:prod._id},{$push:{special_menu_ids:req.body.special_menu_id}}).exec()

   })
}

exports.deleteIngredient=(req,res,next)=>{  
    ingrTypeModel.findOneAndDelete({_id:req.query.id},(err,data)=>{
        res.json(data)
    })       
}