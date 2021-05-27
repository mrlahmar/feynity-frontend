import styled from 'styled-components'
import SideNav from '../components/SideNav'
import CourseCard from '../components/CourseCard'
import Head from 'next/head'
import withAuth from '../auth/withAuth'

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
`

const mycourses = () => {
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
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                            </div>
                        </div>
                    </div>
                </main>
            </CoursesStyle>
        </>
    )
}

export default withAuth(mycourses)
