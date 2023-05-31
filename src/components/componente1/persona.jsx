import React from 'react'
import { people } from '../../database/data'
import { getImageUrl } from '../../Help/utils';

export default function ListPersona() {
    let filtro ="Desarrollador"
    const desarrollador = people.filter(person=>
        person.profession=filtro
        );
    const ListItems = desarrollador.map(person =>
        <li>
            <img src={getImageUrl} 
            alt={person.name} />
            <p>
                <b>
                    {person.name}
                </b>
                
            </p>
        </li>
        )
}