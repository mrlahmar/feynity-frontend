import styled from 'styled-components'
import SideNav from '../components/SideNav'
import CourseCard from '../components/CourseCard'
import Loading from '../components/Loading'
import Head from 'next/head'
import withAuth from '../auth/withAuth'
import { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import Link from 'next/link'

const CoursesStyle = styled.div`
    padding: 0 15px 0;

    main {
        margin: 120px auto 0px;
        .tag {
            margin-bottom: 15px;
        }
    }

    .my-courses .my-crs {
        display: grid;
        grid-template-columns: repeat(auto-fill, 330px);
        grid-gap: 15px;
    }

    @media (min-width: 1080px) {
        margin-top: 120px;
        main {
            margin-left: 400px;
        }
    }

    @media (min-width: 1440px) {
        main {
            margin: 120px auto 0 400px;
        }
        
        margin: 0 auto;
        padding: unset;
        width: 1440px;
    }

    .fetcherr {
        color: red;
    }

    .srch {
        display: block;
        margin-top: 1em;
        color: #6573FF;
    }
`

const mycourses = () => {
    const {user} = useContext(AuthContext)
    const [myCourses, setMyCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)

    useEffect(() => {
        const fetchMyCourses = async () => {
            try {
                // fetch end point
                const res = await fetch(
                    'http://localhost:5000/api/v1/courses/getMyCourses',
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

        fetchMyCourses()
    }, [])

    return (
        <>
            <Head>
                <title>My Courses</title>
            </Head>
            <CoursesStyle>
                <SideNav />
                <main>
                    <h4 className='tag'>My Courses</h4>
                    <div className="container">
                        <div className="my-courses">
                            <div className="my-crs">
                                {
                                    loading ? <Loading /> :
                                        myCourses.length === 0 && err
                                            ? <p className="fetcherr">Error fetching the courses</p>
                                            : myCourses.length === 0
                                                ? <p>You Haven't took any course yet <span className="srch"><Link href='/search'><a>Search for Courses</a></Link></span></p>
                                                : myCourses.map(
                                                    mycourse => <CourseCard key={mycourse.id} id={mycourse.id} title={mycourse.title} platform={mycourse.platform} nstudents={mycourse.number_of_students}/>
                                                )
                                }
                            </div>
                        </div>
                    </div>
                </main>
            </CoursesStyle>
        </>
    )
}

export default withAuth(mycourses)
