import React from 'react'
import { people } from '../../database/data'
import { getImageUrl } from '../../Help/utils';

export default function ListPersona2() {
    let filtro ="Diseñador"
    const diseniador = people.filter(person=>
        person.profession=filtro
        );
    const listItems2 = diseniador.map(person =>
        <li>
            <img src={getImageUrl(person)} 
            alt={person.name} />
            <p>
                <b>
                    {person.name}:
                </b>
                {' ' + person.profession +' '
                }
                know for {person.accomplishment}                
            </p>
        </li>
        )
        return <ul>{listItems2}</ul>
}


