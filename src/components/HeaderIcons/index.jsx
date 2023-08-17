import React from "react";
import iconUser from '../../images/perfil.svg'
import iconBag from '../../images/sacola.svg'
import styled from "styled-components";

const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
`
const Icons = styled.ul`
    display: flex;
    align-items: center;
`

export default function HeaderIcons() {

    const icons = [iconUser, iconBag]

    return (
        <Icons>
            { icons.map( (icon) => (
            <Icon><img src={icon}></img></Icon>
            )) }
        </Icons>
    )
}