import React, { useContext } from 'react'
import Head from 'next/head'
import CourseStyle from '../../styles/CourseStyle'
import Link from 'next/link'
import Button from '../../components/Button'
import GroupCard from '../../components/GroupCard'
import SideNav from '../../components/SideNav'
import { AuthContext } from '../../context/AuthContext'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(ninja => {
        return {
            params: {id: ninja.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()

    return {
        props: {ninja: data}
    }
}


const course = ({ninja}) => {
    const [isAuthed, setIsAuthed] = useContext(AuthContext)
    return (
        <>
            <Head>
                <title>Course N° {ninja.id}</title>
            </Head>
            <CourseStyle>
                {isAuthed.authed
                    ? <SideNav />
                    : <></>
                }
                <main className={`${isAuthed.authed && 'logged'}`}>
                    <p className='tag'>Course</p>
                    <div className="container">
                        <div className="course">
                            <div className="course-info">
                                <h1>Python for Everyone</h1>
                                <p className='provider'>on <span>Coursera</span> - by <span>University of Michigan</span></p>
                                <h4>Course Description</h4>
                                <p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim numquam temporibus ex, obcaecati blanditiis consectetur doloribus, odit omnis, ad voluptatum.</p>
                            </div>
                            <div className="ctas">
                                <Link href="/"><a><Button text="Join course"/></a></Link>
                                <Link href="/"><a><Button text="Take on Coursera" color="#6573FF" bgColor="#fff" borderColor="#6573FF"/></a></Link>
                            </div>
                        </div>
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
