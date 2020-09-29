import { App } from "./App/App";

let server: App = new App();

server.app.listen(3000, () => {
  console.log("Server inicializado en el puerto: 3000");
});
