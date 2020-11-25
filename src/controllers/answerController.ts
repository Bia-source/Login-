import Answer from '../models/answer';
import Question from '../models/question';
import { Response, Request } from 'express';

class answerController {
    public async getAnswers(res: Response) {
        try {
            const resultAnswers = await Answer.find();
            return res.status(200).json(resultAnswers);
        } catch (error) {
            return res.status(400).json({message: "Não foi possivel pegar as respostas verificar conexão", erro: error});
        }
    }

    

   
}

export default new answerController;