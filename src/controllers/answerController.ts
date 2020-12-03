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

    

    public async createAnswer(Request: any, Response: any) {
        try {
            const { id } = Request.params;
            const { answer } = Request.body;
            const resultQuestion = Question.findById(id);
            if (!resultQuestion) {
                return Response.status(400).json({ error: 'Essa pergunta não existe mais ' });
            }
            const repository = {
                answer
            };
            //const result = await Question.findOneAndUpdate(repository);
            const resultUpdate = await Question.findOneAndUpdate({ _id: Request.params.id }, repository, { new: true });
            return Response.json(resultUpdate);
        } catch (error) {
            return Response.status(400).json({ message: 'Não foi possivel criar uma resposta para esta pergunta', erro: error });
        }
    }
   
}

export default new answerController;