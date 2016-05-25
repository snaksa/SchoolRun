function Heart(x, y, angle) {
    this.x = x;
    this.y = y;
    this.speed = 2;
}

Heart.prototype.update = function () {
    this.y += this.speed;
}

Heart.prototype.render = function (ctx) {
    s_heart.draw(ctx, this.x, this.y, s_heart.drawWidth, s_heart.drawHeight);

}