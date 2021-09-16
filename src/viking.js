// Soldier
class Soldier {
	constructor(health, strength){
		this.health = health;
		this.strength = strength;
	}
	attack(){
		return this.strength;
	}
	receiveDamage(damage){
		this.health -= damage;
	}
}

// Viking
class Viking extends Soldier {
	constructor(name, health, strength) {
		this.name = name;
		super(health, strength);
	}
	receiveDamage(damage) {
		this.health -= damage;

		if (this.health === 0) {
			return `${this.name} has died in act of combat`;
		}

		return `${this.name} has received ${damage} points of damage`;
	}

	battleCry() {
		return "Odins Owns You All!";
	}
}

// Saxon
class Saxon extends Soldier {
	receiveDamage(damage){
		this.health -= damage;
		
		if (this.helath === 0){
			return `A Saxon has received ${damage} points of damage`;
		}
		return `A Saxon has died in combat`;
	}
}


// War
class War {
	constructor() {
		this.vikingArmy = [];
		this.saxonArmy = [];
	}

	addViking(Viking) {
		this.vikingArmy.push(Viking);
		// miniscule
	}

	addSaxon(saxon) {
		this.saxonArmy.push(saxon);
	}

	vikingAttack() {
		let saxonRandom = Math.trunc(Math.random() * this.saxonArmy.length); // random number 
		let vikingRandom = Math.trunc(Math.random() * this.VikingArmy.length);

		let chooseSaxon = saxonArmy[saxonRandom];		
		let chooseViking = vikingArmy[vikingRandom];

		let damage = chooseViking.attack();
		
		if (chooseSaxon.health === 0){
			this.saxonArmy.splice(saxonRandom, 1);
		}
		return chooseSaxon.receiveDamage(damage);
	}
	
	saxonAttack(){
		let saxonRandom = Math.trunc(Math.random() * this.saxonArmy.length); // random number 
		let vikingRandom = Math.trunc(Math.random() * this.VikingArmy.length);

		let chooseSaxon = saxonArmy[saxonRandom];		
		let chooseViking = vikingArmy[vikingRandom];

		let damage = chooseSaxon.attack();

		if (chooseViking.health === 0){
			this.vikingArmy.splice(vikingRandom, 1);
		}
		return chooseViking.receiveDamage(damage);
	}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
