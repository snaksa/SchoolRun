function RenderRoad(ctx, width, height, x) {
    var y = height - s_road.drawHeight;
    while (x <= width) {
        s_road.draw(ctx, x, y);
        x += s_road.drawWidth;
    }
}

function RenderSidewalk(ctx, width, height, x) {
    var y = height - (s_road.drawHeight + s_sidewalk.drawHeight);
    while (x <= width) {
        s_sidewalk.draw(ctx, x, y);
        x += s_sidewalk.drawWidth;
    }
    s_sidewalk.draw(ctx, x, y - s_sidewalk.drawHeight);
}

function RenderCity(ctx, width, height, x) {
    var y = height - (s_road.drawHeight + s_sidewalk.drawHeight + s_city.drawHeight);
    while (x <= width) {
        s_city.draw(ctx, x, y);
        x += s_city.drawWidth;
    }
}

function RenderPlayer(ctx) {
    player.render(ctx);
}

function RenderTrash(ctx, trashes) {
    var length = trashes.length;
    for (var i = 0; i < length; i++) {
        trashes[i].render(ctx);
    }
}

function RenderHearts(ctx) {
    var length = hearts.length;
    for (var i = 0; i < length; i++) {
        hearts[i].render(ctx);
    }
}