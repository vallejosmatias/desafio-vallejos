import UsersDaoMemory from "./memory/users.js";
import UsersDaoMongo from "./mongo/users.js";
import { PERSISTENCE } from "../config/config.js";

export const usersDao =
  PERSISTENCE === "MONGO" ? new UsersDaoMongo() : new UsersDaoMemory();