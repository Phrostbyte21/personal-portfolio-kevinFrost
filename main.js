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
const url = 'https://swapi.dev/api/people/?results=30';
const ul = document.getElementById('characters');

let swcharacters;


fetch(url)
    .then(resp => resp.json()
    .then(data => {
        swcharacters = data.results;

        swcharacters.map(author =>{
            console.log(author.name.first)
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');

            img.src = authors.picture.medium;
            span.innerHTML = `Author Name: ${author.name.first} ${author.name.last}`;

            append(li, img);
            append(li, span);
            append(ul, li);
        })

        
})