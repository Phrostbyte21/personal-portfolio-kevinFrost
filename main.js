import { people } from './people.js'
import { planets } from './planets.js'

people.map(people =>{
    console.log(people.name);
})

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

//const swurl = "https://swapi.dev/api/people/"

//baseball Assignment Data
const url = './people.js';
const ul = document.getElementById('people');

let swpeople;


fetch(url)
    .then(resp => resp.json()
    .then(data => {
        swpeople = data.results;

        swpeople.map(person =>{
            console.log(people.name)
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');

            img.src = people.homeworld;
            span.innerHTML = `${people.name}`;

            append(li, img);
            append(li, span);
            append(ul, li);
        })

        
})