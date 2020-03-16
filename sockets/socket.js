
var url = require('url');
var kioskService = require("../services/kioskService")
var clients = {}


console.log(io.cookie);
const kiosk=io.of('/5e4bf8dc9761d224ecd2075a');  


kiosk.on('connection',(socket)=>{
    var ns = url.parse(socket.handshake.url, true).query.ns;
    console.log(ns);
    
    console.log('sefger')
    socket.on('get-kiosk-menu',()=>{
        kioskService.getMenu('5e4bf8dc9761d224ecd2075a').then((data)=>{
            socket.emit('update-kiosk-menu',data)
            
        })
        
        
    })
    socket.on("disconnect",()=>{
        delete clients[socket.id];
        console.log("disconnected")
    })
})
/*io.on("connection",(socket)=>{
   // var ns = url.parse(socket.handshake.url, true).query.ns;    
   
    /*socket.on("disconnect",()=>{
        delete clients[socket.id];
        console.log("disconnected")
    })*/

    /*socket.on("closeEvent",(data)=>{
        orderModel.updateMany( 
            {action:{ $ne: "closed" }},
            {$set:{action:"closed"}},
            (err,data)=>{
                console.log(data)
            }        
        )
    })*/
    /*socket.on("getOrders",(data)=>{
        console.log("ttttt",data)
        orderModel.find({action:{$ne:"closed"}},(err,data)=>{
            io.emit('initorder',data)
        })
    })
    socket.on("pay",(data)=>{   
        orderModel.create(data,(err,res)=>{
            console.log(res)
        io.emit("order",res)           
        })
        
    })*/
 

//})