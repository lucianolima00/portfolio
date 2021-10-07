import express from 'express';
import ProjectController from './controller/ProjectController';

const routes = express.Router();

const projectController = new ProjectController();

routes.get('/', projectController.index);
routes.get('/project/:id', projectController.view);

export default routes;