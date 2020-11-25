import { Schema, Document, model } from 'mongoose';

interface Question extends Document {
    id?: string,
    title: string;
    description: string;
    category: string;
    answer?: string
}

const QuestionSchemas = new Schema({
    id: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    category: {
        type:String,
        required: true
    },
    answer: {
        type: String,
        required: false
    }
});

export default model<Question>('Question', QuestionSchemas);