import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Btn = styled.button`
    width: 100%;
    max-width: 350px;
    height: 45px;
    background-color: ${props => props.bgColor};
    border: 2px solid ${props => props.borderColor};
    border-radius: 10px;
    color: ${props => props.color};
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 20px;

    &:hover {
        cursor: pointer;
    }

    @media (min-width: 768px) {
        max-width: 350px;
    }
`

function Button({text,color,bgColor,borderColor,onClick}) {
    return (
        <Btn type="submit" color={color} bgColor={bgColor} borderColor={borderColor}>
            {text}
        </Btn>
    )
}

Button.defaultProps = {
    color: "#fff",
    bgColor: "#6573FF",
    borderColor: "#6573FF"
};

export default Button
