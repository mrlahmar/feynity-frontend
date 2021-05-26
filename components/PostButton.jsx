import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E7E7FC;
    width: calc((100% - 20px) / 2);
    height: 35px;
    border: none;
    border-radius: 10px;
    margin-right: ${props => props.marginright};

    &:hover {
        cursor: pointer;
    }

    img {
        margin-right: 5px;
    }
`

const PostButton = ({src, alt, text, marginright}) => {
    return (
        <Btn marginright={marginright}>
            <img src={src} alt={alt} />
            {text}
        </Btn>
    )
}

PostButton.defaultProps = {
    marginright: '0px'
}

export default PostButton
