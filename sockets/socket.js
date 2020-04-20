
var url = require('url');
var kioskService = require("../services/kioskService")
var clients = {}
const orderModel=require("../models/orders");

const kiosk=io.of('/5e4bf8dc9761d224ecd2075a');  

io.on("connection", (socket)=>{
    var ns = url.parse(socket.handshake.url, true).query.ns;      
    socket.join(ns,()=>{
        socket.on('make_order',(d)=>{
            io.to(ns).emit('get_order',d)
        })
    })
   
   
    
   
    
   
    socket.on("disconnect",()=>{
       
    })


 

})