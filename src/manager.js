import { contacts } from './main.js';
import { Contact } from './contact.js';

export class ContactManager {
    displayMenu() {
        let exit = false;
        do {
            console.log('1 : Lister les contacts')
            console.log('2 : Ajouter un nouveau contact')
            console.log('3 : Modifier un contact existant')
            console.log('4 : Supprimer un contact')
            console.log('5 : Quitter le gestionnaire de contacts')
            let choice = window.prompt("selectionner le programe");
            switch(choice) {
                case "1" :
                    console.log(contacts)
                break;
                case "2" :
                    this.addContact();
                break;
                case "3" :
                    contacts.forEach((contact, i) => {
                        console.log("taper " + i + " pour selectionner le contact", contact ) 
                    });
                    let contactId = window.prompt("quel contact voulez-vous modifier");
                    this.editContact(contacts[contactId]);
                    console.log(contacts);
                break;
                case "4" :
                    contacts.forEach((contact, i) => {
                        console.log("taper " + i + " pour selectionner le contact", contact ) 
                    });
                    let contactsId = window.prompt("quel contact voulez-vous supprimer");
                    contacts.splice(contactsId);
                    console.log(contacts);
                break;
                case "5" :
                    exit = true;
                    console.log("au revoir")
                break;
                default:
            }
        }while(!exit)

    }
    addContact() {
        let name = window.prompt("ajouter un nom");
        let prenom = window.prompt("ajouter un prenom");
        let email = window.prompt("ajouter email");
        contacts.push(new Contact(prenom, name, email));
        console.log(contacts);
    }
    editContact(contact) {
        let name = window.prompt("ajouter un nom");
        let prenom = window.prompt("ajouter un prenom");
        let email = window.prompt("ajouter email");
        contact.nom = contact.setName(name);
        contact.prenom = contact.setName(prenom);
        contact.email = contact.checkEmail(email);
    }
}
