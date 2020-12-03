"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var AnswerSchemas = new mongoose_1.Schema({
    answer: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: false
    }
});
exports.default = mongoose_1.model('Answer', AnswerSchemas);
