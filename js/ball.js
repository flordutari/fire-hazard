'use-strict'

class Ball {
    constructor(canvas){
        this.size = 20;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = Math.random()*this.canvas.width;
        this.y = Math.random()*this.canvas.height;
        this.dx = 1;
        this.dy = 1;
        this.speed = 3;
    };
    
    update(){
        this.x += this.dx * this.speed;
        this.y += this.dy * this.speed;
    };

    draw(){
        this.ctx.clearRect(0, 0, innerWidth, innerHeight);

        this.ctx.fillStyle = '#FC4B2A';
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 10, 0, 2*Math.PI, false);
        this.ctx.strokeStyle = '#FC4B2A';
        this.ctx.fill();
        this.ctx.stroke();
        
        if(this.x > innerWidth || this.x < 0){
            this.dx = -(this.dx);
        };
        this.x += this.dx;
    
        if(this.y > innerHeight || this.y < 0){
            this.dy = -(this.dy);
        };
        this.y += this.dy;
    };

    setDirection(direction){
        this.direction = direction;
    };

    checkCollisionScreen(){
        if(this.y - this.size/2 <= 0){
            this.dy = 1;
        } else if (this.y + this.size/2 >= this.canvas.height){
            this.dy = -1;
        } else if (this.x - this.size/2 <= 0){
            this.dx = 1;
        } else if (this.x + this.size/2 >= this.canvas.width){
            this.dx = -1;
        };
    };

    checkCollisionWall(){
        
    };

    checkCollisionExpWall(expansionWall){
        const collideRight = this.x + this.size / 2 > expansionWall.x - expansionWall.size / 2;
        const collideLeft = this.x - this.size / 2 < expansionWall.x + expansionWall.size / 2;
        const collideTop = this.y + this.size / 2 > expansionWall.y - expansionWall.size / 2;
        const collideBottom = this.y - this.size / 2 < expansionWall.y + expansionWall.size / 2;

        if(collideRight || collideLeft || collideTop || collideBottom) {
            return true;
        }

        return false;
    };
}
