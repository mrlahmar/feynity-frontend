import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const M = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    margin-bottom: 18px;

    img {
        max-width: 30px;
        margin-right: 20px;
    }
`

const Member = ({name,groupid}) => {
    return (
        <M>
            <img src="/profile.png" alt="profile pic" />
            <p>{name}</p>
        </M>
    )
}

export default Member
