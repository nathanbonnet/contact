import { Contact } from './contact.js';
import { ContactManager } from './manager.js';

export let contact1 = new Contact("nathan", "bonnet", "nathbonnet@hotmail.fr");
let contact2 = new Contact("sebastien", "bonnet", "sebbonnet@hotmail.fr");
contact1.displayInfo();
contact2.displayInfo();
export let contacts = [
    contact1,
    contact2
];

const monInstance = new ContactManager();
monInstance.displayMenu();
