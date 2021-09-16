class Animal {
  constructor(chosenName, chosenColor, chosenSound) {
    this.name = chosenName
    this.mainColor = chosenColor
    this.sound = chosenSound
  }
  
  scream(intensity) {
    console.log(this.sound.repeat(intensity))
  }
}

class Cat extends Animal {
  constructor(chosenName, chosenColor, chosenSound, chosenNbOfLegs) {
    super(chosenName, chosenColor, chosenSound)
    this.nbOfLegs = chosenNbOfLegs
  }
  openDoor() {
    console.log('😸')
  }
}

const mydog = new Animal('Rex', 'brown', 'waff') // {name: , mainColor: '', sound: ''}
mydog.scream(8)

mycat = new Cat('Felix', 'white', 'meow', 4) // {name: , mainColor: , sound: , nbOfLegs}
mycat.scream(2)
mycat.openDoor()



// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack() {

    return this.strength
  }

  receiveDamage(damage) {

    const newHealth = this.health - damage
    this.health = newHealth
  }

}  

mySoldier = new Soldier(5,5) // {health: 5, strength: 5}
mySoldier.attack() 
mySoldier.receiveDamage(1) // {health: 4, strength: 5}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
