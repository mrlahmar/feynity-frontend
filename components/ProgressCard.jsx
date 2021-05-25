import Link from 'next/link'
import React from 'react'
import Button from './Button'
import styled from 'styled-components'

const ProgressCardStyle = styled.div`
    padding: 20px;
    background-color: white;
    max-width: 350px;
    border-radius: 10px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    display: flex;
    justify-content: space-between;
    align-items: center;

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

    .on {
        font-size: .9em;
        margin-bottom: 5px;

        span {
            color: #6573FF;
        }
    }

    @media (min-width: 500px) {
        max-width: 450px;
    }
`

const ProgressCard = () => {
    return (
        <ProgressCardStyle>
            <div className="info-progress">
                <p className='tag'><span className='label'>Course</span></p>
                <Link href="/"><a><h3>CS50: Introduction to Computer Science</h3></a></Link>
                <p className='on'>On <Link href="/"><a><span>edX</span></a></Link></p>
                <progress value="50" max="100"></progress>
            </div>
            <div className="cta">
               <Link href="/"><a><Button text='Update Progress' marginbottom='10px'/></a></Link>
               <Link href="/"><a><Button text='Quit' color="#6573FF" bgColor="#fff" borderColor="#6573FF" /></a></Link>
            </div>
        </ProgressCardStyle>
    )
}

export default ProgressCard