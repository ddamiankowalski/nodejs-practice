const SuperHero = require('./superhero');

const s1 = new SuperHero('batman');
s1.name = 'notBatmn';

const s2 = new SuperHero('superman');

console.log(s1.name, s2.name)