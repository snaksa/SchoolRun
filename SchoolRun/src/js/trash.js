function Trash(x, y, width, height, type) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
    this.colladed = 0;
    this.stopCollision = false;
}

Trash.prototype.update = function () {
    this.x -= bgposSpeed;
}

Trash.prototype.render = function (ctx) {
    s_trash[this.type].draw(ctx, this.x, this.y, this.width, this.height);
}