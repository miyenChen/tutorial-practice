const c = document.getElementById('myCanvas');
const canvasWidth = c.width;
const canvasHeight = c.height;
const ctx = c.getContext('2d');
let circleX = 100;
let circleY = 100;
let radius = 20;
let xSpeed = 40;
let ySpeed = 40;
let count = 0;

//可控制的地板
let groundX = 100;
let groundY = 500;
let groundHeight = 10;
let groundWidth = 150;

//設定隨機方塊
let brickArr = [];
function getRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}
class Brick {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        brickArr.push(this);
        this.visible = true;
    }
    drawBrick() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    touchingBall(ballX, ballY) {
        return (
            ballX >= this.x - radius &&
            ballX <= this.x + this.width + radius &&
            ballY >= this.y - radius &&
            ballY <= this.y + this.height + radius
        );
    }
}
//製作隨機位置多個方塊
for (let i = 0; i < 10; i++) {
    new Brick(getRandom(0, 950), getRandom(0, 550));
}
//綁定地板到滑鼠動作
c.addEventListener('mousemove', (e) => {
    groundX = e.clientX;
});

//更新畫面
function drawCircle() {
    //確認球是否碰到方塊，改變球行徑方向
    brickArr.forEach((brick) => {
        if (brick.visible && brick.touchingBall(circleX, circleY)) {
            //如果碰到了先計數，並將方塊設為不可見
            count++;
            brick.visible = false;
            //球從下方撞到方塊
            if (circleY >= brick.y + brick.height) {
                ySpeed *= -1;
            } //球從下方撞到方塊
            else if (circleY <= brick.y) {
                ySpeed *= -1;
            } //從左方撞到方塊
            else if (circleX <= brick.x) {
                ySpeed *= -1;
            } //從右方撞到方塊
            else if (circleX <= brick.x + brick.width) {
                ySpeed *= -1;
            }

            //此方法可以不用設定 計數 和 方塊是否可見
            //上方確認是否碰到方塊的 forEach 需添加參數 index
            // 但每次重畫畫面時都要跑一次 array 當數列長度很長時會造成卡頓
            // brickArr.splice(index, 1);
            // if (brickArr.length == 0) {
            //     alert('game win');
            //     clearInterval(game);
            // }
            if (count === 10) {
                alert('game win');
                clearInterval(game);
            }
        }
    });

    //判斷球有沒有打到可控地板
    if (
        //當球接近4個邊界時
        circleX >= groundX - radius &&
        circleX <= groundX + groundWidth + radius &&
        circleY >= groundY - radius &&
        circleY <= groundY + radius
    ) {
        //碰到可控地板時彈跳速度增加
        if (ySpeed > 0) {
            circleY -= 40;
        } else {
            circleY += 40;
        }
        //更改彈跳方向
        ySpeed *= -1;
    }

    // 判斷有沒有碰到邊界
    if (circleY > canvasHeight - radius) {
        ySpeed *= -1;
    }
    if (circleX > canvasWidth - radius) {
        xSpeed *= -1;
    }
    if (circleY < 0 + radius) {
        ySpeed *= -1;
    }
    if (circleX < 0 + radius) {
        xSpeed *= -1;
    }
    //更改球座標
    circleX += xSpeed;
    circleY += ySpeed;

    //畫出黑色背景
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    //畫出所有可見方塊
    brickArr.forEach((brick) => {
        if (brick.visible) {
            brick.drawBrick();
        }
    });

    //畫出地板
    ctx.fillStyle = 'blue';
    ctx.fillRect(groundX, groundY, groundWidth, groundHeight);

    // arc 畫出圓：圓心座標(X, Y), 半徑, 起始角度, 結束角度
    // // 1π 等於 180度
    ctx.beginPath();
    ctx.arc(circleX, circleY, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'yellow';
    ctx.fill();
}

let game = setInterval(drawCircle, 40);
