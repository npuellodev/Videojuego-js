// importamos las clases de los personajes para que se puedan usar
const { Warrior } = require('./guerrero');
const { Mage } = require('./mago');
const { Archer } = require('./arquero');

// Crear equipos con 2 personajes de cada clase en 2 equipos
const teamA = [
    new Warrior("Aragorn", 80, 15, 12, 14),    // Más rápido
    new Archer("Legolas", 60, 12, 8, 16),      // El más rápido
    new Mage("Gandalf", 50, 20, 5, 10)         // Velocidad media
];

const teamB = [
    new Warrior("Lurtz", 75, 14, 11, 13),      // Rápido
    new Archer("Grishnak", 55, 11, 7, 15),     // Segundo más rápido
    new Mage("Sauron", 60, 22, 6, 9)          // Lento
];

// verifica si el equipo sigue vivo
function isTeamAlive(team) {
  // Retorna true si al menos un personaje tiene vida mayor a 0
    return team.some(char => char.life > 0);
}

function resetAttackFlags(teams) {
    // Reinicia el flag de ataque para todos los personajes
    teams.forEach(team => {
        team.forEach(char => {
            char.hasAttackedThisRound = false;
        });
    });
}

function getAllLivingCharacters(teamA, teamB) {
    // Combina todos los personajes vivos de ambos equipos
    return [...teamA, ...teamB]
        .filter(char => char.life > 0)
        .filter(char => !char.hasAttackedThisRound)
        .sort((a, b) => b.speed - a.speed); // Ordena por velocidad
}

function getRandomTarget(team) {
    const aliveCharacters = team.filter(char => char.life > 0);
    if (aliveCharacters.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * aliveCharacters.length);
    return aliveCharacters[randomIndex];
}

// Función principal que maneja la batalla entre equipos
function teamBattle(teamA, teamB) {
    console.log("¡Comienza la batalla entre equipos!");
    console.log("Equipo A:", teamA.map(char =>
        `${char.name}`).join(", "));
    console.log("Equipo B:", teamB.map(char =>
        `${char.name}`).join(", "));

    let round = 1;

    while (isTeamAlive(teamA) && isTeamAlive(teamB)) {
        console.log(`\n=== Ronda ${round} ===`);

        // Reinicia los flags de ataque para la nueva ronda
        resetAttackFlags([teamA, teamB]);

        // Mientras haya personajes que no han atacado en esta ronda
        while (getAllLivingCharacters(teamA, teamB).length > 0) {
            // Obtiene el siguiente personaje más rápido que no ha atacado
            const attacker = getAllLivingCharacters(teamA, teamB)[0];

            // Determina el equipo objetivo (el contrario al del atacante)
            const targetTeam = teamA.includes(attacker) ? teamB : teamA;
            const target = getRandomTarget(targetTeam);

            if (target) {
                attacker.attack(target);
                attacker.hasAttackedThisRound = true;
            }
        }

        // Muestra el estado de los equipos al final de la ronda
        console.log("\nEstado al final de la ronda:");
        console.log("Equipo A - Vivos:", teamA.filter(char => char.life > 0)
            .map(char => `${char.name} (${char.life} HP)`).join(", "));
        console.log("Equipo B - Vivos:", teamB.filter(char => char.life > 0)
            .map(char => `${char.name} (${char.life} HP)`).join(", "));

        round++;
    }

    // Determinar ganador
    const winningTeam = isTeamAlive(teamA) ? "A" : "B";
    const survivingMembers = winningTeam === "A" ? 
        teamA.filter(char => char.life > 0) : 
        teamB.filter(char => char.life > 0);
    console.log(`\n¡El equipo ${winningTeam} ha ganado la batalla!`);
    console.log("Sobrevivientes:", survivingMembers.map(char =>
        `${char.name} (${char.life} HP)`).join(", "));
}

// Iniciar la batalla
teamBattle(teamA, teamB);