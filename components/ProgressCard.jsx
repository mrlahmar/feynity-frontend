import Link from 'next/link'
import React, { useContext, useState } from 'react'
import Button from './Button'
import InputNumber from './InputNumber'
import styled from 'styled-components'
import { AuthContext } from '../context/AuthContext'
import { useRouter } from 'next/router'

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

    .info-progress {
        flex: 2;
        margin-right: 1em;
    }

    .cta {
        flex: 1;
    }

    progress {
        margin-right: 1em;
    }

    form {
        display: flex;
        align-items: center;

        button {
            margin-left: 10px;
        }
    }

    .fetcherr {
        color: red;
        margin-bottom: 10px;
        display: block;
    }

    @media (min-width: 500px) {
        max-width: 450px;
    }
`

const ProgressCard = ({id, title, platform, progress}) => {
    const {user} = useContext(AuthContext)
    const [progress_, setProgress_] = useState(progress)
    const [err,setErr] = useState(false)
    const router = useRouter()
    
    const updateProgress = async event => {
        setErr(false)
        event.preventDefault()
        try {
            // fetch end point
            const res = await fetch(
                'http://localhost:5000/api/v1/courses/updateProgress',
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': user.accessToken
                    },
                    body: JSON.stringify({
                        id,
                        progress: event.target.progress.value
                    })
                }
            )
            if (res.status === 200) {
                // set new progress
                setProgress_(event.target.progress.value)
            } else {
                setErr(true)
            }
        } catch (error) {
            setErr(true)
        }
    }

    const quitCourse = async () => {
        setErr(false)
        try {
            // fetch end point
            const res = await fetch(
                'http://localhost:5000/api/v1/courses/quit',
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': user.accessToken
                    },
                    body: JSON.stringify({
                        id
                    })
                }
            )
            if (res.status === 200) {
                router.reload(window.location.pathname)
            } else {
                setErr(true)
            }
        } catch (error) {
            setErr(true)
        }
    }

    return (
        <ProgressCardStyle>
            <div className="info-progress">
                {err ? <span className="fetcherr">Error, Something went wrong</span> : ""}
                <p className='tag'><span className='label'>Course</span></p>
                <Link href={`/course/${id}`}><a><h3>{title}</h3></a></Link>
                <p className='on'>On <Link href="/"><a><span>{platform}</span></a></Link></p>
                <span><progress value={progress_} max="100"></progress>{progress_}%</span>
            </div>
            <div className="cta">
                <form onSubmit={updateProgress}>
                    <InputNumber name="progress" minwidth="45px" maxwidth="45px" placeholder="%" textindent="7px"/>
                    <Button text='Update Progress' marginbottom='10px'/>
                </form>
                <Button text='Quit' color="#6573FF" bgColor="#fff" borderColor="#6573FF" onClick={quitCourse}/>
            </div>
        </ProgressCardStyle>
    )
}

export default ProgressCard