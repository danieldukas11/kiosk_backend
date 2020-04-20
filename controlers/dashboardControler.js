const userModel=require("../models/user");
const ingrModel=require("../models/ingredient");
const ingrTypeModel=require("../models/ingredientTypes");
const prodMenuModel=require("../models/menu");
const productModel=require("../models/product");
//const specialModel=require("../models/special");
//const comboMenuModel=require("../models/combomenu");
const progressModel=require("../models/progressMonitor");
const kioskModel=require("../models/kiosk");
const fs=require("fs");
const jwt=require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;




function getUser(req){      
   return jwt.verify(req.headers['authorization'], JWTKey).data; 
}

exports.login=async (req, res, next)=>{
    const user= await userModel.findOne({$or:[{userName:req.body.userName},{email:req.body.userName}]})
    .catch(err=> res.status(400).json(err))
    if(user){
       let pass=await bcrypt.compare(req.body.password, user.password)
       .catch(err=> res.status(400).json(err));        
        if(pass){
            let data={
                id:user._id,
                userName:user.userName,
                role:user.role
            }
            jwt.sign({ data:data},JWTKey,{expiresIn: '168h'},(err,token)=>{
                res.json(token)
            })                    
        } else {
            res.status(400).json("Wrong user name or password") 
        }           
    } else {
        res.status(400).json("Wrong user name or password")
    }
}
exports.getUsers=async (req,res,next)=>{    
    var decoded = getUser(req)  
    let user = await userModel.findOne({_id:decoded.id})
    .catch(err=> res.status(400).json(err));
        if (user.role=="superAdmin"){
            userModel.find({_id:{$ne:decoded.id}},(err,user)=>{
                res.json(user)
            })
        }
        else{
            res.json([])
        }    
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

exports.getIngrCategories=async (req,res,next)=>{   
    let decoded = getUser(req)
    let ingrCategory = await ingrModel.find({user_id:decoded.id}).sort({order:1})
    .catch(err=> res.status(400).json(err)); 
    res.json(ingrCategory)
}


exports.getIngredient=async(req,res,next)=>{   
    let decoded = getUser(req);
    let ingr = await ingrTypeModel.find({user_id:decoded.id}).sort({order:1})
    .catch(err=> res.status(400).json(err));    
    res.json(ingr) 
    
}

exports.getProdMenu=async(req,res,next)=>{   
    let decoded = getUser(req);
    let prodCategory = await prodMenuModel.find({user_id:decoded.id}).sort({order:1})
    .catch(err=> res.status(400).json(err));   
    res.json(prodCategory)     
    
}


exports.getProducts=async(req,res,next)=>{   
    let decoded = getUser(req)
    const prod= await productModel.find({user_id:decoded.id}) .sort({order:1})
    .catch(err=> res.status(400).json(err));   
    res.json(prod)    
    
}

exports.addIngrMenu=async(req,res,next)=>{   
    let decoded = getUser(req);
    let quantity= await ingrModel.countDocuments({user_id:decoded.id})
    .catch(err=> res.status(400).json(err));
    let dat={
        title:req.body.title,
        user_id:decoded.id,
        order:+quantity+1
    }
    ingrModel.create(dat,(err,ingrMenu)=>{
        res.json(ingrMenu);
    })  
    
}
exports.addProdMenu=async(req,res,next)=>{   
    let decoded = getUser(req)
    let quantity= await prodMenuModel.countDocuments({user_id:decoded.id})
    .catch(err=> res.status(400).json(err));
    let dat={
        title:req.body.title,
        user_id:decoded.id, 
        order:+quantity+1       
    }
    prodMenuModel.create(dat,(err,prodMenu)=>{
        res.json(prodMenu);
    })  
    
}
exports.addIngredient= async (req,res,next)=>{  
    const decoded = getUser(req);
    const quantity= await ingrTypeModel.countDocuments({$and:[{user_id:decoded.id},{ ingredient_ids: { $in:req.body.ingredient_ids } },]});
    const index= quantity+1
    const category=await ingrModel.findOne({_id:req.body.ingredient_ids})
    const order=(category.order * 1000) + index    
    let data={
        user_id:decoded.id,   
        title:req.body.title,
        ingredient_ids:req.body.ingredient_ids,
        order:order
    }
    if(req.body.price&&req.body.price!=="undefined"){
        data.price=req.body.price
    }
    if(req.body.light_price&&req.body.light_price!=="undefined"){
        data.light_price=req.body.light_price
    }
    if(req.body.double_price&&req.body.double_price!=="undefined"){
        data.double_price=req.body.double_price
    }
    if(req.file){
        data.image=req.file.filename;
    }
    ingrTypeModel.create(data,(err,ingr)=>{
        res.json(ingr);
    })

}

exports.addProduct=async (req,res,next)=>{  
    let decoded = getUser(req)
    const a=JSON.parse(req.body.menu_ids)
    const quantity= await productModel.countDocuments({$and:[{user_id:decoded.id},{ menu_ids: { $in:a } },]});
    const index= quantity+1
    const category=await prodMenuModel.findOne({_id:a})
    const order=(category.order * 1000) + index   
    
       let dat={} 
       dat.title=req.body.title;
       dat.order=order;
       if(req.file){
        dat.image=req.file.filename
       }
       dat.customizable=req.body.customizable;
       dat.sizable=req.body.sizable;
       dat.price=req.body.price;
      
       
       dat.menu_ids=JSON.parse(req.body.menu_ids)
       dat.user_id=decoded.id
       if(dat.sizable&&req.body.sizes){          
        dat.sizes=JSON.parse(req.body.sizes);
        dat.size=dat.sizes[0];
        dat.price=Number(dat.size.price)     
          
    }
    else{
        dat.sizes=[]
        dat.size=null;
    }
        
        productModel.create(dat,(err,product)=>{
            if(product.customizable){
                let defingr=JSON.parse(req.body.defaultIngr);
                let pringr=JSON.parse(req.body.prodIngr);
                let optIngr=JSON.parse(req.body.optionalIngr);
                if(pringr&&pringr.length){
                    ingrModel.updateMany(
                        { _id: { $in:pringr } },
                        {$push:{product_ids:product._id}},
                        (err,data)=>{
                            if(err){
                                return res.json(err)
                            }
                            if(defingr&&defingr.length){
                                ingrTypeModel.updateMany(
                                    { _id: { $in:defingr } },
                                    {$push:{default_ids:product._id}},
                                    (err,data)=>{
                                        if(err){
                                            return res.json(err)
                                        }
                                        if(optIngr&&optIngr.length){
                                            ingrTypeModel.updateMany(
                                                { _id: { $in:optIngr } },
                                                {$push:{optional_ids:product._id}},
                                                (err,data)=>{
                                                    if(err){
                                                        return res.json(err)
                                                    }
                                                    return res.json(product)                        
                                                })
            
                                        }
                                        else{
                                            return res.json(product)
                                        }   
                                    }
                                )
                            }
                            else{
                                return res.json(product)
                            }   
                        }
                    )
                } 
                else{
                    return res.json(product)
                } 
                
            }
            else{
                res.json(product)
            }
        })  
        //res.json("sdsds")
}



exports.deleteIngredient=(req,res,next)=>{ 
    ingrTypeModel.findOne({_id:req.query.id},(err,data)=>{
        if (err){
            res.status(400).json(err)
            return
        }
        if (fs.existsSync(`public/images${data.image}`)){
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
        }
        else{
            ingrTypeModel.findOneAndDelete({_id:req.query.id},(err,data)=>{
                res.json(data)
            })
        }
        
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
    progressModel.find({user_id:decoded.id},(err,data)=>{
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
    let decoded = getUser(req)
    let ingr={
         
        title:req.body.title,
      
        user_id:decoded.id,        
    }
    if(req.body.price&&req.body.price!=="undefined"){
        ingr.price=req.body.price
    }
    else{
        ingr.price=null
    }
    if(req.body.light_price&&req.body.light_price!=="undefined"){
        ingr.light_price=req.body.light_price
    }
    else{
        ingr.light_price=null
    }
    if(req.body.double_price&&req.body.double_price!=="undefined"){
        ingr.double_price=req.body.double_price
    }
    else{
        ingr.double_price=null
    }
    if(req.file){
        ingr.image=req.file.filename
    }
    ingrTypeModel.findOne({_id:req.body._id},(err,data)=>{
        if (err){
            res.status(400).json(err)
            return
        }
        console.log(data)
       

        ingrTypeModel.updateOne({_id:req.body._id},ingr,(err,newData)=>{
            if (err){
                res.status(400).json(err)
                return
            }
            if (fs.existsSync(`./public/images/${data.image}`) && req.file) {
                try{
                    fs.unlinkSync(`./public/images/${data.image}`);
                }
                catch(err)
                {
                    return res.json(err)
                }
            }
            res.json(newData)
        })

    }) 
   
}
exports.updateProdMenu=async (req,res,next)=>{
    const result= await prodMenuModel.updateOne({_id:req.body._id},{title:req.body.title})
    .catch(err=>
            {
            return res.json(err)
    }) 
    res.json(result)
}
exports.updateProduct=async(req,res,next)=>{
   
    let prod={}
    if(req.body.price){
        prod.price=Number(req.body.price)
    }
    if(req.body.title){
        prod.title=req.body.title
    }
    if(req.body.sizable){
        prod.sizable=req.body.sizable;
    }
    if(req.body.menu_ids){
        prod.menu_ids=JSON.parse(req.body.menu_ids)
    }
    if(req.body.customizable){
        prod.customizable=req.body.customizable
    }
    if(req.file){
        prod.image=req.file.filename
    }
    else if(req.body.image_name&& req.body.image_name!="null"){
        prod.image=req.body.image_name
    }
    else { 
        prod.image=null
    }
    if(prod.sizable&&req.body.sizes){    
        if(req.body.sizes&&req.body.sizes!="undefined"){
            prod.sizes=JSON.parse(req.body.sizes);
            prod.size=prod.sizes[0];
            prod.price=Number(prod.size.price) 
        }   
        else{
            prod.sizes=[] 
            prod.size=null
            prod.price=0
        }  
       
            
          
    }
    else{
        prod.sizes=[]
        prod.size=null;
    }
    let prodIngr=JSON.parse(req.body.prodIngr)
    let optIngr=JSON.parse(req.body.optionalIngr)
    let defIngr=JSON.parse(req.body.defaultIngr)
    let product=await productModel.findOne({_id:req.body._id})
        .catch(err=>
            {
            return res.json(err)
        })
        
        if (fs.existsSync(`./public/images/${product.image}`)) {
            try{
                fs.unlinkSync(`./public/images/${product.image}`);
            }
            catch(err)
            {
                return res.json(err)
            }
        }
    
    
    await productModel.updateOne({_id:req.body._id},prod)
        .catch(err=>
            {
            return res.json(err)
        })
   
    await ingrModel.updateMany({},{$pull:{product_ids:req.body._id}})
        .catch(err=>{
            return res.json(err)
        })
        
    await ingrModel.updateMany({_id: { $in:prodIngr }}, {$push:{product_ids:req.body._id}})
        .catch(err=>{
            return res.json(err)
        })
                
    await ingrTypeModel.updateMany({},{$pull:{default_ids:req.body._id,optional_ids:req.body._id}})
        .catch(err=>{
            return res.json(err)
        })
       
    await  ingrTypeModel.updateMany( { _id: { $in:optIngr }},{$push:{optional_ids:req.body._id}})
        .catch(err=>{
            return res.json(err)
        })                        
    await ingrTypeModel.updateMany({_id: { $in:defIngr}},{$push:{default_ids:req.body._id}})
        .catch(err=>{
            return res.json(err)
        })
    
    res.json("updated")

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

//////////////////////////////////////////////update order//////////////////////////////////////////////////////////////////////////////////////////
exports.changeIngrCategoriesOrder=async (req,res,next)=>{
    let decoded = getUser(req)
   let quantity= await ingrModel.countDocuments({user_id:decoded.id})
  
   if(req.body.direction === "up"){
       if(req.body.order <= 1){
           res.status(400).json("order can not be updated")
       }
       else{
          
            let number=Number(req.body.order)-1
            let ingr=await ingrModel.findOne({$and:[{user_id:decoded.id},{order:number}]})            
           await ingrModel.updateOne({$and:[{user_id:decoded.id},{order:number}]},{order:req.body.order})
           await ingrTypeModel.updateMany({$and:[{user_id:decoded.id},{ingredient_ids: { $in: ingr._id }}]},{$inc:{order:1000}})
            await ingrModel.updateOne({$and:[{user_id:decoded.id},{_id:req.body._id}]},{order:number})
            await ingrTypeModel.updateMany({$and:[{user_id:decoded.id},{ingredient_ids: { $in: req.body._id }}]},{$inc:{order:-1000}})
          
           res.json("updated")
       }

    }
   else if(req.body.direction === "down"){
      
        if(req.body.order>=quantity){
            res.status(400).json("order can not be updated")   
        }
        else{
            let number=Number(req.body.order)+1
            let ingr=await ingrModel.findOne({$and:[{user_id:decoded.id},{order:number}]})
            await ingrModel.updateOne({$and:[{user_id:decoded.id},{order:number}]},{order:req.body.order});
            await ingrTypeModel.updateMany({$and:[{user_id:decoded.id},{ingredient_ids: { $in: ingr._id }}]},{$inc:{order:-1000}})
            await ingrModel.updateOne({$and:[{user_id:decoded.id},{_id:req.body._id}]},{order:number});
            await ingrTypeModel.updateMany({$and:[{user_id:decoded.id},{ingredient_ids: { $in: req.body._id }}]},{$inc:{order:1000}})
            res.json("updated")
        }
   }
   else{
       res.status(400).json("Please send correct order data")
   }
}
exports.changeIngrOrder=async (req,res,next)=>{
    const decoded = getUser(req)
    const category= await ingrModel.findOne({_id:req.body.menuId})
    let prodMenuOrder=category.order * 1000;
    let quantity= await ingrTypeModel.countDocuments({$and:[{user_id:decoded.id}, {ingredient_ids: { $in: req.body.menuId }}]})    
    .catch(err=> res.status(400).json(err));  
    if(req.body.direction === "up"){
        if(req.body.order-prodMenuOrder <= 1){
            res.status(400).json("order can not be updated")
        }
        else{
            let number=Number(req.body.order)-1
            await ingrTypeModel.updateOne({$and:[{user_id:decoded.id},{order:number}]},{order:req.body.order})
            .catch(err=> res.status(400).json(err)); 
            await ingrTypeModel.updateOne({$and:[{user_id:decoded.id},{_id:req.body._id}]},{order:number})
            .catch(err=> res.status(400).json(err));  
            res.json("updated")
        }
    }
    else if(req.body.direction === "down"){
      
        if(req.body.order-prodMenuOrder>=quantity){
            res.status(400).json("order can not be updated")   
        }
        else{
            let number=Number(req.body.order)+1
            await ingrTypeModel.updateOne({$and:[{user_id:decoded.id},{order:number}]},{order:req.body.order});
            await ingrTypeModel.updateOne({$and:[{user_id:decoded.id},{_id:req.body._id}]},{order:number});
            res.json("updated")
        }
   }
   else{
       res.status(400).json("Please send correct order data")
   }    
}


exports.changeProdOrder=async (req,res,next)=>{
    const decoded = getUser(req)
    const category= await prodMenuModel.findOne({_id:req.body.menuId})
    let prodMenuOrder=category.order * 1000;
    let quantity= await productModel.countDocuments({$and:[{user_id:decoded.id}, {menu_ids: { $in: req.body.menuId }}]})    
    .catch(err=> res.status(400).json(err));   
    console.log(req.body);
    if(req.body.direction === "up"){
        if(req.body.order-prodMenuOrder <= 1){
            res.status(400).json("order can not be updated")
        }
        else{
            let number=Number(req.body.order)-1
            await productModel.updateOne({$and:[{user_id:decoded.id},{order:number}]},{order:req.body.order})
            .catch(err=> res.status(400).json(err)); 
            await productModel.updateOne({$and:[{user_id:decoded.id},{_id:req.body._id}]},{order:number})
            .catch(err=> res.status(400).json(err));  
            res.json("updated")
        }
    }
    else if(req.body.direction === "down"){
      
        if(req.body.order-prodMenuOrder>=quantity){
            res.status(400).json("order can not be updated")   
        }
        else{
            let number=Number(req.body.order)+1
            await productModel.updateOne({$and:[{user_id:decoded.id},{order:number}]},{order:req.body.order});
            await productModel.updateOne({$and:[{user_id:decoded.id},{_id:req.body._id}]},{order:number});
            res.json("updated")
        }
   }
   else{
       res.status(400).json("Please send correct order data")
   }    
}

exports.changeProdCategoriesOrder=async(req,res,next)=>{
    let decoded = getUser(req)
   let quantity= await prodMenuModel.countDocuments({user_id:decoded.id})
  
   if(req.body.direction === "up"){
       if(req.body.order <= 1){
           res.status(400).json("order can not be updated")
       }
       else{          
            let number=Number(req.body.order)-1
            let prod=await prodMenuModel.findOne({$and:[{user_id:decoded.id},{order:number}]})
            
           await prodMenuModel.updateOne({$and:[{user_id:decoded.id},{order:number}]},{order:req.body.order})
           let a=await productModel.updateMany({$and:[{user_id:decoded.id},{menu_ids: { $in: prod._id }}]},{$inc:{order:1000}})
            await prodMenuModel.updateOne({$and:[{user_id:decoded.id},{_id:req.body._id}]},{order:number})    
            await productModel.updateMany({$and:[{user_id:decoded.id},{menu_ids: { $in: req.body._id }}]},{$inc:{order:-1000}})      
            console.log(a)
            res.json("updated")
       }

   }
   else if(req.body.direction === "down"){
    
        if(req.body.order>=quantity){
            res.status(400).json("order can not be updated")   
        }
        else{
            let number=Number(req.body.order)+1
            let prod=await prodMenuModel.findOne({$and:[{user_id:decoded.id},{order:number}]})
            await prodMenuModel.updateOne({$and:[{user_id:decoded.id},{order:number}]},{order:req.body.order});
            await productModel.updateMany({$and:[{user_id:decoded.id},{menu_ids: { $in: prod._id }}]},{$inc:{order:-1000}})
            await prodMenuModel.updateOne({$and:[{user_id:decoded.id},{_id:req.body._id}]},{order:number});
            await productModel.updateMany({$and:[{user_id:decoded.id},{menu_ids: { $in: req.body._id }}]},{$inc:{order:1000}})
            res.json("updated")
        }
   }
   else{
       res.status(400).json("Please send correct order data")
   }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////show hide update////////////////////////////////////////////
exports.updateIngrMenuVisiblity= async(req,res,next) =>{
    let result=await ingrModel.updateOne({_id:req.body._id},{hidden: req.body.hidden})
    res.json(result)
}
exports.updateIngrVisiblity= async(req,res,next) =>{
    let decoded = getUser(req)
    let result=await ingrTypeModel.updateOne({_id:req.body._id},{hidden: req.body.hidden})
    res.json(result)
}
exports.updateProdMenuVisiblity= async(req,res,next) =>{    
    let decoded = getUser(req)
    let result=await prodMenuModel.updateOne({_id:req.body._id},{hidden: req.body.hidden})
    res.json(result)
}
exports.updateProdVisiblity= async(req,res,next) =>{    
    let decoded = getUser(req)
    let result=await productModel.updateOne({_id:req.body._id},{hidden: req.body.hidden})
    res.json(result)
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////kiosk management///////////////////////////////////////////////////
exports.addKioskVideo=(req,res,next)=>{
    let decoded = getUser(req) 
    let formdata={
        user_id:decoded.id,
        kioskVideo:req.file.filename,
    }
    kioskModel.findOne({user_id:decoded.id},(err,data)=>{        
        if(data){
            kioskModel.findOneAndUpdate({user_id:decoded.id},{adVideo:req.file.filename},(err,data)=>{
                if (err){
                    res.status(400).json(err)
                    return
                }
                res.json(data)
            })

        }
        else{
            kioskModel.create(formdata,(err,data)=>{
                if (err){
                    res.status(400).json(err)
                    return
                }
                res.json(data)
            })
        }        
    })
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////


// exports.updateCombo=(req,res,next)=>{
//     specialModel.updateOne({_id:req.body._id},{title:req.body.title},(err,data)=>{
//         if (err){
//             res.status(400).json(err)
//             return
//         }
//         res.json(data)
//     })  
// }
// exports.updateComboMenu=(req,res,next)=>{
//     comboMenuModel.updateOne({_id:req.body._id},{title:req.body.title,configurable:req.body.configurable},(err,data)=>{
//         if (err){
//             res.status(400).json(err)
//             return
//         }
//         res.json(data)
//     })  
// }
// exports.deleteCombo=(req,res,next)=>{
//     specialModel.findOneAndDelete({_id:req.query.id},(err,data)=>{     
//         if(err){
//             res.status(400).json(err)
//             return
//         }                  
//         if (data&&data.image){                           
//             if (fs.existsSync(`./public/images/${data.image}`)) {
//                 fs.unlinkSync(`./public/images/${data.image}`);}
//         }
//         comboMenuModel.updateMany( { specials_id: { $in: req.query.id } },
//             {$pullAll:{specials_id:[req.query.id]}},(err,data)=>{
//                 productModel.updateMany({ special_ids: { $in: req.query.id }} ,{$pullAll:{special_ids: [req.query.id]}},(err,data)=>{
//                     if(err){
//                         res.status(400).json(err)
//                         return
//                     }  
//                     productModel.updateMany({ selected_ids: { $in: req.query.id }} ,{$pullAll:{selected_ids: [req.query.id]}},(err,data)=>{
//                         if(err){
//                             res.status(400).json(err)
//                             return
//                         }  
//                         res.json(data)
//                     })
//                 })
//             })
//     })
// }
// exports.getComboMenu=(req,res,next)=>{   
//     let decoded = getUser(req)
//     comboMenuModel.find({user_id:decoded.id},(err,prod)=>{
//         res.json(prod)
//     }) 
    
// }
// exports.getCombos=(req,res,next)=>{
//     var decoded = getUser(req) ;
//      specialModel.find({user_id:decoded.id},(err,special)=>{
//         res.json(special)
//     })  
// }
// exports.addCombo=(req,res,next)=>{ 
//     let decoded = getUser(req) 
//     let dat={
//         title:req.body.title,
//         image:req.file.filename,
//         user_id:decoded._id,
//         price:req.body.price,
//         user_id:decoded.id
//     }   
//     let combo_menu=JSON.parse(req.body.comboMenu ),
//     combo_menu_id=[],
//     defaults=JSON.parse(req.body.defaults ),
//     defaults_ids=[]
//     products=JSON.parse(req.body.products ),
//     products_ids=[];
//     if (combo_menu&&combo_menu.length){
//         combo_menu.forEach(m=>{
//             combo_menu_id.push(m._id)
//         })
//     }
//     if (defaults&&defaults.length){
//         defaults.forEach(m=>{
//             defaults_ids.push(m._id)
//         })
//     }
//     if (products&&products.length){
//         products.forEach(m=>{
//             products_ids.push(m._id)
//         })
//     }       
  

//     specialModel.create(dat,(err,combo)=>{
//         if(combo_menu_id&&combo_menu_id.length){     
//             comboMenuModel.updateMany(
//              { _id: { $in: combo_menu_id } },
//              {$push:{specials_id:combo._id}},
//              (err,data)=>{
//                 if(products_ids&&products_ids.length){  
//                     productModel.updateMany(
//                         { _id: { $in: products_ids } },
//                         {$push:{special_ids:combo._id}},
//                         (err,data)=>{
//                             if(defaults_ids&&defaults_ids.length){
//                                 productModel.updateMany(
//                                     { _id: { $in: products_ids } },
//                                     {$push:{selected_ids:combo._id}},
//                                     (err,data)=>{
//                                         res.json(combo)

//                                     })
//                             }
//                             else{
//                                 res.json(combo)
//                             }
//                         }
//                     )
//                 }
//                 else{
//                     res.json(combo)
//                 }
                
//             })  
//         } 
//         else{
//             res.json(combo)
//         }
//     })   
    
// }
// exports.addComboMenu=(req,res,next)=>{ 
//     let decoded = getUser(req)  
//     let dat=req.body  
//     dat.user_id= decoded.id
//     comboMenuModel.create(dat,(err,comboMenu)=>{
//         res.json(comboMenu)
//     })
    
// }
    
// exports.addComboProd=   (req,res,next)=>{ 
//     if(req.body.products&&req.body.products.length){     
//        productModel.updateMany(
//         { _id: { $in: req.body.products } },
//         {$push:{special_menu_ids:req.body.special_menu_id}},
//         (err,data)=>{
//             res.json(data)
//         })
     
       
//     }
    
    
// }

// exports.deleteComboProd=(req,res,next)=>{
//     productModel.updateMany(
//         { _id:req.query.id },
//        {$set:{special_menu_ids:[],special_ids:[],selected_ids:[]}},
//         (err,data)=>{
//             res.json(data)
//     })
  
// }

// exports.deleteComboMenu=(req,res,next)=>{
//     comboMenuModel.findOneAndDelete({_id:req.query.id},(err,data)=>{     
//         if(err){
//             res.status(400).json(err)
//             return
//         }                  
//         productModel.updateMany(
//             { special_menu_ids: { $in: req.query.id } },
//            {$set:{special_menu_ids:[],special_ids:[],selected_ids:[]}},
//             (err,data)=>{
//                 if(err){
//                     res.status(400).json(err)
//                     return
//                 }  
//                 res.json(data)
//         })
        
//     })
// }