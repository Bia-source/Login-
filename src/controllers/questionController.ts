import Question from '../models/question';
import { Request, Response } from 'express';

//const { v4: uuid, validate: isUuid, v4 } = require('uuid');

class questionController {
    public async getQuestions(req: Request, res: Response) {
        const resultQuestions = await Question.find();
        console.log(" console do getQuestions   dddddddd" + resultQuestions)
        return res.status(200).json(resultQuestions);
    }

    public async createQuestion(req: Request, res: Response) {
        try {
            const { title, description, category } = req.body;
            const repository = {
                title,
                description,
                category,
            }
            await Question.create(repository);
            return res.json(repository);
        } catch (error) {
            return res.status(401).json({ message: "Erro na criação da pergunta", erro: error })
        }
    }

    public async updateQuestion(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { title, description } = req.body;
            const resultQuestion = Question.findById(id);
            console.log(resultQuestion);
            if (!resultQuestion) {
                return res.status(400).json({ error: 'Essa pergunta não existe mais ' });
            }
            const repository = {
                title,
                description
            };
            const resultUpdate = await Question.findByIdAndUpdate({ _id: req.params.id }, repository, { new: true });
            return res.json(resultUpdate);
        } catch (error) {
            return res.status(400).json({ message: "Não foi possivel editar esta pergunta", erro: error })
        }

    }


    public async deleteQuestion(Request: any, Response: any) {
        try {
            await Question.findByIdAndRemove(Request.params.id);
            return Response.status(204).json({  message: "Pergunta apagada com sucesso"});
        } catch (error) {
            return Response.status(400).json({message: "Não foi possivel deletar esta pergunta", erro: error});
        }
    }


}

export default new questionController;