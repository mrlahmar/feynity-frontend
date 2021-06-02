import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Label = styled.label`
    display: block;
    
    span {
        display: block;
        margin-bottom: 10px;
        font-size: .9em;
    }

    input {
        width: 100%;
        min-width: 250px;
        max-width: ${props => props.maxwidth};
        height: ${props => props.height};
        border: 2px solid ${props => props.borderColor};
        border-radius: 10px;
        margin-bottom: 20px;
        text-indent: 15px;
        outline: none;
    }

    input::-webkit-input-placeholder {
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    input:-ms-input-placeholder {
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    input:-moz-placeholder {
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    input::-moz-placeholder {
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    @media (min-width: 768px) {
        span {
            font-size: 1em;
        }

        input {
            max-width: ${props => props.maxwidth};
        }
    }

`

function Input({name, type, label, placeholder, borderColor, height, labelCheck, maxwidth, req, onChange}) {
    return (
        <Label htmlFor={name} borderColor={borderColor} height={height} maxwidth={maxwidth}>
            {labelCheck ? <span>{label}</span> : <></>}
            <input type={type} id={name} name={name} placeholder={placeholder} required={req} onChange={onChange}/>
        </Label>
    )
}

Input.propTypes = {
    labelCheck: PropTypes.bool,
    req: PropTypes.bool
}

Input.defaultProps = {
    borderColor: "#6573FF",
    height: "45px",
    labelCheck: true,
    maxwidth: "350px",
    req: true
}

export default Input
