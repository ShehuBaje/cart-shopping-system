function createEventSystem() {
    const events = {};

    return {
        on(eventName, handler) {
            if (!events[eventName]) {
                events[eventName] = [];
            }
            events[eventName].push(handler);
        },

        emit(eventName, ...args) {
            if (!events[eventName] || events[eventName].length === 0) {
                console.log(`No listeners for event: "${eventName}"`);
                return;
            }

            events[eventName].forEach(fn => {
                fn(...args);
            });
        },

        off(eventName, handler) {
            if (!events[eventName]) return;
            events[eventName] = events[eventName].filter(fn => fn !== handler);
        }
    };
}

const eventSystem = createEventSystem();

function greet(name) {
    console.log(`Hello, ${name}!`);
}

function log(name) {
    console.log(`Log: User ${name} triggered login.`);
}

eventSystem.on("login", greet);
eventSystem.on("login", log);

eventSystem.emit("login", "Shehu");

eventSystem.off("login", log);

eventSystem.emit("login", "Binta");