const prompt = require("prompt-sync")();

function doSearch(query){
    console.log(`Searching for: ${query}`)
}


function debounce(func, delay) {
    let timerId

    return function(...args) {
        if (timerId) clearTimeout (timerId);

        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const debouncedSearch = debounce(doSearch, 1000);

while(true) {

    const input = prompt("Type to search (or 'exit' to quit): ");
    if (input.toLowerCase() === "exit") break;

    debouncedSearch(input);
}



function throttle(func, delay) {
    let lastCall = 0;

    return function(...args) {
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args)
        }
    };
}

function logClick(action) {
    console.log(`Clicked: ${action} at ${new Date().toLocaleTimeString()}`);
}

const throttledClick = throttle(logClick, 2000);

while (true) {
    const input = prompt("Press enter to simulate click (or type 'exit'): ");
    if (input.toLowerCase() === "exit") break;

    throttledClick("Buy Now");
}
