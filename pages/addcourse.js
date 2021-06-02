import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import withAuth from '../auth/withAuth'
import Head from 'next/head'
import SideNav from '../components/SideNav'
import Input from '../components/Input'
import Button from '../components/Button'
import AddCourse from '../styles/AddCourse'
import TextArea from '../components/TextArea'
import Warning from '../components/Warning'
import { useRouter } from 'next/router'
import add_course from '../utils/Course'
import Loading from '../components/Loading'

function addcourse() {
    const {user} = useContext(AuthContext)
    const [wentWrong, setWentWrong] = useState(false)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const addAcourse = async event => {
        event.preventDefault()
        setLoading(true)
        await add_course(event, router, user, setWentWrong, setLoading)
    }

    return (
        <>
            <Head>
                <title>Add a course</title>
            </Head>
            <AddCourse>
                <SideNav />
                <main>
                    <div className="container">
                        <h1>Add a Course</h1>
                        {loading ? <Loading /> : <form className='form' onSubmit={addAcourse}>
                            {wentWrong ? <Warning /> : <></>}
                            <div className="inner">
                                <Input name="coursetitle" type="text" label="Course Title *" placeholder="e.g Javascript 101: Intro to web dev"/>
                                <div className="select">
                                    <label htmlFor="courseplatform">Course Platform *</label>
                                    <select name="courseplatform" id="courseplatform" required>
                                        <option value="select" disabled selected>Select a platform</option>
                                        <option value="Coursera">Coursera</option>
                                        <option value="edX">edX</option>
                                        <option value="Udemy">Udemy</option>
                                        <option value="Linkedin Learning">LinkedIn Learning</option>
                                    </select>
                                </div>
                                <Input name="courselink" type="text" label="Course Link *" placeholder="e.g https://www.coursera.org/specializations/python"/>
                                <Input name="courseprovider" type="text" label="Course Provider/Creator" placeholder="e.g Harvard University, Wes Bos etc."/>
                                <TextArea label="Description *" name="coursedescription" placeholder="This group is for students who started studying web dev through the JavaScript 101: Intro to Web Dev Course" />
                            </div>
                            <Button text="Add course"/>
                        </form> }
                    </div>
                </main>
            </AddCourse>
        </>
    )
}

export default withAuth(addcourse)
