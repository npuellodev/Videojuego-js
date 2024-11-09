const { Character } = require('./personaje');

class Warrior extends Character {
    constructor(name) {
        super(name, 70, 10, 10, 8);
        this.weapons = [
            { name: "Espada", damage: 10 },
            { name: "Hacha", damage: 15 },
            { name: "Mazo", damage: 20 },
            { name: "Lanza", damage: 25 }
        ];
    }

    attack(target) {
        const randomWeapon = this.weapons[Math.floor(Math.random() * this.weapons.length)];
        const totalDamage = this.attackPower + randomWeapon.damage;
        console.log(`${this.name} ataca con ${randomWeapon.name} a ${target.name}`);
        target.receiveDamage(totalDamage);
    }
}

module.exports = { Warrior };