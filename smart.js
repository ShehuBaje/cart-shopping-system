const user = {};

Object.defineProperty(user, 'firstname', {
    value: "Shehu",
    writable: true,
    enumerable: true,
    configurable: false
});

Object.defineProperty(user, 'lastname', {
    value: "Umar",
    writable: true,
    enumerable: true,
    configurable: false
});

Object.defineProperty(user, 'fullname', {
    get() {
        return `${this.firstname} ${this.lastname}`; 
    },

    enumerable: true
});

Object.defineProperty(user, 'password', {
    set(value) {
        if (value.length < 6) {
            console.log("Password too short!");
        } else {
            console.log("Password set.");
            this._password = value;
        }
    },
    get() {
        return "Protected";
    },
    enumerable: false
});

user.firstname = "Baje";
user.lastname = "Umar";

console.log("Full name:", user.fullname);

user.password = "123";
user.password = "securePass";

console.log("Password:", user.password);