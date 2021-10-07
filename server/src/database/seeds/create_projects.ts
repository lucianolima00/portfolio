import { Knex } from 'knex';

export async function seed(knex: Knex) {
    await knex('project').insert([
        { 
            image: "web-portfolio.png",
            name: "WEB PORTFOLIO",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis, ipsum in eleifend elementum, leo turpis gravida orci, id ullamcorper sem nunc eget nisl. Etiam non consequat libero. Nulla facilisi. Proin odio nulla, dapibus et imperdiet sed, maximus et nunc. Curabitur viverra gravida leo, vel egestas magna vehicula nec. Quisque ac libero sagittis, tempor nisi a, venenatis nunc. Morbi vehicula fringilla consectetur. Quisque tellus odio, pretium in ipsum eget, efficitur varius mi",
            first_tech: "ReactJS",
            second_tech: "NodeJS"
        },
        { 
            image: "mobile-portfolio.png",
            name: "MOBILE PORTFOLIO",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis, ipsum in eleifend elementum, leo turpis gravida orci, id ullamcorper sem nunc eget nisl. Etiam non consequat libero. Nulla facilisi. Proin odio nulla, dapibus et imperdiet sed, maximus et nunc. Curabitur viverra gravida leo, vel egestas magna vehicula nec. Quisque ac libero sagittis, tempor nisi a, venenatis nunc. Morbi vehicula fringilla consectetur. Quisque tellus odio, pretium in ipsum eget, efficitur varius mi",
            first_tech: "Flutter",
            second_tech: "Dart"
        },
        { 
            image: "mobile-pocket.png",
            name: "MOBILE POCKET",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis, ipsum in eleifend elementum, leo turpis gravida orci, id ullamcorper sem nunc eget nisl. Etiam non consequat libero. Nulla facilisi. Proin odio nulla, dapibus et imperdiet sed, maximus et nunc. Curabitur viverra gravida leo, vel egestas magna vehicula nec. Quisque ac libero sagittis, tempor nisi a, venenatis nunc. Morbi vehicula fringilla consectetur. Quisque tellus odio, pretium in ipsum eget, efficitur varius mi",
            first_tech: "Flutter",
            second_tech: "Dart"
        },
        { 
            image: "web-pocket.png",
            name: "WEB POCKET",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis, ipsum in eleifend elementum, leo turpis gravida orci, id ullamcorper sem nunc eget nisl. Etiam non consequat libero. Nulla facilisi. Proin odio nulla, dapibus et imperdiet sed, maximus et nunc. Curabitur viverra gravida leo, vel egestas magna vehicula nec. Quisque ac libero sagittis, tempor nisi a, venenatis nunc. Morbi vehicula fringilla consectetur. Quisque tellus odio, pretium in ipsum eget, efficitur varius mi",
            first_tech: "ReactJS",
            second_tech: "NodeJS"
        }
    ])

}