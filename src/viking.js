// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

//const soldat1 = new Soldier(100, 20) // {pv: 100 , dps: 20}
//soldat1.attack() // 20

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if ( this.health > 0) {
       return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry () {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    }

    receiveDamage(damage) {
      super.receiveDamage(damage);
      if ( this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
     } else {
       return `A Saxon has died in combat`
     }
}

// War
class War {
  constructor(vikingArmy,saxonArmy) {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
addViking(viking) {
  let this.vikingArmy = viking.push();
}
addSaxon(saxon) {
  let this.saxonArmy = saxon.push();
}
vikingAttack()
saxonAttack()
showStatus()
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
