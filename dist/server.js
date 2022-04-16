"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// initialize configuration
dotenv_1.default.config();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + port);
});
