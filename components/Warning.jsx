import React from 'react'
import styled from 'styled-components'

const P = styled.p`
    display: flex;
    align-items: center;
    background-color: #db5353;
    color: white;
    margin-bottom: 20px;
    height: 45px;
    border-radius: 10px;
    text-indent: 10px;

    img {
        margin-left: 15px;
    }
`
const Warning = () => {
    return (
        <P><img src="form/warning.png" alt="warning icon" />Something went wrong</P>
    )
}

export default Warning
