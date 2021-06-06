import React, { useContext, useState, useEffect } from 'react'
import Head from 'next/head'
import ProgressStyle from '../styles/Progress'
import SideNav from '../components/SideNav'
import ProgressCard from '../components/ProgressCard'
import Loading from '../components/Loading'
import withAuth from '../auth/withAuth'
import { AuthContext } from '../context/AuthContext'
import styled from 'styled-components'
import Link from 'next/link'

const P = styled.p`
    color: red;
`

const Span = styled.span`
    display: block;
    margin-top: 10px;
    color: #6573FF;
`

const progress = () => {
    const {user} = useContext(AuthContext)
    const [myCourses, setMyCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)

    useEffect(() => {
        const fetchMyCoursesWithProgress = async () => {
            try {
                // fetch end point
                const res = await fetch(
                    'http://localhost:5000/api/v1/courses/getMyCoursesWithProgress',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'x-auth-token': user.accessToken
                        }   
                    }
                )
                if (res.status === 200) {
                    // parse data
                    const mycourses = await res.json()
                    setMyCourses(mycourses)
                    setLoading(false)
                } else {
                    setErr(true)
                    setLoading(false)
                }
            } catch (error) {
                setErr(true)
                setLoading(false)
            }
        }

        fetchMyCoursesWithProgress()
    }, [])

    return (
        <>
            <Head>
                <title>My Progress</title>
            </Head>
            <ProgressStyle>
                <SideNav />
                <main>
                    <h3>My Progress</h3>
                    <div className="inner-container">
                        <div className="stats">
                            <p className="points">{user.userData.points} points</p>
                            <p className="level">{user.userData.points < 100 ? "Beginner Level" : user.userData.points >= 100 && user.userData.points < 300 ? "Intermediate Level" : "Expert Level"}</p>
                        </div>
                        <div className="progress-cards">
                            {
                                loading ? <Loading /> :
                                    myCourses.length === 0 && err
                                        ? <P>Error fetching the courses</P>
                                        : myCourses.length === 0
                                            ? <p>You Haven't took any course yet <Span className="srch"><Link href='/search'><a>Search for Courses</a></Link></Span></p>
                                            : myCourses.map(
                                                mycourse => <ProgressCard key={mycourse.course.id} id={mycourse.course.id} title={mycourse.course.title} platform={mycourse.course.platform} progress={mycourse.relationData.progress}/>
                                            )
                            }
                        </div>
                    </div>
                </main>
            </ProgressStyle>
        </>
    )
}

export default withAuth(progress)
