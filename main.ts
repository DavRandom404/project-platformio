scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    info.changeLifeBy(-1)
    myCorg.startEffect(effects.fire, 500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
    myCorg.startEffect(effects.fire)
})
info.onLifeZero(function () {
    game.over(false)
})
let myCorg: Sprite = null
info.setLife(3)
scene.setBackgroundImage(assets.image`spice`)
myCorg = corgio.create(SpriteKind.Player, 10, 70)
myCorg.updateSprite()
myCorg.follow()
myCorg.verticalMovement()
myCorg.horizontalMovement()
tiles.setTilemap(tilemap`level1`)
