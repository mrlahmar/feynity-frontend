import Link from 'next/link'
import React from 'react'
import Button from './Button'
import styled from 'styled-components'

const CourseCardStyle = styled.div`
    padding: 20px;
    background-color: white;
    max-width: 330px;
    border-radius: 10px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);

    p.tag {
        margin-bottom: 10px;
        .label {
            background-color: #5DC39E;
            font-size: .85em;
            padding: 5px;
            border-radius: 9px;
            color: #fff;
        }
    }

    h3 {
        margin-bottom: 10px;
    }

    .on {
        font-size: .9em;
        margin-bottom: 5px;

        span {
            color: #6573FF;
        }
    }

    .students {
        font-size: .9em;
        font-weight: bold;
        margin-bottom: 25px;
    }

    a {

    }
`

const CourseCard = ({id, title, platform, nstudents}) => {
    return (
        <CourseCardStyle>
            <p className='tag'><span className='label'>Course</span></p>
            <Link href={`/course/${id}`}><a><h3>{title}</h3></a></Link>
            <p className='on'>On <Link href="/"><a><span>{platform}</span></a></Link></p>
            <p className='students'>{nstudents} Student{nstudents !== 1 ? "s" : ""}</p>
            <Link href={`/course/${id}`}><a><Button text='See Course' marginbottom='0'/></a></Link>
        </CourseCardStyle>
    )
}

export default CourseCard
