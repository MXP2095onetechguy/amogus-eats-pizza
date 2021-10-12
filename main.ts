/* variables */
const MelodyDev = new music.Melody("B G");
let lemontime = 0;


/**
 * sprites
 */


let amogus = sprites.create(assets.image`Red Amongus`, SpriteKind.Player);
let pizza = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.Food);
let lemon = sprites.create(img`
    4 4 4 . . 4 4 4 4 4 . . . . . . 
    4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
    . . c 4 4 d 4 4 4 4 4 d d 5 d c 
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
    . . . . c c b 4 4 4 b b 4 5 4 4 
    . . . . . . c c c c c c b b 4 . 
    `, SpriteKind.Enemy);
let mac = sprites.create(assets.image`Mac`, SpriteKind.Enemy);

controller.moveSprite(amogus);

// place sprites
lemon.setPosition(randint(0, 160), randint(0, 120));
pizza.setPosition(randint(0, 160), randint(0, 120));
mac.setPosition(randint(0, 160), randint(0, 120));

/**
 * functionality
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1);
    otherSprite.setPosition(randint(0, 160), randint(0, 120));
    info.startCountdown(10);
    music.powerUp.play();
});
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if(lemontime == 0){
        lemontime = 1;
        game.showLongText("This is your first time and last time I will save you.", DialogLayout.Bottom);
        otherSprite.setPosition(randint(0, 160), randint(0, 120));
    }
    else{
        game.over(false);
    }
});
game.onUpdate(function(){

});

sprites.onOverlap(SpriteKind.Food, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(0, 160), randint(0, 120));
    // MelodyDev.play(120);
});

// inits
scene.setBackgroundColor(7);
info.setScore(0);

MelodyDev.play(120);
game.splash("Amogus eats Pizza", "Pizza time");
game.setDialogCursor(assets.image`Red Amongus`);
game.showLongText("You eat pizza, pizza is good. You eat a lemon or mac, eat a lemon and dies. Eat a mac and dies. Key moves you. A skips me dialog box. Eat pizza within 10 second or you die. Once you start eat pizza, timer go. Lemon and mac move if pizza want lemon's space or mac's space. If you unlucky, lemon or mac move in with you.", DialogLayout.Center);