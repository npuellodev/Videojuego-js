class Character {
  constructor(name,life, attack, defense, speed) {
    this.name = name;
    this.life = life;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.experience = 0;
    this.level = 1;
    function attack(objetive) {
      const damage = this.attack - objetive.defense;
      console.log(`${this.name} ataca a ${objetive.name} causando ${damage} puntos de daño.`);
      objetive.reciveDamage(damage);
    }

    function reciveDamage(damage) {
      this.life -= damage;
      console.log(`${this.name} recibe ${damage} puntos de daño.`);
  }

  function levelUp() {
    this.level += 1;
    this.attack += 1;
    this.defense += 1;
    this.speed += 1;
    this.experience = 0;
  }
}
}

export { Character };