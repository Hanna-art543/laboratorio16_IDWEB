// Cadena JSON
const personaJSON = '{"nombre":"Ana","edad":20,"ciudad":"Lima"}';

// Convertir a objeto JS
const persona = JSON.parse(personaJSON);
persona.edad = 25; 

// Convertir de nuevo a JSON
const personaActualizadaJSON = JSON.stringify(persona);

// Resultados
console.log(personaActualizadaJSON);
