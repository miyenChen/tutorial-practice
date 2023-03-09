const http = require('http');
const fs = require('fs');

// request object, response object
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    if (req.url == '/') {
        res.write('歡迎來到首頁');
        res.end();
    } else if (req.url == '/anotherPage') {
        res.write('這是另一頁');
        res.end();
    } else if (req.url == '/third') {
        fs.readFile('third.html', (e, data) => {
            if (e) {
                //如果發生網頁讀取錯誤顯示文字
                res.write('文件讀取錯誤');
                res.end();
            } else {
                // 沒有錯誤顯示'third.html'檔案的內容
                res.write(data);
                res.end();
            }
        });
    } else {
        res.write('頁面不存在');
        res.end();
    }

    // // writeHead 設定回傳資料的訊息若沒有設定，則'歡迎'會無法解讀變成亂碼
    // res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    // res.write('歡迎');
    // res.end(); //讀取結束
});

server.listen(2000, () => {
    console.log('doing');
});
