const { Character } = require('./personaje');

class Mage extends Character {
  constructor(name) {
    super(name, 50, 20, 5, 5);
    this.mana = 100;
    this.spells = [
      { name: "Bola de Fuego", damage: 20, costMana: 15 },
      { name: "Rayo", damage: 25, costMana: 20 },
      { name: "Tormenta de hielo", damage: 15, costMana: 10 },
      { name: "Lanza de fuego", damage: 30, costMana: 25 }
  ];
}

  attack(target) {
    if (this.mana > 0) {
      this.throwSpell(target);
    } else {
      console.log(`${this.name} no tiene mana y ataca físicamente`);
      super.attack(target);
    }
  }

  throwSpell(target) {
    const randomSpell = this.spells[Math.floor(Math.random() * this.spells.length)];
    if (this.mana >= randomSpell.costMana) {
      this.mana -= randomSpell.costMana;
      console.log(`${this.name} lanza ${randomSpell.name} a ${target.name}, causando ${randomSpell.damage} de daño.`);
      target.receiveDamage(randomSpell.damage);
      console.log(`${this.name} tiene Mana: ${this.mana}`);
    } else {
      console.log(`${this.name} no tiene suficiente mana y ataca físicamente`);
      super.attack(target);
    }
  }
}

module.exports = { Mage };