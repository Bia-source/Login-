"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var listen_1 = __importDefault(require("./listen/listen"));
var database_1 = __importDefault(require("./connection/database"));
//fazendo conexão com o banco
database_1.default();
// Acessando porta 
var app = new listen_1.default();
app.listen();
