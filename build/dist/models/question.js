"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var QuestionSchemas = new mongoose_1.Schema({
    id: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: false
    }
});
exports.default = mongoose_1.model('Question', QuestionSchemas);
