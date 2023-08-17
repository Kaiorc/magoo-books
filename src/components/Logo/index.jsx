import React from "react";
import logo from '../../images/logo.svg'
import styled from "styled-components";

const LogoContainer = styled.div`
display: flex;
font-size: 30px;
`

const LogoImg = styled.img`
    margin-right: 10px;
`

export default function Logo() {
    return (
        <LogoContainer>
            <LogoImg 
                src={logo} 
                alt='logo' 
                className="logo-img"
                />
            <p><strong>Magoo</strong>Books</p>
        </LogoContainer>
    )
}