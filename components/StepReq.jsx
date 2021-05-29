import React from 'react'
import Input from './Input'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const S = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0 20px;

    .n {
        height: 45px;
        background-color: #6573FF;
        color: white;
        padding: 10px 20px;
        border-radius: 10px;
        font-weight: bold;
        font-size: 1em;
        margin-right: 20px;
    }
`

const StepReq = ({n, text}) => {
    return (
        <S>
            <p className="n">{n}</p>
            <p>{text}</p>
        </S>
    )
}

StepReq.propTypes = {
    n: PropTypes.number
}

export default StepReq
