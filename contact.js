//@ts-ignore
const prompt = require("prompt-sync")();
const fs = require('fs');

let contacts = loadContacts();

function showMenu() {
    console.log("\n=====CONTACT MANAGEMENT SYSTEM=====");
    console.log("1. Add Contact");
    console.log("2. View Contacts");
    console.log("3. Search Contacts");
    console.log("4. Delete Contact");
    console.log("5. Edit Contact");
    console.log("6. Exit")
}

function addContact() {
    const name = prompt("Enter name: ");
    const phone = prompt("Enter number: ");
    const email = prompt("Enter email: ");

    const contact = {
        name : name,
        phone : phone,
        email : email
    };
    contacts.push(contact);
    saveContacts();
    console.log("Contact add successfully.");
}

function viewContacts() {
    if (contacts.length === 0) {
        console.log("No contacts found.");
        return;
    }
    console.log("\n=====Contact List=====");
    contacts.forEach((contact, index) => {
        console.log(`\nContact ${index + 1}:`);
        console.log(`Name: ${contact.name}`);
        console.log(`Phone: ${contact.phone}`);
        console.log(`Email: ${contact.email}`);
    });
}

function searchContacts(){
    const searchTerm = prompt("Enter name or phone number to search: ").toLowerCase();
    
    const results = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm) || contact.phone.includes(searchTerm)
    );
    if (results.length === 0) {
        console.log("No matching contacts found.");
    } else {
        console.log("\n===== Search Results ======");
        results.forEach((contact, index) => {
            console.log(`Contact ${index + 1}:`);
            console.log(`Name: ${contact.name}`);
            console.log(`Phone: ${contact.phone}`);
            console.log(`Email: ${contact.email}`);
        });
    }
}

function deleteContact(){
    if (contacts.length === 0) {
        console.log("No contact to delete");
        return;
    }
    console.log("\n===== Contact List =====");
    contacts.forEach((contact, index) => {
        console.log(`${index + 1}. ${contact.name} - ${contact.phone} - ${contact.email}`)
    });
    const indexToDelete = parseInt(prompt("Enter the number of contact to delete: "));
    if (isNaN(indexToDelete) || indexToDelete < 1 || indexToDelete > contacts.length) {
        console.log("Invalid contact number.")
        return;
    }
    const removed = contacts.splice(indexToDelete - 1, 1);
    console.log(`Contact "${removed[0].name}" deleted successfully.`);
    saveContacts();
}

function editContact() {
    if (contacts.length === 0) {
        console.log("No contacts to edit.");
        return;
    }

    console.log("\n===== Contact List =====");
    contacts.forEach((contact, index) => {
        console.log(`${index + 1}. ${contact.name} - ${contact.phone} - ${contact.email}`);
    });

    const indexToEdit = parseInt(prompt("Enter the number of the contact to edit: "));

    if (isNaN(indexToEdit) || indexToEdit < 1 || indexToEdit > contacts.length) {
        console.log("Invalid contact number.");
        return;
    }

    const contact = contacts[indexToEdit - 1];

    console.log("\nPress Enter to keep the current value.");

    const newName = prompt(`Name [${contact.name}]: `);
    const newPhone = prompt(`Phone [${contact.phone}]: `);
    const newEmail = prompt(`Email [${contact.email}]: `);

    if (newName.trim() !== "") contact.name = newName;
    if (newPhone.trim() !== "") contact.phone = newPhone;
    if (newEmail.trim() !== "") contact.email = newEmail;

    console.log("Contact updated successfully.");
    saveContacts();
}   

function loadContacts() {
    try {
        const data = fs.readFileSync('contacts.json', 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

function saveContacts() {
    fs.writeFileSync('contacts.json', JSON.stringify(contacts, null, 2));
}

function main() {
    let keepGoing = true;
    while (keepGoing) {
        showMenu();
        const choice = prompt("Choose an option (1-6): ");

        switch (choice) {
            case "1":
                addContact();
                break;

            case "2":
                viewContacts();
                break;

            case "3":
                searchContacts();
                break;
                
            case "4":
                deleteContact();
                break;

            case "5":
                editContact();
                break;    

            case "6":
                console.log("Exiting...Goodbye!");
                keepGoing = false;
                break;

            default:
                console.log("Invalid choice. Please select 1-5.");    
            
        }
    }
}
main(
    
)