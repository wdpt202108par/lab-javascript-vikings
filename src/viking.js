// Soldier
class Soldier {
  constructor (health, strength){
    this.health = health
    this.strength = strength
  }
  attack (){
    return this.strength
  }
  receiveDamage (theDamage){
    this.health -= theDamage
  }
}
  
// Viking
class Viking extends Soldier {
  constructor (name, health, strength){
    super (health, strength)
    this.name = name
  }
  receiveDamage (theDamage){
    this.health -= theDamage
    if (this.health > 0){
      return `${this.name} has received ${theDamage} points of damage`
    } else { 
      return `${this.name} has died in act of combat`
    }
  }
  battleCry (){
    return 'Odin Owns You All!'
  }
}
  
// Saxon
class Saxon extends Soldier {
  receiveDamage (theDamage){
    this.health -= theDamage
    if (this.health > 0){
      return (`A Saxon has received ${theDamage} points of damage`)
    } else { 
      return 'A Saxon has died in combat'
    }
  } 
}
  
// War
class War {
  constructor (){
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(viking){
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){
    let randomSaxon = this.saxonArmy[Math.trunc(Math.random()*this.saxonArmy.length)]
    let randomViking = this.vikingArmy[Math.trunc(Math.random()*this.vikingArmy.length)];
    let resultAttack = randomSaxon.receiveDamage(randomViking.attack());
    if (randomSaxon.health <= 0) {
      this.saxonArmy.shift(randomSaxon);
    }
    return resultAttack;
  }
  
  saxonAttack(){
    let randomSaxon = this.saxonArmy[Math.trunc(Math.random()*this.saxonArmy.length)]
    let randomViking = this.vikingArmy[Math.trunc(Math.random()*this.vikingArmy.length)];
    let resultAttack = randomViking.receiveDamage(randomSaxon.attack());
    if (randomViking.health <= 0) {
      this.vikingArmy.shift(randomViking);
    }
    return resultAttack;
  }

  showStatus (){
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...'
    } else {
    return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}
    
  
  // The following is required to make unit tests work.
  /* Environment setup. Do not modify the below code. */
  if (typeof module !== 'undefined') {
    module.exports = { Soldier, Viking, Saxon, War };
  }
  