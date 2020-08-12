var url = require('url');
var kioskService = require("../services/kioskService")
var clients = {}
const orderModel = require("../models/orders");

exports.socket = (io) => {
    io.on("connection", (socket) => {
        console.log('a user is connected')
        // var ns = url.parse(socket.handshake.url, true).query.ns;
        // socket.join(ns, () => {
        //     socket.on('make_order', (d) => {
        //         console.log('make order')
        //         io.to(ns).emit('get_order', d)
        //     })
        // })

        socket.on('make_order', async (d) => {
            console.log('making order')
            // console.log(d)
            const order = new orderModel(d);
            await order.save();
            io.sockets.emit('get_order', d);
            // io.to(ns).emit('get_order', d)
        });

        socket.on('cooking_order', async (d) => {
            const order = await orderModel.findOne({_id: d._id});
            order.status = d.status;
            await order.save();
            io.sockets.emit('cooking_order', d);
        });

        socket.on('ready_order', async (d) => {
            const order = await orderModel.findOne({_id: d._id});
            order.status = d.status;
            await order.save();
            io.sockets.emit('ready_order', d);
        });

        socket.on('picked-up_order', async (d) => {
            const order = await orderModel.findOne({_id: d._id});
            order.status = d.status;
            await order.save();
            io.sockets.emit('picked-up_order', d);
        });


        socket.on("disconnect", () => {

        })
    })
};
