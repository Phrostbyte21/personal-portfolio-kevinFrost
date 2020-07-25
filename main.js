//Star Wars Addition
import { people } from './people.js'
//console.log(people)

people.map(person => {
    console.log(person)
})

const swpeople = 'https://swapi.dev/api/people/';

fetch(swpeople)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })




//Baseball Project Code
/*
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const url = 'https://randomuser.me/api/?results=30';

let authors;

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        authors = data.results;
        console.log(authors)

        authors.map(author => {
            console.log(author.name.last)
        })

        let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');
    })

















/*import { people } from './people.js'
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
                span = createNode('span');

            span.innerHTML = `${people.name}`;

            append(li, img);
            append(li, span);
            append(ul, li);
        })
    })
)
*/