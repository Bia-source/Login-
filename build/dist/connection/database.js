"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
function connection() {
    try {
        mongoose_1.default.connect('mongodb+srv://admin:admin@backend.azxej.mongodb.net/<dbname>?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, function () {
            console.log('conectado');
        });
    }
    catch (error) {
        console.log('erro ao conectar com o banco');
    }
}
exports.default = connection;
