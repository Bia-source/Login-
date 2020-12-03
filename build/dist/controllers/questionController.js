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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var question_1 = __importDefault(require("../models/question"));
//const { v4: uuid, validate: isUuid, v4 } = require('uuid');
var questionController = /** @class */ (function () {
    function questionController() {
    }
    questionController.prototype.getQuestions = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var resultQuestions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, question_1.default.find()];
                    case 1:
                        resultQuestions = _a.sent();
                        console.log(" console do getQuestions   dddddddd" + resultQuestions);
                        return [2 /*return*/, res.status(200).json(resultQuestions)];
                }
            });
        });
    };
    questionController.prototype.createQuestion = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, title, description, category, repository, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, title = _a.title, description = _a.description, category = _a.category;
                        repository = {
                            title: title,
                            description: description,
                            category: category,
                        };
                        return [4 /*yield*/, question_1.default.create(repository)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, res.json(repository)];
                    case 2:
                        error_1 = _b.sent();
                        return [2 /*return*/, res.status(401).json({ message: "Erro na criação da pergunta", erro: error_1 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    questionController.prototype.updateQuestion = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, title, description, resultQuestion, repository, resultUpdate, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        _a = req.body, title = _a.title, description = _a.description;
                        resultQuestion = question_1.default.findById(id);
                        console.log(resultQuestion);
                        if (!resultQuestion) {
                            return [2 /*return*/, res.status(400).json({ error: 'Essa pergunta não existe mais ' })];
                        }
                        repository = {
                            title: title,
                            description: description
                        };
                        return [4 /*yield*/, question_1.default.findByIdAndUpdate({ _id: req.params.id }, repository, { new: true })];
                    case 1:
                        resultUpdate = _b.sent();
                        return [2 /*return*/, res.json(resultUpdate)];
                    case 2:
                        error_2 = _b.sent();
                        return [2 /*return*/, res.status(400).json({ message: "Não foi possivel editar esta pergunta", erro: error_2 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    questionController.prototype.deleteQuestion = function (Request, Response) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, question_1.default.findByIdAndRemove(Request.params.id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, Response.status(204).json({ message: "Pergunta apagada com sucesso" })];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, Response.status(400).json({ message: "Não foi possivel deletar esta pergunta", erro: error_3 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return questionController;
}());
exports.default = new questionController;
