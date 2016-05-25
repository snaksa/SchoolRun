function UpdateTrash(trashes) {
    var length = trashes.length;
    for (var i = 0; i < length; i++) {
        trashes[i].update();
        if (trashes[i].x < -100) {
            trashes.splice(i, 1);
            i--;
            length = trashes.length;
        }
    }
}

function UpdateHearts() {
    var length = hearts.length;
    for (var i = 0; i < length; i++) {
        hearts[i].update();
        if (hearts[i].y > 900) {
            hearts.splice(i, 1);
            i--;
            length = hearts.length;
        }
    }
}