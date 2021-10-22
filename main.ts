scene.onOverlapTile(SpriteKind.Player, tiles.util.arrow0, function (sprite, location) {
    myCorg.sprite.setPosition(10, 70)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    info.changeLifeBy(-1)
    myCorg.sprite.startEffect(effects.fire, 500)
    myCorg.sprite.setPosition(10, 70)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite2, location2) {
    info.changeLifeBy(-1)
    myCorg.sprite.startEffect(effects.fire)
    myCorg.sprite.setPosition(10, 70)
})
info.onLifeZero(function () {
    game.over(false)
})
let myEnemy = 0
let myCorg: Corgio = null
info.setLife(3)
scene.setBackgroundImage(assets.image`spice`)
myCorg = corgio.create(SpriteKind.Player, 10, 50)
myCorg.updateSprite()
scene.cameraFollowSprite(myCorg.sprite)
myCorg.horizontalMovement()
tiles.setTilemap(tilemap`level1`)
myCorg.verticalMovement()
tiles.createSpritesOnTiles(sprites.dungeon.floorLight0, myEnemy)
myEnemy.setImage(assets.image`what`)
myEnemy.follow(myCorg)
