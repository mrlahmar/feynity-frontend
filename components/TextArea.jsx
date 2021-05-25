import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Label = styled.label`

    display: block;
    
    span {
        display: block;
        margin-bottom: 10px;
        font-size: .9em;
    }

    textarea {
        outline: none;
        padding: 15px;
        border: 2px solid ${props => props.borderColor};
        border-radius: 10px;
        margin-bottom: 20px;
        font-size: .9em;
        width: 350px;
        height: 300px;
    }

    @media (min-width: 1154px) {
        textarea {
            width: 725px;
            height: 200px;
        }
    }
`

const TextArea = ({label, name, placeholder, borderColor}) => {
    return (
        <Label htmlFor={name} borderColor={borderColor}>
            <span>{label}</span>
            <textarea name={name} id={name} placeholder={placeholder}></textarea>
        </Label>
    )
}

TextArea.defaultProps = {
    borderColor: "#6573FF"
}

export default TextArea
