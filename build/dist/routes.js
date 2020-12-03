"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authController_1 = __importDefault(require("./controllers/authController"));
var questionController_1 = __importDefault(require("./controllers/questionController"));
var answerController_1 = __importDefault(require("./controllers/answerController"));
var routes = express_1.default.Router();
routes.post('/create/user', authController_1.default.criarUser);
routes.get('/login', authController_1.default.login);
routes.get('/question', questionController_1.default.getQuestions);
routes.post('/question', questionController_1.default.createQuestion);
routes.delete('/question/:id', questionController_1.default.deleteQuestion);
routes.put('/question/:id', questionController_1.default.updateQuestion);
routes.put('/question/answer/:id', answerController_1.default.createAnswer);
routes.get('/question/answer', answerController_1.default.getAnswers);
exports.default = routes;
