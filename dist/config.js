"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionString = void 0;
// this environment variable gets handed to us by heroku if we use the postgres add-on
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.connectionString = process.env.DATABASE_URI;
