let ASTEROIDE: Sprite = null
game.splash("BENVINGUTS A L'ESPAI", "Apreta A per començar i B per disparar")
effects.starField.startScreenEffect()
let mySprite = sprites.create(img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 3 
    . . . . . . 3 3 3 7 7 3 3 6 3 3 
    . . e e e e a 6 6 3 3 . 3 7 3 . 
    . e 2 5 4 2 e a 3 . . . 6 7 3 . 
    e 2 4 2 2 2 2 2 a . . . 6 7 3 . 
    e 2 2 2 2 2 2 2 a . . . 3 6 3 . 
    e 2 e e 2 2 2 2 e e e e a 6 3 . 
    a 2 e e 2 2 2 2 e 2 5 4 2 a 3 . 
    . a 2 e e e 2 e 2 4 2 2 2 2 a . 
    . . a 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e a a e a 2 2 2 2 2 2 2 e 
    . . . . . . . a 2 e e 2 2 e 2 a 
    . . . . . . . a e e e e e e 2 a 
    . . . . . . . . a e 2 2 2 2 a . 
    . . . . . . . . . a a a a a . . 
    `, SpriteKind.Player)
mySprite.setPosition(77, 32)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(1000, function () {
    ASTEROIDE = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . . 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 . . . 8 8 8 1 1 6 6 . . 
        . . . . . . 7 . . . 1 1 5 6 . . 
        . . . . . . . . 8 8 . . . 6 6 . 
        . . . . . . . . . . . . . . . . 
        . c . . . . . . . . . 6 6 6 6 . 
        . c . . . . . . . . . . . 6 6 . 
        . . 6 8 7 . . . . . . . . . . . 
        . . 6 8 8 . . . . . 6 . . 6 . . 
        . . . 6 8 8 . 8 . . . . . . . . 
        . . . . 6 6 8 . 8 8 . . . . . . 
        . . . . . . 6 6 . 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 50)
})
