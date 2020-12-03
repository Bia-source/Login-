import { Document, model, Schema } from 'mongoose'

interface Answer extends Document {
    answer: string,
   id?: string
}

const AnswerSchemas = new Schema({
    answer: {
        type: String,
        required: true 
    },
    id: {
        type: String,
        required: false
    }
});

export default model<Answer>('Answer', AnswerSchemas);