require('./globals')
let app = express();


var cors = require('cors');
let path = require('path')
let fs = require("fs")
let orderModel = require('./models/orders')
app.use(express.json());
app.use(express.urlencoded({extended: true}))
const http = require('http').createServer(app);

// io.on('connection', (socket) => {
//     console.log('a user connected');
// });


// var server = require('http').Server(app);


//Socket IO
global.io = require('socket.io')(http);
const {socket} = require('./sockets/socket');
socket(io);


const PORT = process.env.PORT || 80;
http.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}`);
});


// let socket = require("./sockets/socket")
// global.io = require('socket.io')(server);

// var corsOptions = {
//     origin: 'localhost:4200',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

let originsWhitelist = [
    'http://localhost:4200',
    'http://localhost:4202',
    'http://localhost:4203',
    'http://localhost:4201',     //this is my front-end url for development,
    // 'http://68.183.36.96:80',
    'http://localhost',
    // 'http://secretsouth.ie/'
];
let corsOptions = {
    origin: function (origin, callback) {
        let isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.static('public'));
app.use("/", express.static(__dirname + '/kiosk-dashboard'));
app.use("/usr_kiosk/", express.static(__dirname + '/kiosk'));
app.use("/kitchen_kiosk/", express.static(__dirname + '/kitchen'));
app.use("/progress_monitor/",express.static(__dirname + '/progress_monitor'));

mongoose.connect('mongodb://64.225.3.114/kiosk', {
    auth: {authSource: "admin"},
    user: "kioskAdmin",
    pass: "39%YLaW)gnuE^z%q",
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, db) => {
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
app.use("/kitchen", require('./routes/kitchen-kiosk'));
app.use("/pay", require('./routes/pay'));
app.get('/usr_kiosk/*', (req, res) => {
    console.log(path.join(__dirname, './kiosk/index.html'))
    res.sendFile(path.join(__dirname, './kiosk/index.html'));

});
app.get('/progress_monitor/*', (req, res) => {
    console.log(path.join(__dirname, './progress_monitor/index.html'))
    res.sendFile(path.join(__dirname, './progress_monitor/index.html'));
});
app.get('/kitchen_kiosk/*', (req, res) => {
    console.log('aaaa')
    res.sendFile(path.join(__dirname, './kitchen/index.html'));
});

app.get('*', (req, res) => {
console.log('bottom')
    res.sendFile(path.join(__dirname, './kiosk-dashboard/index.html'));
});




