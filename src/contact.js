import _ from 'lodash';

export class Contact {
    constructor(prenom, nom, email) {
        this.prenom = prenom
        this.nom = nom
        this.email = email
    }
    displayInfo() {
        console.log(this);
        let name = this.prenom.length;
        if (name <= 2) {
           this.prenom = window.prompt("votre nom doit etre superieur à 2 caracteres");
        }
        console.log(this);
    }
}