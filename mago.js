class Mage extends Character {
  constructor(name){
    super(name, 50, 15, 5);
    this.mana = 100;
    this.spells = [
      { name: "Fireball", damage: 20, costMana: 15 },
      { name: "Ray", daño: 25, costMana: 20 },
      { name: "Ice Storm", damage: 15, costMana: 10 },
      { name: "Arcane Barrage", damage: 30, costMana: 25 }
  ];

  function ThrowSpell(objetive) {
    const randomSpell = this.spells[Math.floor(Math.random() * this.spells.length)];

    // Comprobar si tiene suficiente mana
    if (this.mana >= randomSpell.costMana) {
      this.mana -= randomSpell.costMana;
      console.log(`${this.nombre} lanza ${randomSpell.name} a ${objetive.name}, causando ${randomSpell.damage} de daño.`);
      objetive.reciveDamage(randomSpell.damage);
      console.log(`Mana restante: ${this.mana}`);
  } else {
      console.log(`${this.name} no tiene suficiente mana para lanzar ${randomSpell.name}. Mana restante: ${this.mana}`);
  }
  }

  }

}

export { Mage };