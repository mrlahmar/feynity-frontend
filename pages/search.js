import React, { useContext } from 'react'
import Head from 'next/head'
import StyledSearch from '../styles/Search'
import CourseCard from '../components/CourseCard'
import Input from '../components/Input'
import SideNav from '../components/SideNav'
import { AuthContext } from '../context/AuthContext'

const search = () => {
    const {isAuthenticated} = useContext(AuthContext)

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
                            />
                        </div>
                        <div className="results">
                            <p>3 Matching Results</p>
                            <div className="cards">
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                            </div>
                        </div>
                    </div>
                </main>
            </StyledSearch>
        </>
    )
}

export default search
