let terminalModel=require('../models/terminals');
let menuModel=require('../models/menu');
exports.getMenu=async (id)=>{    
    let terminal = await terminalModel.findOne({_id:id});
      return await menuModel.aggregate([
        {$match:{user_id:terminal.user_id}},
        { $lookup: {
            from: "products",
            let: { "menu_id": "$_id" },
            pipeline: [
              { $match: { $expr: { $in: [ "$$menu_id", "$menu_ids" ] } } },
              {
                $project:{
                  "menu_ids":0,
                  "special_ids":0,
                  "special_menu_ids":0,
                  "selected_ids":0,                
                }
              },
              {
  
                $lookup:{
                  from: "ingredients",    
                  let:{'prod_id':'$_id'},  
                  pipeline:[
                    { $match: {$and:[{ $expr: { $in: [ "$$prod_id", "$product_ids" ] } },{isIngredient:false}]} },
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
                  ],
                  as: "specifications",
                } 
              },
              {
                $lookup:{
                  from: "ingredients",    
                  let:{'prod_id':'$_id'},  
                  pipeline:[
                    { $match: {$and:[{ $expr: { $in: [ "$$prod_id", "$product_ids" ] } },{isIngredient:true}]} },
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
    ]) 
}