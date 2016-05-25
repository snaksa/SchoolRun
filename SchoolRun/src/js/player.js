function Player() {
    this.x = 100;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.score = 0;
    this.state = 0;
    this.isJumping = false;
    this.down = false;
    this.upFreeze = false;
    this.freezeFrames = 0;
    this.jumpHeight = 0;
}

Player.prototype.update = function (fr) {
    if (fr % 10 == 0) {
        this.state++;
        this.state %= 5;
        bgposSpeed = 2;
    }

    if (this.isJumping) {
        bgposSpeed = 3;
        this.state = 1;
        if (this.jumpHeight < 120) {
            this.y -= 3;
            this.jumpHeight += 3;
        }
        else {
            this.isJumping = false;
            this.upFreeze = true;
        }
    }

    if (this.upFreeze) {
        bgposSpeed = 3;
        this.state = 1;
        this.freezeFrames++;
        if (this.freezeFrames < 10) {
        }
        else {
            this.upFreeze = false;
            this.freezeFrames = 0;
            this.down = true;
        }
    }

    if (this.down) {
        bgposSpeed = 3;
        this.state = 1;
        if (this.jumpHeight > 0) {
            this.y += 3;
            this.jumpHeight -= 3;
        }
        else {
            this.down = false;
        }
    }
}

Player.prototype.render = function (ctx) {
    s_player[this.state].draw(ctx, this.x, this.y, s_player[this.state].drawWidth, s_player[this.state].drawHeight);
}

Player.prototype.jump = function () {
    this.isJumping = true;
}

