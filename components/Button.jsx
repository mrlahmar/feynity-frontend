import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
    width: 100%;
    height: 45px;
    background-color: var(--primary-color);
    border-radius: 10px;
    border: none;
    color: white;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 20px;
    //max-width: 300px;

    &:hover {
        cursor: pointer;
    }
`

function Button({text}) {
    return (
        <Btn>
            {text}
        </Btn>
    )
}

export default Button
