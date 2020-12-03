import express from 'express';
import authController from './controllers/authController';
import questionController from './controllers/questionController';
import answerController from './controllers/answerController';

const routes = express.Router();

routes.post('/create/user', authController.criarUser);
routes.get('/login', authController.login);
routes.get('/question', questionController.getQuestions);
routes.post('/question', questionController.createQuestion);
routes.delete('/question/:id', questionController.deleteQuestion);
routes.put('/question/:id', questionController.updateQuestion);
routes.put('/question/answer/:id', answerController.createAnswer);
routes.get('/question/answer', answerController.getAnswers);
export default routes;
