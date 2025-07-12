function mul(a, b) {
    return a * b;
}

function greet(name, title) {
    return `Hello ${title} ${name}`;
}

function logWrapper(func) {
    return function (...args) {
        console.log(`Called with arguments:`, args);
        const start = Date.now();

        const result = func.apply(this, args);

        const end = Date.now();
        console.log(`Returned result:`, result);
        console.log(`Execution Time: ${end - start}ms`);
        return result;
    };
}

const loggedMul = logWrapper(mul);
loggedMul(3, 5); 

const loggedGreet = logWrapper(greet);
loggedGreet("Shehu", "Mr."); 

function slowTask(x) {
    for (let i = 0; i < 1e7; i++) {}
    return x * 2;
}

const loggedSlow = logWrapper(slowTask);
loggedSlow(10);