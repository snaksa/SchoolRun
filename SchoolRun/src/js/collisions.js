function PlayerToTrashCollision(player, trashes) {
    var length = trashes.length;
    for (var i = 0; i < length; i++) {
        var x = player.x + player.width;
        var y = player.y + player.height;


        if (x > trashes[i].x && x < trashes[i].x + trashes[i].width) {
            if (y > trashes[i].y && y < trashes[i].y + trashes[i].height) {
                trashes[i].colladed++;
                if (trashes[i].colladed > 15 && !trashes[i].stopCollision) {
                    trashes[i].stopCollision = true;
                    UpdatePlayerDamage();
                    GenerateHearts();
                }
            }
        }

        x = player.x;

        if (x > trashes[i].x && x < trashes[i].x + trashes[i].width) {
            if (y > trashes[i].y && y < trashes[i].y + trashes[i].height) {
                trashes[i].colladed++;
                if (trashes[i].colladed > 15 && !trashes[i].stopCollision) {
                    trashes[i].stopCollision = true;
                    UpdatePlayerDamage();
                    GenerateHearts();
                }
            }
        }
    }
}