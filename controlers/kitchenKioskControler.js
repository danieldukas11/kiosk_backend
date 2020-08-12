const userModel = require("../models/user");
const orderModel = require("../models/orders");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.login = (req, res, next) => {
    userModel.findOne({$or: [{userName: req.body.email}, {email: req.body.email}]}, (err, user) => {
        if (err) {
            res.status(400).json(err)
            return
        }
        if (user) {
            bcrypt.compare(req.body.password, user.password, function (err, pass) {
                if (err) {
                    res.status(400).json(err)
                    return
                }
                if (pass) {
                    let data = {
                        id: user._id,
                        userName: user.userName,
                        role: user.role
                    }
                    jwt.sign({data: data}, JWTKey, {expiresIn: '168h'}, (err, token) => {
                        res.json(token)
                    })


                } else {
                    res.status(400).json("Wrong User Name or Password")
                }

            });
        } else {
            res.status(400).json("Wrong User Name or Password")
        }

    })

}

exports.getUserOrders = async (req, res, next) => {
    let orders = await orderModel.find({user_id: req.params.user_id})
    res.json(orders)
};

exports.getAllOrders = async (req, res, next) => {
    let orders = await orderModel.find({}).sort('orderDate');
    res.json(orders)
};

exports.getOrdersNum = async (req, res) => {
    let orders = await orderModel.find({}).sort('orderDate').countDocuments();
    res.json(orders)
};
