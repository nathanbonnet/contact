import _ from 'lodash';

export class contact {
    constructor(prenom, nom, email) {
        this.prenom = prenom
        this.nom = nom
        this.email = email
    }
    displayInfo() {
        console.log(contact);
    }
}
