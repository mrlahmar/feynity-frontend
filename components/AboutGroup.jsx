import React from 'react'
import styled from 'styled-components'

const P = styled.p`
    max-width: 690px;
`

const AboutGroup = ({text}) => {
    return (
        <P>
            {text}
        </P>
    )
}

export default AboutGroup
