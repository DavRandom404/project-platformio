def on_overlap_tile(sprite, location):
    info.change_life_by(-1)
    myCorg.sprite.start_effect(effects.fire, 500)
    myCorg.sprite.set_position(10, 70)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava0,
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    info.change_life_by(-1)
    myCorg.sprite.start_effect(effects.fire)
    myCorg.sprite.set_position(10, 70)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava1,
    on_overlap_tile2)

def on_life_zero():
    game.over(False)
info.on_life_zero(on_life_zero)

myCorg: Corgio = None
info.set_life(3)
scene.set_background_image(assets.image("""
    spice
"""))
myCorg = corgio.create(SpriteKind.player, 10, 70)
myCorg.update_sprite()
scene.camera_follow_sprite(myCorg.sprite)
myCorg.horizontal_movement()
tiles.set_tilemap(tilemap("""
    level1
"""))
myCorg.vertical_movement()
tiles.create_sprites_on_tiles(sprites.dungeon.floor_light0, SpriteKind.enemy)