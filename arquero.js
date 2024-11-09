const { Character } = require('./personaje');

class Archer extends Character {
  constructor(name) {
    super(name, 50, 10, 8, 12);
    this.arrows = [
      { name: "Flecha", damage: 10 },
      { name: "Flecha de Fuego", damage: 15 },
      { name: "Flecha de Hielo", damage: 20 },
      { name: "Flecha de la Muerte", damage: 25 }
    ];
  }

  attack(target) {
    const randomArrow = this.arrows[Math.floor(Math.random() * this.arrows.length)];
    const totalDamage = this.attackPower + randomArrow.damage;
    console.log(`${this.name} dispara ${randomArrow.name} a ${target.name}`);
    target.receiveDamage(totalDamage);
  }
}

module.exports = { Archer };