"""
inits 
"""
scene.set_background_color(7)
"""
sprites 
"""
amogus: Sprite = None
pizza: Sprite = sprites.create(img("""
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
    """),
    SpriteKind.food)
amogus = sprites.create(assets.image("""
    Red Amongus
"""), SpriteKind.player)
controller.move_sprite(amogus)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(1)
    otherSprite.set_position(randint(0, 160), randint(0, 120))
    info.start_countdown(10)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)
