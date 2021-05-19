import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
    display: block;
    
    span {
        display: block;
        margin-bottom: 10px;
        font-size: .9em;
    }

    input {
        width: 270px;
        height: 45px;
        border: 2px solid #6573FF;
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
            width: 350px;
        }
    }

`

function Input({name, type, label, placeholder}) {
    return (
        <Label htmlFor={name}>
            <span>{label}</span>
            <input type={type} id={name} name={name} placeholder={placeholder} required/>
        </Label>
    )
}

export default Input
