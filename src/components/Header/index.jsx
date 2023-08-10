import React from "react";
import "./index.css";
import Logo from '../Logo'
import HeaderOptions from '../HeaderOptions'
import HeaderIcons from '../HeaderIcons'

export default function Header() {
    return(
        <header className='App-header'>
            <Logo />
            <HeaderOptions />
            <HeaderIcons />
        </header>
    )
}