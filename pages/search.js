import React, { useContext, useState } from 'react'
import Head from 'next/head'
import StyledSearch from '../styles/Search'
import CourseCard from '../components/CourseCard'
import Input from '../components/Input'
import SideNav from '../components/SideNav'
import { AuthContext } from '../context/AuthContext'

export async function getServerSideProps(context) {
    try {
        const res = await fetch('http://localhost:5000/api/v1/courses/getall')
        const courses = await res.json()
        
        return {
            props: {
                courses,
                err: false
            }
        }
    } catch (error) {
        return {
            props: {
                courses: [],
                err: true
            }
        }
    }
}

const search = ({courses, err}) => {
    const {isAuthenticated} = useContext(AuthContext)
    const intial = courses || []
    const [filteredCourses, setFilteredCourses] = useState(intial)

    const onSearchChange = event => {
        const rg = new RegExp(event.target.value,"i");
        setFilteredCourses(courses.filter(course => course.title.match(rg)))
    }

    return (
        <>
            <Head>
                <title>Search</title>
            </Head>
            <StyledSearch>
                {isAuthenticated
                    ? <SideNav />
                    : <></>
                }
                <main className={`${isAuthenticated && 'logged'}`}>
                    <p className='tag'>Search for courses and groups</p>
                    <div className="container">
                        <div className="search">
                            <Input 
                                name="search" 
                                type="text" 
                                label="" 
                                placeholder="Search for courses and groups" 
                                labelCheck={false} 
                                height="55px" 
                                borderColor="#A2A2A2"
                                maxwidth="1020px"
                                onChange={onSearchChange}
                            />
                        </div>
                        <div className="results">
                            <p>{filteredCourses.length} Matching Results</p>
                            <div className="cards">
                                {filteredCourses.length === 0 && err 
                                    ? <p className="fetcherr">Error fetching the courses</p>
                                :filteredCourses.length === 0 
                                    ? <p>No Courses Found</p>
                                    : filteredCourses.map(course => <CourseCard key={course.id} id={course.id} title={course.title} platform={course.platform} nstudents={course.number_of_students}/>)}
                            </div>
                        </div>
                    </div>
                </main>
            </StyledSearch>
        </>
    )
}

export default search
