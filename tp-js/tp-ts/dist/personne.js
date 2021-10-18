"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    function Personne(prenom, nom, _age) {
        if (prenom === void 0) { prenom = "?"; }
        if (nom === void 0) { nom = "?"; }
        if (_age === void 0) { _age = 0; }
        this.prenom = prenom;
        this.nom = nom;
        this._age = _age;
        if (this._age < 0) {
            this._age = 0;
            console.log("_age negatif interdit , _age à 0 ");
        }
    }
    Object.defineProperty(Personne.prototype, "age", {
        get: function () { return this._age; },
        set: function (newAge) {
            if (newAge >= 0) {
                this._age = newAge;
            }
            else {
                console.log("age negatif invalide");
                // ou bien throw "age negatif invalide" 
            }
        },
        enumerable: false,
        configurable: true
    });
    Personne.prototype.incrementerAge = function () {
        this.age++; //this. est un prefixe obligatoire en typescript
    };
    return Personne;
}());
exports.Personne = Personne;
//# sourceMappingURL=personne.js.map