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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mount = void 0;
const connection_1 = __importDefault(require("./db/connection"));
const exampleUser = {
    username: "fcc_test",
    _id: "5fb5853f734231456ccb3b05"
};
function createUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield connection_1.default.query(`INSERT INTO users (username) VALUES ($1) RETURNING *;`, [username.username]);
        // Save user to DB
        return user.rows[0];
    });
}
const mount = (app) => {
    // define a route handler for the default home page
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/views/index.html');
    });
    app.post('/api/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const newUser = yield createUser({ username: req.body.username });
        res.json(newUser);
    }));
};
exports.mount = mount;
