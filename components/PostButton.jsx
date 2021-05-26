import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E7E7FC;
    width: 100%;
    max-width: 150px;
    height: 35px;
    border: none;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
    }

    @media (min-width: 768px) {
        max-width: 350px;
    }

    img {
        margin-right: 5px;
    }
`

const PostButton = ({src, alt, text}) => {
    return (
        <Btn>
            <img src={src} alt={alt} />
            {text}
        </Btn>
    )
}

export default PostButton
