import { Employe } from "./employe";
import { Personne } from "./personne";

var e1 : Employe = new Employe();
console.log("e1=" + JSON.stringify(e1));

var p1 : Personne;
p1 = new Personne('alex','Therieur',-30);
p1.incrementerAge() ;
console.log("age de p1=" + p1.age); //appel interne de get age();
p1.age = -5;  //appel interne de set age(-5);
p1.age = 35;  //appel interne de set age(35);
console.log("p1="+ JSON.stringify(p1));