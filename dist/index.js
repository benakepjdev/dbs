"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// const client = new Client({
//   host: 'localhost',
//   port: 5432,
//   database: 'postgres',
//   user: 'postgres',
//   password: 'mysecretepassword',
// });
const client = new pg_1.Client({
    connectionString: 'postgresql://postgres:mysecretepassword@localhost/postgres',
});
// async function createUsersTable() {
//   await client.connect();
//   const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `);
//   console.log(result);
// }
// async function insertUser(username: string, password: string, email: string) {
//   await client.connect();
//   const values = [username, password, email];
//   const query = "INSERT INTO users(username, password, email) VALUES($1, $2, $3)";
//   const result = await client.query(query, values);
//   console.log(result);
// }
// insertUser("premjit1", "123", "pj@gmail");
// async function updateUser(email: string, updatedEmail: string) {
//   await client.connect();
//   const query = 'UPDATE users SET email = $1 WHERE email = $2';
//   const result = await client.query(query, [updatedEmail, email]);
//   console.log(result)
// }
// updateUser("pj@gmail", "pj@gmail.com");
// async function getUser(email: string) {
//   await client.connect();
//   const query = 'SELECT * FROM users WHERE email = $1';
//   const result = await client.query(query, [email]);
//   console.log(result.rows);
// }
// getUser("p@mail")
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = 'SELECT * FROM users';
        const result = yield client.query(query);
        console.log(result.rows);
    });
}
getAllUsers();
