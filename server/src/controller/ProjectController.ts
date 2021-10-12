import {Request, Response} from 'express'
import knex from '../database/connection'

const nodemailer = require("nodemailer");

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
                second_tech_color: project.second_tech_color
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
            second_tech_color: project.second_tech_color
        }

        return response.json(serializedProject);
    }

    // async..await is not allowed in global scope, must use a wrapper
    async send_mail(request: Request, response: Response, ) {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
}

export default ProjectController;