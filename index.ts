console.log("Hello via Bun!");

const server = Bun.serve({
    port: 3000,
    fetch(request) {
        // if (request.)
        // request.
        console.info(`request ${request.url}`);
        return new Response(`Welcome to Bun! -> ${request.url}`);
    },
    websocket: {
        message(ws, message) {

            ws.send(message); // echo back the message
        },
    }
});
  
console.log(`Listening on localhost:${server.port}`);


//Integracja bun z TRPC
//https://github.com/sachinraja/trpc-bun/blob/main/server/index.ts

