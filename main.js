const { Warrior } = require('./guerrero');
const { Mage } = require('./mago');


const mage = new Mage("Gandalf");
const warrior = new Warrior("Legolas");

function startbattle(character1, character2) {
  console.log(`¡Iniciando batalla entre ${character1.name} y ${character2.name}!`);

  while (true) {
    if(character1.speed > character2.speed) {
      character1.attack(character2);
      // Verificar si character2 murió
      if(character2.life <= 0) {
        console.log(`${character1.name} ha ganado la batalla!`);
        break;
      }
      character2.attack(character1);
      // Verificar si character1 murió
      if(character1.life <= 0) {
        console.log(`${character2.name} ha ganado la batalla!`);
        break;
      }
    } else {
      character2.attack(character1);
      // Verificar si character1 murió
      if(character1.life <= 0) {
        console.log(`${character2.name} ha ganado la batalla!`);
        break;
      }

      character1.attack(character2);
      // Verificar si character2 murió
      if(character2.life <= 0) {
        console.log(`${character1.name} ha ganado la batalla!`);
        break;
      }
    }
  }
}

startbattle(mage,warrior);