let menuModel=require('../models/menu')
let specialModel=require('../models/special')
exports.getMenu=(req, res, next)=>{
    menuModel.aggregate([
         
        { $lookup: {
            from: "products",
            let: { "id": "$_id" },
            pipeline: [
              { $match: { $expr: { $in: [ "$$id", "$menu_ids" ] } } },
              {
                $project:{
                  "menu_ids":0,
                  "special_ids":0,
                  "special_menu_ids":0,
                  "selected_ids":0
                }
              },
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
                    {
                      $project:{
                        "product_ids":0,                      
                      }
                    }
                  ] ,
                  as:"ingredients"             
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
             as: "products"
          }}    

    ],(err,data)=>{    
        res.json(data)
        console.log(data)
    })
 
}

exports.getSpecials=(req, res, next)=>{
  specialModel.aggregate([  
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
}
exports.login=(req, res, next)=>{
  
}