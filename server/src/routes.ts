import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/', async (request, response) => {
    const projects = await knex('project').select('*');

    const serializedProject = projects.map(project => {
        return {
            id: project.id,
            name: project.name,
            image: `http://localhost:3333/uploads/${project.image}`,
            first_tech: project.first_tech,
            second_tech: project.first_tech
        }
    })

    return response.json(serializedProject);
});

routes.get('/project/:id', async (request, response) => {
    const id = request.params.id;
    const project = await knex('project').select('*').where('id', id);

    const serializedProject = project.map(project => {
        return {
            id: project.id,
            name: project.name,
            image: `http://localhost:3333/uploads/${project.image}`,
            description: project.description,
            first_tech: project.first_tech,
            second_tech: project.first_tech
        }
    })

    return response.json(serializedProject);
});

export default routes;