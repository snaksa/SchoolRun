var
s_road,
s_sidewalk,
s_city,
s_heart,
s_player = [],
s_trash = [];

function Sprite(img, x, y, width, height, drawWidth, drawHeight) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.drawWidth = drawWidth;
    this.drawHeight = drawHeight;
};

Sprite.prototype.draw = function (ctx, x, y) {
    ctx.drawImage(
		this.img,
		this.x,
		this.y,
		this.width,
		this.height,
		x,
		y,
		this.drawWidth,
		this.drawHeight);
};

function initSprites(img) {
    s_road = new Sprite(img, 0, 234, 400, 230, 200, 115);
    s_sidewalk = new Sprite(img, 410, 0, 600, 600, 100, 100);

    var percents = 0.4;
    s_player = [
        new Sprite(img, 7, 13, 41, 71, 41 + (41 * percents), 71 + (71 * percents)),
        new Sprite(img, 77, 16, 50, 68, 50 + (50 * percents), 68 + (68 * percents)),
        new Sprite(img, 146, 14, 46, 70, 46 + (46 * percents), 70 + (70 * percents)),
        new Sprite(img, 213, 10, 42, 74, 42 + (42 * percents), 74 + (74 * percents)),
        new Sprite(img, 269, 11, 29, 73, 29 + (29 * percents), 79 + (79 * percents)),
        new Sprite(img, 316, 16, 46, 68, 46 + (46 * percents), 68 + (68 * percents))
    ];
}

function initTrashSprites(img) {
    s_trash = [
        new Sprite(img, 0, 0, 200, 124, 60, 35),
        new Sprite(img, 1, 134, 760, 1153, 70, 90),
        new Sprite(img, 804, 118, 621, 558, 100, 90),
        new Sprite(img, 775, 741, 505, 504, 80, 100)
    ];
}

function initHeartSprite(img) {
    s_heart = new Sprite(img, 0, 0, 1331, 1163, 30, 27);
}

function initCitySprite(img){
    s_city = new Sprite(img, 0, 0, 1365, 669, 300, 180);
}