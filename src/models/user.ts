import { Schema, Document, model} from 'mongoose';
import crypto from 'crypto';

interface User extends Document {
    name: string;
    email: string;
    password:string;
}

const UserSchemas = new Schema({
    name: {
        type: String,
        required: true,
        //unique: true
    },
    email: {
        type:String,
        required: true,
        lowercase: true
    },
    password: {
        type:String,
        required: true,
        select: false,
        set: (value: crypto.BinaryLike) => {
            return crypto.createHash('md5').update(value).digest('hex');
        }
    }
});

export default model<User>('User', UserSchemas);