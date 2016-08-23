'use strict'

let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update })

function preload() {
  game.load.image('sky', 'assets/starsky.jpg')
  game.load.image('planet', 'assets/planet.png')
  game.load.spritesheet('ship1', 'assets/ship1.png', 50, 50)
}

let planets;

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE)

  game.add.sprite(0, 0, 'sky').scale.setTo(2, 2)
  let ship = game.add.sprite(game.world.width / 2, game.world.height / 2, 'ship1')
  ship.anchor.setTo(0.5, 0.5)
  ship.angle = -90

  game.physics.enable(ship, Phaser.Physics.ARCADE)

  ship.body.maxVelocity.setTo(this.MAX_SPEED, this.MAX_SPEED)

  this.ROTATION_SPEED = 180 // degrees/second
  this.ACCELERATION = 200 // pixels/second/second
  this.MAX_SPEED = 250 // pixels/second
  this.DRAG = 50 // pixels/second

  planets = game.add.group()
  planets.enableBody = true
  let moon = planets.create(game.world.width / 2, game.world.height / 2, 'planet')
}

function update() {

}