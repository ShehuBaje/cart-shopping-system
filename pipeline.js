function createPipeline(){
    const middlewares = [];

    return {
        use(fn) {
            middlewares.push(fn);
        },
        execute(context) {
            let index = -1;

            function next() {
                index++;

                const middleware = middlewares[index];

                if (middleware) {
                    middleware(context, next);
                }
            }

            next();
        }
    };
}

const pipeline = createPipeline();

pipeline.use((ctx, next) => {
    ctx.timestamp = new Date().toISOString();
    console.log("Timestamp added.");
    next();
});

pipeline.use((ctx, next) => {
    ctx.userId = "user_123";
    console.log("UserId added.");
    next();
});

pipeline.use((ctx, next) => {
    console.log("Final context:", ctx);
    next();
});

const request = {Type: "REQUEST _ DATA"};
pipeline.execute(request);