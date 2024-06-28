import app from "./app";
import config from "./app/config";

async function main() {
    app.listen(config.port, () => {
        console.log("Server running at port ", config.port);
    });
}

main();