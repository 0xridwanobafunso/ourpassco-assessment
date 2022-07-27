import { boot } from "quasar/wrappers";
import { makeServer } from "../server/main";

let server = makeServer();

export default boot(({ app }) => {});

export { server };
