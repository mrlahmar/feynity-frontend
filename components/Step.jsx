import React from 'react'
import Input from './Input'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const S = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;

    p {
        height: 45px;
        background-color: #6573FF;
        color: white;
        padding: 10px 20px;
        border-radius: 10px;
        font-weight: bold;
        font-size: 1em;
        margin-right: 20px;
        margin-bottom: 20px;
    }
`

const Step = ({n, name, placeholder}) => {
    return (
        <S>
            <p>{n}</p>
            <Input name={name} type="text" placeholder={placeholder} maxwidth="100%" labelCheck={false} />
        </S>
    )
}

Step.propTypes = {
    n: PropTypes.number
}

export default Step
