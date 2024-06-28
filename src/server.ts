import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
    try {
        // database connection
        mongoose.connect(config.db_url);

        // running server
        app.listen(config.port, () => {
            console.log("Server running at port ", config.port);
        });
    } catch (err) {
        throw new Error("Server Internal Error Occured");
    }
}

main();