function OnKeyDown(event) {
    if (event.keyCode == 32 && !player.isJumping && !player.down) {
        player.jump();
    }
}