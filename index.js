require('./globals')
let app=express();
var server = require('http').Server(app);
var cors = require('cors');
let path=require('path')
global.io = require('socket.io')(server);
let orderModel=require('./models/oprders')
app.use(express.json());
app.use(express.urlencoded({extended:true}))
  
  app.use(cors());
  app.use(express.static('public'));
  app.use("/", express.static( __dirname + '/kiosk-dashboard' ));
  app.use("/usr_kiosk/", express.static( __dirname + '/kiosk' ));
  app.use("/kitchen_kiosk/", express.static( __dirname + '/kitchen-kiosk' ));
 
mongoose.connect('mongodb+srv://adminkiosk:emil094641864@kiosk-usxqr.mongodb.net/kiosk', {useNewUrlParser: true, useUnifiedTopology: true}, (err,db) => {
    // throw new Error(err);
});
var conn = mongoose.connection;
conn.on('error', (err) => {
    console.log("connection error")
});
conn.once('open', function () { 
    console.log("mongo connected") 
});
app.use("/user_kiosk", require('./routes/user-kiosk'));
app.use("/dashboard", require('./routes/dashboard'));
app.get('/usr_kiosk/*', (req, res) => {
    res.sendFile(path.join(__dirname, './kiosk/index.html'));

});
app.get('/kitchen_kiosk', (req, res) => {
    res.sendFile(path.join(__dirname, './kitchen-kiosk/index.html'));
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './kiosk-dashboard/index.html'));
});
const PORT = process.env.PORT || 3500;
server.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`); 
});

io.on("connection",(socket)=>{
    socket.on("closeEvent",(data)=>{
        orderModel.updateMany(
            {action:{ $ne: "closed" }},
            {$set:{action:"closed"}},
            (err,data)=>{
                console.log(data)
            }
        
        )
    })
    socket.on("getOrders",()=>{
        orderModel.find({action:{$ne:"closed"}},(err,data)=>{
            io.emit('initorder',data)
        })
    })
    socket.on("pay",(data)=>{   
        orderModel.create(data,(err,res)=>{
            console.log(res)
        io.emit("order",res)           
        })
        
    })
})