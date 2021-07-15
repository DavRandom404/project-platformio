scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    info.changeLifeBy(-1)
    myCorg.sprite.startEffect(effects.fire, 500)
    myCorg.sprite.setPosition(10, 70)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
    myCorg.sprite.startEffect(effects.fire)
    myCorg.sprite.setPosition(10, 70)
})
info.onLifeZero(function () {
    game.over(false)
})
let myCorg: Corgio = null
info.setLife(3)
scene.setBackgroundImage(assets.image`spice`)
myCorg = corgio.create(SpriteKind.Player, 10, 70)
myCorg.updateSprite()
scene.cameraFollowSprite(myCorg.sprite)
myCorg.horizontalMovement()
tiles.setTilemap(tilemap`level1`)
myCorg.verticalMovement()
