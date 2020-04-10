require('./globals')
let app=express();
var server = require('http').Server(app);
var cors = require('cors');
let path=require('path')
let fs=require("fs")
global.io = require('socket.io')(server);
let orderModel=require('./models/orders')
app.use(express.json());
app.use(express.urlencoded({extended:true}))
let socket=require("./sockets/socket")

// var corsOptions = {
//     origin: 'localhost:4200',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
  
  app.use(cors());
  app.use(express.static('public'));
  app.use("/", express.static( __dirname + '/kiosk-dashboard' ));
  app.use("/usr_kiosk/", express.static( __dirname + '/kiosk' ));
  app.use("/kitchen_kiosk/", express.static( __dirname + '/kitchen' ));
  app.use("/progress-monitor/", express.static( __dirname + '/progress-monitor' ));
 
mongoose.connect('mongodb://64.225.3.114/kiosk', {
    auth: { authSource: "admin" },
    user: "kioskAdmin",
    pass: "39%YLaW)gnuE^z%q",
    useNewUrlParser: true, 
    useUnifiedTopology: true}, (err,db) => {
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
app.use("/kitchn", require('./routes/kitchen-kiosk'));
app.use("/pay", require('./routes/pay'))
app.get('/usr_kiosk/*', (req, res) => {
    res.sendFile(path.join(__dirname, './kiosk/index.html'));

});
app.get('/progress-monitor', (req, res) => {
    res.sendFile(path.join(__dirname, './progress-monitor/index.html'));
});
app.get('/kitchen_kiosk', (req, res) => {
    res.sendFile(path.join(__dirname, './kitchen/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './kiosk-dashboard/index.html'));
});
const PORT = process.env.PORT||80 ;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`); 
});



