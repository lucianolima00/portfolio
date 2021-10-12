import { Knex } from 'knex';

export async function seed(knex: Knex) {
    await knex('project').insert([
        { 
            image: "web-portfolio.png",
            name: "WEB PORTFOLIO",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis, ipsum in eleifend elementum, leo turpis gravida orci, id ullamcorper sem nunc eget nisl. Etiam non consequat libero. Nulla facilisi. Proin odio nulla, dapibus et imperdiet sed, maximus et nunc. Curabitur viverra gravida leo, vel egestas magna vehicula nec. Quisque ac libero sagittis, tempor nisi a, venenatis nunc. Morbi vehicula fringilla consectetur. Quisque tellus odio, pretium in ipsum eget, efficitur varius mi",
            first_tech_name: "ReactJS",
            first_tech_color: "#04DAF2",
            second_tech_name: "NodeJS",
            second_tech_color: "#8CC152",
            url: "https://github.com/lucianolima00/portfolio"
        },
        { 
            image: "mobile-portfolio.png",
            name: "MOBILE PORTFOLIO",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis, ipsum in eleifend elementum, leo turpis gravida orci, id ullamcorper sem nunc eget nisl. Etiam non consequat libero. Nulla facilisi. Proin odio nulla, dapibus et imperdiet sed, maximus et nunc. Curabitur viverra gravida leo, vel egestas magna vehicula nec. Quisque ac libero sagittis, tempor nisi a, venenatis nunc. Morbi vehicula fringilla consectetur. Quisque tellus odio, pretium in ipsum eget, efficitur varius mi",
            first_tech_name: "Flutter",
            first_tech_color: "#04DAF2",
            second_tech_name: "Dart",
            second_tech_color: "#EC6C3C",
            url: "https://github.com/lucianolima00/portfolio_flutter"
        },
        { 
            image: "mobile-pocket.png",
            name: "MOBILE POCKET",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis, ipsum in eleifend elementum, leo turpis gravida orci, id ullamcorper sem nunc eget nisl. Etiam non consequat libero. Nulla facilisi. Proin odio nulla, dapibus et imperdiet sed, maximus et nunc. Curabitur viverra gravida leo, vel egestas magna vehicula nec. Quisque ac libero sagittis, tempor nisi a, venenatis nunc. Morbi vehicula fringilla consectetur. Quisque tellus odio, pretium in ipsum eget, efficitur varius mi",
            first_tech_name: "Flutter",
            first_tech_color: "#04DAF2",
            second_tech_name: "Dart",
            second_tech_color: "#EC6C3C",
            url: "https://github.com/lucianolima00/pocket_flutter"
        },
        { 
            image: "web-pocket.png",
            name: "WEB POCKET",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis, ipsum in eleifend elementum, leo turpis gravida orci, id ullamcorper sem nunc eget nisl. Etiam non consequat libero. Nulla facilisi. Proin odio nulla, dapibus et imperdiet sed, maximus et nunc. Curabitur viverra gravida leo, vel egestas magna vehicula nec. Quisque ac libero sagittis, tempor nisi a, venenatis nunc. Morbi vehicula fringilla consectetur. Quisque tellus odio, pretium in ipsum eget, efficitur varius mi",
            first_tech_name: "ReactJS",
            first_tech_color: "#04DAF2",
            second_tech_name: "NodeJS",
            second_tech_color: "#8CC152",
            url: "https://github.com/lucianolima00"
        }
    ])

}