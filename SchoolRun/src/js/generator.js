function GenerateTrash() {
    var type = parseInt((Math.random() * 10) % 4);
    return new Trash(
        WIDTH + 100,
        HEIGHT - (s_road.drawHeight + s_trash[type].drawHeight + 10),
        s_trash[type].drawWidth,
        s_trash[type].drawHeight,
        type);
}

function GenerateHearts() {
    var heart;

    heart = new Heart(player.x, player.y + 40);
    hearts.push(heart);

    heart = new Heart(player.x + player.width, player.y + 40);
    hearts.push(heart);

    heart = new Heart(player.x + player.width / 2, player.y);
    hearts.push(heart);
}