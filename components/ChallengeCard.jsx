import Link from 'next/link'
import React from 'react'
import Button from './Button'
import styled from 'styled-components'

const ChallengeCardStyle = styled.div`
    padding: 20px;
    background-color: white;
    width: 100%;
    max-width: 690px;
    border-radius: 10px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    margin-bottom: ${props => props.marginbottom};

    p.tag {
        margin-bottom: 10px;
        .label {
            background-color: #FFEDDE;
            font-size: .85em;
            padding: 5px;
            border-radius: 9px;
            color: #ED694A;

            img {
                margin-right: 5px;
            }
        }
    }

    h3 {
        margin-bottom: 10px;

        .partner {
            color: #ED694A;
        }

        .class {
            color: #6573FF;
        }
    }

    .on {
        font-size: .9em;
        margin-bottom: 15px;

        span {
            color: #6573FF;
        }
    }

    .group {
        font-size: .9em;
        font-weight: bold;
        margin-bottom: 10px;

        span {
            color: #6573FF;
        }
    }
`

const ChallengeCard = ({marginbottom}) => {
    return (
        <ChallengeCardStyle marginbottom={marginbottom}>
            <p className='tag'>
                <span className='label'>
                    <img src="challenge/fire.png" alt="fire icon" />
                    Challenge
                </span>
            </p>
            <Link href="/"><a><h3>You're Challenged <span className="partner">John Doe</span> on <span className="class">JS Beginners</span></h3></a></Link>
            <p className='group'>In <span>JS 101</span></p>
            <p className='on'>Ended on  <span>01-10-2020</span></p>
            <Link href="/"><a><Button text='See Details' marginbottom='0' maxwidth="250px" /></a></Link>
        </ChallengeCardStyle>
    )
}

ChallengeCard.defaultProps = {
    marginbottom: "0px"
}


export default ChallengeCard
