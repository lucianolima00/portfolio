import express from 'express';

const routes = express.Router();

const projects = [
    {
        id: 1,
        name: "WEB PORTFOLIO",
        image: " "
    }, 
    {
        id: 2,
        name: "MOBILE PORTFOLIO",
        image: " "
    }, 
    {
        id: 3,
        name: "MOBILE POCKET",
        image: " "
    }
];

routes.get('/', (request, response) => {

    return response.json(projects);
});

routes.get('/project/:id', (request, response) => {
    const id = request.params.id;

    const project = projects.filter(function (item) { return item.id === parseInt(id); });

    return response.json(project);
});

export default routes;