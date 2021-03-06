import Link from 'next/link'
import React from 'react'
import Button from './Button'
import styled from 'styled-components'

const GroupCardStyle = styled.div`
    padding: 20px;
    background-color: white;
    max-width: 330px;
    border-radius: 10px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    margin-bottom: ${props => props.marginbottom};

    p.tag {
        margin-bottom: 10px;
        .label {
            background-color: #F5D86E;
            font-size: .85em;
            padding: 5px;
            border-radius: 9px;
            color: #000;
        }
    }

    h3 {
        margin-bottom: 10px;
    }

    .basedon {
        font-size: .9em;
        margin-bottom: 5px;

        span {
            color: #6573FF;
        }
    }

    .members {
        font-size: .9em;
        font-weight: bold;
        margin-bottom: 25px;
    }

    a {

    }
`

const GroupCard = ({id,name,coursename,courseid,nmembers,marginbottom}) => {
    return (
        <GroupCardStyle marginbottom={marginbottom}>
            <p className='tag'><span className='label'>Group</span></p>
            <Link href={`/group/${id}`}><a><h3>{name}</h3></a></Link>
            <p className='basedon'>Based On <Link href={`/course/${courseid}`}><a><span>{coursename}</span></a></Link></p>
            <p className='members'>{nmembers} Member{nmembers !== 1 ? "s" : ""}</p>
            <Link href={`/group/${id}`}><a><Button text='Visit Group' marginbottom='0'/></a></Link>
        </GroupCardStyle>
    )
}

GroupCard.defaultProps = {
    marginbottom: "0px"
}

export default GroupCard
