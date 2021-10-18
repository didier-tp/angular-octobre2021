export class Personne{
    constructor(
        public prenom :string ="?",
        public nom :string ="?",
        private _age : number = 0){
            if(this._age < 0) { this._age = 0; 
                console.log("_age negatif interdit , _age à 0 ")}
    }

    public get age() { return this._age; }
    public set age(newAge : number) {
        if(newAge >= 0) { this._age = newAge; }
        else { console.log("age negatif invalide"); 
          // ou bien throw "age negatif invalide" 
        }
    }

    incrementerAge() : void{
        this.age++; //this. est un prefixe obligatoire en typescript
    }
}



