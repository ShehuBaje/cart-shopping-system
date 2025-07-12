//@ts-ignore

// const prompt = require("prompt-syn")();

function startSession(username) {
    let timer;

    function resetTimer() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            console.log(`Session expired for ${username}`);
        }, 30000);
    }

    function performAction(action) {
        console.log(`${username} performed: ${action}`);
        resetTimer();
    }

    console.log(`${username} logged in`);
    resetTimer();

    return {
        do: performAction
    };
}

const user = startSession("Shehu");

user.do("Viewed dashboard");

setTimeout(() => {
    user.do("Clicked profile");
}, 10000);

setTimeout(() => {
    user.do("Sent a message");
}, 20000);