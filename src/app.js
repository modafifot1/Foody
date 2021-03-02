import {Server, envVariables} from "./configs"
import {defaultMiddleware} from "./middlewares";

const {port} = envVariables;
const main = async()=>{
    const server = new Server(port);
    server.registerMiddleware(defaultMiddleware);
    server.listen();

}
main();