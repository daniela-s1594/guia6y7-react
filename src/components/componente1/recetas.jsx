import {recetas} from '../../database/recetas'
import React from 'react'


export default function Listfood() {
    const listItems4= recetas.map(i=>
        <li>{i}</li>
        );
    return <ul>{listItems4}</ul>;
}