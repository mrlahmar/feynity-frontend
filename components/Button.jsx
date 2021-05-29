import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Btn = styled.button`
    width: 100%;
    max-width: ${props => props.maxwidth};
    height: 45px;
    background-color: ${props => props.bgColor};
    border: 2px solid ${props => props.borderColor};
    border-radius: 10px;
    color: ${props => props.color};
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: ${props => props.marginbottom};
    margin-right: ${props => props.marginright};

    &:hover {
        cursor: pointer;
    }

    @media (min-width: 768px) {
        max-width: ${props => props.maxwidth};
    }
`

function Button({type,text,color,bgColor,borderColor,marginbottom,maxwidth,marginright,onClick}) {
    return (
        <Btn type={type} color={color} bgColor={bgColor} borderColor={borderColor} marginbottom={marginbottom} maxwidth={maxwidth} marginright={marginright} onClick={onClick}>
            {text}
        </Btn>
    )
}

Button.defaultProps = {
    color: "#fff",
    bgColor: "#6573FF",
    borderColor: "#6573FF",
    marginbottom: '20px',
    marginright: '0px',
    maxwidth: "350px",
    type: "submit"
};

export default Button
