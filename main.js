const { Warrior } = require('./guerrero');
const { Mage } = require('./mago');


const mage = new Mage("Gandalf");
const warrior = new Warrior("Legolas");

function startbattle(character1, character2) {
  while (character1.life > 0 && character2.life > 0) {
    if(character1.speed > character2.speed) {
      character1.attack(character2);
      if(character2.life > 0) {
        character2.attack(character1);
      }
    } else {
      character2.attack(character1);
      if(character1.life > 0) {
        character1.attack(character2);
      }
    }
  }

  const winner = character1.life > 0 ? character1 : character2;
  console.log(winner.name + " ha ganado la batalla!");
}

startbattle(mage,warrior);