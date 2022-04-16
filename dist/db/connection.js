"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const config_1 = require("../config");
const pool = new pg_1.default.Pool({
    connectionString: config_1.connectionString,
    ssl: {
        rejectUnauthorized: false
    }
});
exports.default = pool;
