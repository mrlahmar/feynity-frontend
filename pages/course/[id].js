import React, { useContext, useState } from 'react'
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

    return {
        props: {course}
    }
}

const course = ({course}) => {
    const {isAuthenticated, user} = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [wentWrong, setWentWrong] = useState(false)
    const router = useRouter()

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
                                {/* <Link href="/progress"><a><Button text="You took this course" color="#5DC39E" bgColor="#fff" borderColor="#5DC39E"/></a></Link> */}
                                <Button text="Join course" onClick={takeCourse}/>
                                <Link href={`${course.link}`}><a target="_blank"><Button text={`See on ${course.platform}`}  color="#6573FF" bgColor="#fff" borderColor="#6573FF"/></a></Link>
                            </div>
                        </div> }
                        <div className="related-groups">
                            <h4>Related Groups</h4>
                            <div className="related-grp">
                                <GroupCard />
                                <GroupCard />
                                <GroupCard />
                            </div>
                        </div>
                    </div>
                </main>
            </CourseStyle>
        </>
    )
}

export default course
