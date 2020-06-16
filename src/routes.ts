import express from 'express';
import authController from './controllers/authController';

const routes = express.Router();

routes.post('/', authController.criarUser);
routes.get('/login', authController.login);

export default routes;

