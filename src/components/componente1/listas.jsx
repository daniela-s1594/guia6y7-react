import React from 'react'

const people = [
    'Jose Rodriguez:Matematicas',
    'Julio Bermudez:Ingeniero de software',
    'Ana Julia: Diseñador',
    'Mateo Ruiz: QA',
    'Pablo jacinto:Desarrollador'
];

export default function List() {
    const listItems= people.map(person=>
        <li>{person}</li>
        );
    return <ul>{listItems}</ul>;
}

