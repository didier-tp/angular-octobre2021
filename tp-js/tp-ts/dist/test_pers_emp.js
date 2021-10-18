"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employe_1 = require("./employe");
var personne_1 = require("./personne");
var e1 = new employe_1.Employe();
console.log("e1=" + JSON.stringify(e1));
var p1;
p1 = new personne_1.Personne('alex', 'Therieur', -30);
p1.incrementerAge();
console.log("age de p1=" + p1.age); //appel interne de get age();
p1.age = -5; //appel interne de set age(-5);
p1.age = 35; //appel interne de set age(35);
console.log("p1=" + JSON.stringify(p1));
//# sourceMappingURL=test_pers_emp.js.map