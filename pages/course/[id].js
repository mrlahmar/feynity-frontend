import React, { useContext, useState, useEffect } from 'react'
import Head from 'next/head'
import CourseStyle from '../../styles/CourseStyle'
import Link from 'next/link'
import Button from '../../components/Button'
import GroupCard from '../../components/GroupCard'
import SideNav from '../../components/SideNav'
import Warning from '../../components/Warning'
import Loading from '../../components/Loading'
import { AuthContext } from '../../context/AuthContext'
import { take_course } from '../../utils/Course'
import { useRouter } from 'next/router'

export const getStaticPaths = async () => {
    // fetch paths
    const res = await fetch('http://localhost:5000/api/v1/courses/getall')
    const courses = await res.json()

    const paths = courses.map(course => {
        return {
            params: {id: course.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    // fetching course info by id (param)
    const res = await fetch(`http://localhost:5000/api/v1/courses/getById/${id}`)
    const course = await res.json()

    const groupRes = await fetch(`http://localhost:5000/api/v1/groups/getGroups/${course.id}`)
    const groups = await groupRes.json()

    return {
        props: {course,groups}
    }
}

const course = ({course,groups}) => {
    const {isAuthenticated, user} = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [load, setLoad] = useState(true)
    const [wentWrong, setWentWrong] = useState(false)
    const [took, setTook] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const checkTook = async () => {
            if(!isAuthenticated) {
                return;
            }

            try {
                // fetch end point
                const res = await fetch(
                    'http://localhost:5000/api/v1/courses/check',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'x-auth-token': user.accessToken
                        },
                        body: JSON.stringify({
                            id: course.id
                        })
                    }
                ) 

                if (res.status !== 200) {
                    setTook(true)
                    setLoad(false)
                } else {
                    setLoad(false)
                }
            } catch (error) {
                setLoad(false)
                router.reload(window.location.pathname)
            }
        }

        checkTook()
    }, [])

    const takeCourse = async () => {
        if(isAuthenticated) {
            await take_course(router,user,course,setLoading, setWentWrong)
        } else {
            router.push('/signin')
        }
    }

    return (
        <>
            <Head>
                <title>{course.title} Course</title>
            </Head>
            <CourseStyle>
                {isAuthenticated
                    ? <SideNav />
                    : <></>
                }
                <main className={`${isAuthenticated && 'logged'}`}>
                    <p className='tag'>Course</p>
                    <div className="container">
                        {wentWrong ? <Warning /> : <></>}
                        {loading ? <Loading /> : <div className="course">
                            <div className="course-info">
                                <h1>{course.title}</h1>
                                <p className='provider'>on <span>{course.platform}</span> - by <span>{course.provider}</span></p>
                                <h4>Course Description</h4>
                                <p className='description'>{course.description}</p>
                            </div>
                            <div className="ctas">
                                { load ? "" : took ? <Link href="/progress"><a><Button text="See Progress" color="#5DC39E" bgColor="#fff" borderColor="#5DC39E"/></a></Link>
                                : <Button text="Join course" onClick={takeCourse}/> }
                                <Link href={`${course.link}`}><a target="_blank"><Button text={`See on ${course.platform}`}  color="#6573FF" bgColor="#fff" borderColor="#6573FF"/></a></Link>
                            </div>
                        </div> }
                        <div className="related-groups">
                            <h4>Related Groups</h4>
                            <div className="related-grp">
                                {
                                    groups.length === 0 ? <p>No Groups for this Course</p> :
                                    groups.map(group => <GroupCard key={group.id} id={group.id} name={group.name} courseid={group.courseid} coursename={group.course} nmembers={group.number_of_members}/>)
                                }
                                </div>
                        </div>
                    </div>
                </main>
            </CourseStyle>
        </>
    )
}

export default course
