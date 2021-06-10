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
const Warning = ({msg}) => {
    return (
        <P><img src="/form/warning.png" alt="warning icon" />{msg}</P>
    )
}

Warning.defaultProps = {
    msg: "Something went wrong"
}

export default Warning
