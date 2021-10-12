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
                first_tech_name: project.first_tech_name,
                first_tech_color: project.first_tech_color,
                second_tech_name: project.second_tech_name,
                second_tech_color: project.second_tech_color,
                url: project.url
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
            first_tech_name: project.first_tech_name,
            first_tech_color: project.first_tech_color,
            second_tech_name: project.second_tech_name,
            second_tech_color: project.second_tech_color,
            url: project.url
        }

        return response.json(serializedProject);
    }
}

export default ProjectController;