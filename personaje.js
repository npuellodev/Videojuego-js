class Character {
  constructor(name, life, attackPower, defense, speed) {
    this.name = name;
    this.life = life;
    this.attackPower = attackPower;
    this.defense = defense;
    this.speed = speed;
    this.hasAttackedThisRound = false;
  }

  attack(target) {
    const damage = Math.max(this.attackPower - target.defense, 1);
    console.log(`${this.name} ataca a ${target.name} causando ${damage} puntos de daño.`);
    target.receiveDamage(damage);
  }

  receiveDamage(damage) {
    this.life -= damage;
    console.log(`${this.name} recibe ${damage} puntos de daño. Vida restante: ${this.life}`);
  }

}

module.exports = { Character };