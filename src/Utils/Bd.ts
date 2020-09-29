import { Connection, ConnectionOptions, createConnection } from "typeorm";
import { Product } from "../Models/Entities/Product";
import { Sale } from "../Models/Entities/Sales";
import { User } from "../Models/Entities/User";

const options: ConnectionOptions = {
  type: "mysql",
  host: "akatsuki-dev.cvhdnlqgutrq.us-west-2.rds.amazonaws.com",
  database: "bd_daniela",
  username: "admin",
  password: "Holamundo1250",
  synchronize: true,
  entities: [User, Product, Sale],
};

let connection: Connection = null;

export let connect = async () => {
  // metodo para obtener la conexion de bd

  if (connection == null) {
    connection = await createConnection(options);
    return connection;
  } else {
    return connection;
  }
};
