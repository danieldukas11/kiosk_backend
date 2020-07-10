const menuModel = require('../models/menu');
const specialModel = require('../models/special');
const terminalModel = require('../models/terminals');
const userModel = require('../models/user');
const bcrypt = require('bcrypt');

exports.getMenu = async (req, res, next)=>{
  let id=req.headers.user
    userModel.findOne({_id:id},(err,user)=>{
    menuModel.aggregate([
      {$match:{$and:[{user_id:user._id},{hidden:false}]}},
      {$sort:{order:1}},
      { $lookup: {
          from: "products",
          let: { "menu_id": "$_id" },
          pipeline: [
            { $match: {$and:[{ $expr: { $in: [ "$$menu_id", "$menu_ids" ] } },{hidden:false}]} },
            {$sort:{order:1}},
            {
              $project:{
                "menu_ids":0,
                "special_ids":0,
                "special_menu_ids":0,
                "selected_ids":0,
              }
            },
            {
              $lookup: {
                from: 'specification_types',
                let: {'prod_id':'$_id'},
                pipeline: [
                  { $match: {$and:[{ $expr: { $in: [ "$$prod_id", "$default_ids" ] } }, {hidden:false}]} },
                  {$sort:{order:1}},
                  {
                    $lookup: {
                      from: "ingredients",
                      let: {'spec_id': '$_id'},
                      pipeline: [
                        { $match: {$and:[{ $expr: { $in: [ "$$spec_id", "$product_ids" ] } }, {hidden:false}]} },
                      ],
                      as: 'spec_ingredient',
                    }
                  }
                ],
                as:  'default_specifications',
              }
            },
            {
              $lookup: {
                from: 'specification_types',
                let: {'prod_id':'$_id'},
                pipeline: [
                  {$match: {$and:[{ $expr: { $in: [ "$$prod_id", "$default_ids" ] } }, {hidden:false}]}},
                  {$sort:{order:1}},
                  {
                    $lookup: {
                      from: "ingredients",
                      let: {'spec_id': '$_id'},
                      pipeline: [
                        {$match: {$and:[{ $expr: { $in: [ "$$spec_id", "$product_ids" ] } }, {hidden:false}]}},
                        {$sort:{order:1}},
                      ],
                      as: 'spec_ingredient',
                    }
                  }
                ],
                as:  'default_specifications',
              }
            },
            {
              $lookup: {
                from: 'specification_types',
                let: {'prod_id':'$_id'},
                pipeline: [
                  { $match: {$and:[{ $expr: { $in: [ "$$prod_id", "$optional_ids" ] } }, {hidden:false}]} },
                  {$sort:{order:1}},
                  {
                    $lookup: {
                      from: "ingredients",
                      let: {'spec_id': '$_id'},
                      pipeline: [
                        { $match: {$and:[{ $expr: { $in: [ "$$spec_id", "$product_ids" ] } }, {hidden:false}]} },
                      ],
                      as: 'spec_ingredient',
                    }
                  }
                ],
                as:  'optional_specifications',
              }
            },
            {
              $lookup:{
                from: "ingredients",
                let:{'prod_id':'$_id'},
                pipeline:[
                  { $match: {$and:[{ $expr: { $in: [ "$$prod_id", "$product_ids" ] } },{isIngredient:true},{hidden:false}]} },
                  {$sort:{order:1}},
                  {
                    $lookup:{
                      from: "ingredient_types",
                      let:{'ingr_cat_id':'$_id'},
                      pipeline:[
                        { $match: { $expr: { $and:[{$in: [ "$$ingr_cat_id", "$ingredient_ids" ]},{$in: [ "$$prod_id", "$default_ids" ]}] } } },
                        {
                          $project:{
                            "default_ids":0,
                            "ingredient_ids":0,
                          }
                        },
                      ] ,
                      as:"defaults"
                    }
                  },
                  {
                    $lookup:{
                      from: "ingredient_types",
                      let:{'ingr_cat_id':'$_id'},
                      pipeline:[
                        { $match: { $expr: { $and:[{$in: [ "$$ingr_cat_id", "$ingredient_ids" ]},{$in: [ "$$prod_id", "$optional_ids" ]}] } } },
                        {
                          $project:{
                            "default_ids":0,
                            "ingredient_ids":0,
                          }
                        },
                      ] ,
                      as:"optionals"
                    }
                  },

                  {
                    $project:{
                      "product_ids":0,
                    }
                  }
                ] ,
                as:"ingredients"
              }
            },

          ],
           as: "products"
        }}

  ],(err,data)=>{
    console.log(data)
      res.json(data)
  })
  })

}

/*exports.getSpecials=(req, res, next)=>{
  let id=req.headers.terminal_id
  terminalModel.findOne({_id:id},(err,terminal)=>{
    specialModel.aggregate([  
      {$match:{user_id:terminal.user_id}},
      {
        $lookup: {
          from: "specials-menus",
          let:{'id':'$_id'},
          pipeline: [
            { $match: { $expr: { $in: [ "$$id", "$specials_id" ] } } },
            {
              $lookup:{
                from:"products",
                let:{"menu_id":"$_id"},
                pipeline:[
                  {$match:{$expr:{$and:[{$in:["$$menu_id","$special_menu_ids"]},{$in:["$$id","$special_ids"]}]}}},
                 
                ],
                as:"products"
              }
            },
            {
              $lookup:{
                from:"products",
                let:{"menu_id":"$_id"},
                pipeline:[
                  {$match:{$expr:{$and:[{$in:["$$menu_id","$special_menu_ids"]},{$in:["$$id","$selected_ids"]}]}}},
                  {
                    $lookup:{
                      from: "ingredients",    
                      let:{'prod_id':'$_id'},  
                      pipeline:[
                        { $match: { $expr: { $in: [ "$$prod_id", "$product_ids" ] } } },
                        {
                          $lookup:{
                            from: "ingredient_types",    
                            let:{'ingr_id':'$_id'},  
                            pipeline:[
                              { $match: { $expr: { $in: [ "$$ingr_id", "$ingredient_ids" ] } } },
                              {
                                $project:{
                                  "default_ids":0,
                                  "ingredient_ids":0,                        
                                }
                              },
                            ] ,
                            as:"types"             
                          }                  
                        },
                      ],
                      as:"ingredients",
                    }
                  },
                  {
                    $lookup:{
                      from: "ingredient_types",    
                      let:{'prod_id':'$_id'},  
                      pipeline:[
                        { $match: { $expr: { $in: [ "$$prod_id", "$default_ids" ] } } },
                        {
                          $project:{
                            "default_ids":0,
                            "ingredient_ids":0,                        
                          }
                        },
                      ] ,
                      as:"defaults"             
                    }                  
                  },
                ],
                as:"default" 
              },
            },        
          ],
          as: "menus",
        }
      } ,
    
      
  
  ],(err,data)=>{     
      res.json(data)
      //console.log(data)
  })

  })
  
}*/
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
        console.log(user);
        res.json(
          user._id
        )

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

exports.loginByPin=async (req, res, next)=>{
 let user= await userModel.findOne({_id:req.headers.user});
 let pass=await bcrypt.compare(req.body.pin, user.pin);
 if(pass){
  res.json(user.pin)
 }
 else{
   res.status(400).json('Wrong Pin')
 }

}


exports.getKioskData=async (req, res, next)=>{
  const id=req.headers.user
  const data=await terminalModel.findOne({_id:id})
  res.json(data)
}
