"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import cors from 'cors';
var routes_1 = __importDefault(require("../routes"));
var Application = /** @class */ (function () {
    function Application() {
        this.app = express_1.default();
        this.middlewares();
        this.routes();
    }
    Application.prototype.routes = function () {
        this.app.use(routes_1.default);
    };
    Application.prototype.middlewares = function () {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    };
    Application.prototype.listen = function () {
        var _this = this;
        this.app.listen(3333, function () {
            _this.app.get('/', function (req, res) {
                return res.json({ mensagem: ' Sucesso ' });
            });
        });
    };
    return Application;
}());
exports.default = Application;
