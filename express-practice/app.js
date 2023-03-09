// get express function
const express = require('express');
// get object of app(代表伺服器)
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

/*
// middlewares ，所有 POST 格式符合地都會把資料抓出來，若想單獨使用，寫在route後
//req.body預設值為 undefind 這兩行程式碼可以讓 req.body這個物件被解讀
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//{ extended: true } 可以不寫，extended 意思是擴展這個功能

// HTTP request, GET, POST, DELETE
app.get('/', (req, res) => {
    res.send('歡迎到首頁');
});

app.get('/others', (req, res) => {
    res.send('歡迎到其他頁面');
});

//__dirname為此JS檔案的資料夾的絕對位置
app.get('/example', (req, res) => {
    res.sendFile(__dirname + '/example.html');
});

//若網址結尾為.../example/apple，則 req.params.someFruit 的值是 apple
app.get('/example/:someFruit', (req, res) => {
    res.send('歡迎來到' + req.params.someFruit + '頁面');
});

//若表單提交後網址為 .../formhandling?name=jack&age=50
// req.query.name = jack, req.query.age = 50
app.get('/formhandling', (req, res) => {
    res.send('收到您的資料，名字為：' + req.query.name + '，年齡為：' + req.query.age);
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});
app.post('/loginForm', (req, res) => {
    console.log(req.body);
    let { email, password } = req.body;
    res.send('你的Email為：' + req.body.email);
});

// 當使用者訪問我們沒有設定的 route 時顯示
app.get('*', (req, res) => {
    res.send('此頁面不存在');
});
*/

//放入port, callbackFn
app.listen(3000, () => {
    console.log('server 正在聆聽');
});
