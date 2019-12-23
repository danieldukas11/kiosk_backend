const userModel=require("../models/user");
const ingrModel=require("../models/ingredient");
const ingrTypeModel=require("../models/ingredientTypes");
const prodMenuModel=require("../models/menu");
const productModel=require("../models/product");
const specialModel=require("../models/special");
const comboMenuModel=require("../models/combomenu");
const progressModel=require("../models/progressMonitor");
const fs=require("fs");
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
                    jwt.sign({ data:data},JWTKey,{expiresIn: '120ms'},(err,token)=>{
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
exports.getCombos=(req,res,next)=>{
    var decoded = getUser(req) ;
     specialModel.find({user_id:decoded.id},(err,special)=>{
        res.json(special)
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
        price:req.body.price,
        user_id:decoded.id
    }   
    let combo_menu=JSON.parse(req.body.comboMenu ),
    combo_menu_id=[],
    defaults=JSON.parse(req.body.defaults ),
    defaults_ids=[]
    products=JSON.parse(req.body.products ),
    products_ids=[];
    if (combo_menu&&combo_menu.length){
        combo_menu.forEach(m=>{
            combo_menu_id.push(m._id)
        })
    }
    if (defaults&&defaults.length){
        defaults.forEach(m=>{
            defaults_ids.push(m._id)
        })
    }
    if (products&&products.length){
        products.forEach(m=>{
            products_ids.push(m._id)
        })
    }       
  

    specialModel.create(dat,(err,combo)=>{
        if(combo_menu_id&&combo_menu_id.length){     
            comboMenuModel.updateMany(
             { _id: { $in: combo_menu_id } },
             {$push:{specials_id:combo._id}},
             (err,data)=>{
                if(products_ids&&products_ids.length){  
                    productModel.updateMany(
                        { _id: { $in: products_ids } },
                        {$push:{special_ids:combo._id}},
                        (err,data)=>{
                            if(defaults_ids&&defaults_ids.length){
                                productModel.updateMany(
                                    { _id: { $in: products_ids } },
                                    {$push:{selected_ids:combo._id}},
                                    (err,data)=>{
                                        res.json(combo)

                                    })
                            }
                            else{
                                res.json(combo)
                            }
                        }
                    )
                }
                else{
                    res.json(combo)
                }
                
            })  
        } 
        else{
            res.json(combo)
        }
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
            res.json(data)
        })
     
       
    }
    
    
}

exports.deleteIngredient=(req,res,next)=>{ 
    ingrTypeModel.findOne({_id:req.query.id},(err,data)=>{
        if (err){
            res.status(400).json(err)
            return
        }
        fs.unlink(`./public/images/${data.image}`, function (err) {
            if (err){
                res.status(400).json(err)
                return
            }
            // if no error, file has been deleted successfully
            ingrTypeModel.findOneAndDelete({_id:req.query.id},(err,data)=>{
                res.json(data)
            })
        });
    }) 
        
}


exports.deleteIngredientMenu=(req,res,next)=>{
    ingrTypeModel.find({ ingredient_ids: { $in: req.query.id } },(err,data)=>{
        if (data&&data.length){
            data.forEach((d)=>{
                if (fs.existsSync(`./public/images/${d.image}`)) {
                fs.unlinkSync(`./public/images/${d.image}`);  
                }                  
            })
        }
        ingrTypeModel.deleteMany({ ingredient_ids: { $in: req.query.id } },(err,data)=>{
            if(err){
                res.status(400).json(err)
            }
            ingrModel.findOneAndDelete({_id:req.query.id},(err,data)=>{
                if(err){
                    res.status(400).json(err)
                }
                res.json(data)
            })
        })
   })
  
}

exports.deleteProdMenu=(req,res,next)=>{
    prodMenuModel.findOneAndDelete({_id:req.query.id},(err,data)=>{     
        if(err){
            res.status(400).json(err)
            return
        }     
        productModel.find({ menu_ids: { $in: req.query.id } },(err,data)=>{
        let ar=[]
        if (data&&data.length){
            data.forEach((d)=>{
                ar.push(d._id)
                if (fs.existsSync(`./public/images/${d.image}`)) {
                fs.unlinkSync(`./public/images/${d.image}`);  
                }                  
            })
        }
        productModel.deleteMany({ menu_ids: { $in: req.query.id } },(err,data)=>{
            console.log(ar)
            if(ar.length){
                ingrTypeModel.updateMany(
                    { default_ids: { $in: ar } },
                    {$pullAll:{default_ids:ar}},
                    (err,data)=>{
                        res.json(data)
                        return
                    })
                    return
            }
            res.json(data)
        })
        
       
    })
       
    })
   
}

exports.deleteProduct=(req,res,next)=>{
    ingrModel.updateMany(
        { product_ids: { $in: req.query.id } },
        {$pullAll:{product_ids:[req.query.id]}},
        (err,data)=>{
            if(err){
                res.status(400).json(err)
                return
            }
            ingrTypeModel.updateMany(
                { default_ids: { $in: req.query.id } },
                {$pullAll:{default_ids:[req.query.id]}},
                (err,data)=>{
                    if(err){
                        res.status(400).json(err)
                        return
                    }
                    productModel.findOneAndDelete({_id:req.query.id},(err,data)=>{     
                        if(err){
                            res.status(400).json(err)
                            return
                        }                  
                        if (data&&data.image){                           
                            if (fs.existsSync(`./public/images/${data.image}`)) {
                                fs.unlinkSync(`./public/images/${data.image}`);}
                        }
                        res.json(data)
                    })
                })
        })
     

    
}
exports.deleteComboProd=(req,res,next)=>{
    productModel.updateMany(
        { _id:req.query.id },
       {$set:{special_menu_ids:[],special_ids:[],selected_ids:[]}},
        (err,data)=>{
            res.json(data)
    })
  
}

exports.deleteComboMenu=(req,res,next)=>{
    comboMenuModel.findOneAndDelete({_id:req.query.id},(err,data)=>{     
        if(err){
            res.status(400).json(err)
            return
        }                  
        productModel.updateMany(
            { special_menu_ids: { $in: req.query.id } },
           {$set:{special_menu_ids:[],special_ids:[],selected_ids:[]}},
            (err,data)=>{
                if(err){
                    res.status(400).json(err)
                    return
                }  
                res.json(data)
        })
        
    })
}
exports.deleteCombo=(req,res,next)=>{
    specialModel.findOneAndDelete({_id:req.query.id},(err,data)=>{     
        if(err){
            res.status(400).json(err)
            return
        }                  
        if (data&&data.image){                           
            if (fs.existsSync(`./public/images/${data.image}`)) {
                fs.unlinkSync(`./public/images/${data.image}`);}
        }
        comboMenuModel.updateMany( { specials_id: { $in: req.query.id } },
            {$pullAll:{specials_id:[req.query.id]}},(err,data)=>{
                productModel.updateMany({ special_ids: { $in: req.query.id }} ,{$pullAll:{special_ids: [req.query.id]}},(err,data)=>{
                    if(err){
                        res.status(400).json(err)
                        return
                    }  
                    productModel.updateMany({ selected_ids: { $in: req.query.id }} ,{$pullAll:{selected_ids: [req.query.id]}},(err,data)=>{
                        if(err){
                            res.status(400).json(err)
                            return
                        }  
                        res.json(data)
                    })
                })
            }
            )
    })
}


exports.addAdVideo=(req,res,next)=>{
    let decoded = getUser(req) 
    let formdata={
        user_id:decoded.id,
        adVideo:req.file.filename,
    }
    progressModel.findOne({user_id:decoded.id},(err,data)=>{        
        if(data){
            progressModel.findOneAndUpdate({user_id:decoded.id},{adVideo:req.file.filename},(err,data)=>{
                if (err){
                    res.status(400).json(err)
                    return
                }
                res.json(data)
            })

        }
        else{
            progressModel.create(formdata,(err,data)=>{
                if (err){
                    res.status(400).json(err)
                    return
                }
                res.json(data)
            })
        }        
    })
    
}
exports.getprogressMonitorData=(req,res,next)=>{
    let decoded = getUser(req) 
    progressModel.find({_id:decoded.id},(err,data)=>{
        res.json(data)
    })
}

exports.updateIngrMenu=(req,res,next)=>{
    ingrModel.updateOne({_id:req.body._id},{title:req.body.title},(err,data)=>{
        if (err){
            res.status(400).json(err)
            return
        }
        res.json(data)
    })  

}
exports.updateIngredient=(req,res,next)=>{
    let ingr={
        title:req.body.title,
        light_price:req.body.light_price,
        double_price:req.body.double_price,
        normal_price:req.body.normal_price,
        price:req.body.normal_price,       
    }
    console.log(req)
    
    ingrTypeModel.updateOne({_id:req.body._id},ingr,(err,data)=>{
        if (err){
            res.status(400).json(err)
            return
        }
        res.json(data)
    })
}
exports.updateProdMenu=(req,res,next)=>{
    prodMenuModel.updateOne({_id:req.body._id},{title:req.body.title},(err,data)=>{
        if (err){
            res.status(400).json(err)
            return
        }
        res.json(data)
    })  
}
exports.updateProduct=(req,res,next)=>{
    let prod={
        title: req.body.title,
        price: req.body.price,
        sizable: req.body.sizable,
        customizable: req.body.customizable,
    }
    if(req.body.sizable){
        prod.sizes=req.body.sizes
    }
    if(prod.sizable&&req.body.sizes){          
        prod.sizes=JSON.parse(req.body.sizes);
        prod.size=prod.sizes[1];
        prod.price=prod.size.price     
          
    }
    if(prod.customizable){
        if(req.body.defaultIngredients&&req.body.defaultIngredients.length) {
            let a=0
            let ingr=JSON.parse(req.body.defaultIngredients)
            ingr.forEach(ing => {
                a+=ing.price
            });              
            prod.price=a 
        }
     }

    productModel.updateOne({_id:req.body._id},prod,(err,data)=>{
        if (err){
            res.status(400).json(err)
            return
        }
        res.json(data)
    })  

}
exports.updateCombo=(req,res,next)=>{
    specialModel.updateOne({_id:req.body._id},{title:req.body.title},(err,data)=>{
        if (err){
            res.status(400).json(err)
            return
        }
        res.json(data)
    })  
}
exports.updateComboMenu=(req,res,next)=>{
    comboMenuModel.updateOne({_id:req.body._id},{title:req.body.title,configurable:req.body.configurable},(err,data)=>{
        if (err){
            res.status(400).json(err)
            return
        }
        res.json(data)
    })  
}

exports.updateComboProd=(req,res,next)=>{
    
}
exports.updateUser = (req,res,next)=>{
    let usr={
       email:req.body.email,
       firstName:req.body.firstName,
       lastName:req.body.lastName, 
    }
    userModel.updateOne({_id:req.body._id},usr,(err,data)=>{
        if (err){
            res.status(400).json(err)
            return
        }
        res.json(data)
    })  
}
