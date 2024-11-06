class Character {
  constructor(name, life, attackPower, defense, speed) {
    this.name = name;
    this.life = life;
    this.attackPower = attackPower;
    this.defense = defense;
    this.speed = speed;
    this.experience = 0;
    this.level = 1;
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

  levelUp() {
    this.level += 1;
    this.attackPower += 1;
    this.defense += 1;
    this.speed += 1;
    this.experience = 0;
  }
}

module.exports = { Character };