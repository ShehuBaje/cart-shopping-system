const userService = {
    name: "User Service",

    createUser(name) {
        console.log(`[${this.name}] Creating user: ${name}`);
    },
    deleteUser(userId) {
        console.log(`[${this.name}] Deleting user with ID: ${userId}`);
    },
    resetPassword(email) {
        console.log(`[${this.name}] Resetting password for: ${email}`);
    }
};

function dispatch(actionName, argsArray) {
    const method = userService[actionName];
    if (typeof method === "function") {
        method.apply(userService, argsArray);
    } else {
        console.log (`Action '${actionName}' not found.`);
    }
};

dispatch("createUser", ["Shehu"]);
dispatch("resetPassword", ["shehu@example.com"]);
dispatch("deleteUser", [42]);
dispatch("banUser", [99]);