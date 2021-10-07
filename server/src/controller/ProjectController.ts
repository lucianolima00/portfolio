import {Request, Response} from 'express'
import knex from '../database/connection'

class ProjectController {
    async index (request: Request, response: Response) {
        const projects = await knex('project').select('*');
    
        const serializedProject = projects.map(project => {
            return {
                id: project.id,
                name: project.name,
                image: `http://localhost:3333/uploads/${project.image}`,
                first_tech: project.first_tech,
                second_tech: project.second_tech
            }
        })
    
        return response.json(serializedProject);
    }

    async view (request: Request, response: Response) {
        const { id } = request.params;

        const project = await knex('project').select('*').where('id', id).first();

        if (!project) {
            return response.status(400).json({ message: "Project not found" });
        }
    
        const serializedProject = {
            id: project.id,
            name: project.name,
            image: `http://localhost:3333/uploads/${project.image}`,
            description: project.description,
            first_tech: project.first_tech,
            second_tech: project.second_tech
        };
    
        return response.json(serializedProject);
    }
}

export default ProjectController;