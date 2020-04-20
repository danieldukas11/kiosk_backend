
var url = require('url');
var kioskService = require("../services/kioskService")
var clients = {}
const ord=require("../models/terminals");

const kiosk=io.of('/5e4bf8dc9761d224ecd2075a');  

io.on("connection", (socket)=>{
    var ns = url.parse(socket.handshake.url, true).query.ns;      
    socket.join(ns,()=>{
        socket.on('make_order',(d)=>{
            console.log(d)
            io.to(ns).emit('get_order',d)
        })
    })
   
   
    
   
    
   
    socket.on("disconnect",()=>{
       
    })


 

})