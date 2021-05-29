import React from 'react'
import Input from './Input'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from './Button'

const S = styled.div`
    .flx {
        display: flex;
        align-items: center;
        margin: 10px 0 20px;
    }

    .x2 {
        justify-content: space-between;
    }

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
            <div className="flx">
                <p className="n">{n}</p>
                <p>{text}</p>
            </div>
            <div className="flx x2">
                <Input name={`step${n}`} placeholder="Screenshot Link"/>
                <Button text="Submit" maxwidth="100px" marginbottom="10px" color="#5DC39E" bgColor="#fff" borderColor="#5DC39E"/>
            </div>
        </S>
    )
}

StepReq.propTypes = {
    n: PropTypes.number
}

export default StepReq
