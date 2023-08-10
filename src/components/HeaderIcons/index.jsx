import React from "react";
import "./index.css";
import iconUser from '../../images/perfil.svg'
import iconBag from '../../images/sacola.svg'

export default function HeaderIcons() {

    const icons = [iconUser, iconBag]

    return (
        <ul className='icons'>
            { icons.map( (icon) => (
            <li className='icon'><img src={icon}></img></li>
            )) }
        </ul>
    )
}