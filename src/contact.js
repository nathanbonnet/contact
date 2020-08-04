import _ from 'lodash';


export class Contact {
    constructor(prenom, nom, email) {
        this.prenom = this.setName(prenom)
        this.nom = this.setName(nom)
        this.email = email;
        this.emailCheck = this.checkEmail(email);
        
    }
    displayInfo() {
        console.log(this);
    }
    isNameOk(name) {
        if (name.length <= 2) {
            return false;
        }
            return true;
    }
    setName(name) {
        let nom = name;
        while (!this.isNameOk(nom)) {
            nom = window.prompt("votre nom doit etre superieur à 2 caracteres");
        }
        return nom;
    }
    checkEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            return "adresse e-mail validé";
        } return "non valide"
    }
}


