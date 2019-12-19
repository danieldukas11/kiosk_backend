require('./globals')
let app=express();
var server = require('http').Server(app);
var cors = require('cors');
let path=require('path')
let fs=require("fs")
global.io = require('socket.io')(server);
let orderModel=require('./models/oprders')
app.use(express.json());
app.use(express.urlencoded({extended:true}))



function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

// function to create file from base64 encoded string
function base64_decode(base64str, file) {
    // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
    var bitmap = new Buffer(base64str, 'base64');
    // write buffer to file
    fs.writeFileSync(file, bitmap);
    console.log('******** File created from base64 encoded string ********');
}

var corsOptions = {
    origin: 'localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  
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
const PORT = process.env.PORT || 3000;
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

