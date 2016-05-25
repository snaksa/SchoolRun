var
// Game vars //
canvas,
ctx,
bgpos = 0,
bgposSpeed = 3,
frames = 1,
currentState,
states = {
	Splash: 0, Game: 1, Pause: 2, Score: 3, GameOver: 4, Question: 5
},
trashes = [],
hearts = [],

player,
interval,
loop,
loop2;

var testDraw = false;

var WIDTH, HEIGHT;

function Game() {
	canvas = document.getElementById("gameCanvas");
	WIDTH = canvas.width;
	HEIGHT = canvas.height;

	document.addEventListener('keydown', OnKeyDown, true);

	ctx = canvas.getContext("2d");
	currentState = states.Splash;

	player = new Player();
    HandleImageSprites();
}

Game.prototype.run = function() {
    HandleImageSprites();
};

Game.prototype.pause = function () {
    if (currentState == states.Game) currentState = states.Pause;
    else currentState = states.Game;
}

Game.prototype.question = function () {
    if (currentState == states.Question) currentState = states.Game;
    else currentState = states.Question;
}

Game.prototype.start = function(){
	currentState = states.Game;
}

Game.prototype.getState = function(){
	return currentState;
}

var ran = 0;

function runGame() {
	if(ran == 2) return;
	ran++;
    loop = function () {
        update();
        render();
        loop2 = window.requestAnimationFrame(loop, canvas);
    }
    window.requestAnimationFrame(loop, canvas);
}


function update() {
	if (currentState == states.Game) {

        frames++;

		if(frames % 3000 == 0){
			ShowQuestion();
		}

        bgpos -= bgposSpeed;

        player.update(frames);
        UpdateTrash(trashes);
        PlayerToTrashCollision(player, trashes);
        UpdateHearts();

        if (frames % 200 == 0 && Math.random() * 10 > 5 && frames % 3000 < 2700) trashes.push(GenerateTrash());
        if (frames % 10 == 0) {
            player.score += Math.random() * 10;
            UpdatePlayerScore(player.score);
        }
    }
}

function render() {
	if(currentState != states.Game) return;
    ctx.fillStyle = "#33ccff";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    RenderRoad(ctx, WIDTH, HEIGHT, bgpos);
    RenderSidewalk(ctx, WIDTH, HEIGHT, bgpos);
    RenderCity(ctx, WIDTH, HEIGHT, bgpos);

    RenderTrash(ctx, trashes);
    RenderHearts(ctx);
    RenderPlayer(ctx);

}

var done = 4;
function HandleImageSprites(){
	currentState = states.Splash;

	var img1 = new Image();
	img1.onload = function() {
	    initSprites(this);

	    player.y = HEIGHT - (s_road.drawHeight + 130)
	    player.width = s_player[player.state].drawWidth;
	    player.height = s_player[player.state].drawHeight;

	    var img2 = new Image();
		img2.onload = function () {
		    initTrashSprites(this);
		    var img3 = new Image();
			img3.onload = function () {
			    initHeartSprite(this);
			    var img4 = new Image();
				img4.onload = function () {
				    initCitySprite(this);
				    runGame();
				}	
				img4.src = "images/cityBackground.png";
			}
			img3.src = "images/heart.png";
			}
		img2.src = "images/trashsheet.png";
	}
	img1.src = "images/spritesheet.png";
}





