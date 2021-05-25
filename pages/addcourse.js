import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import withAuth from '../auth/withAuth'
import Head from 'next/head'
import SideNav from '../components/SideNav'
import Input from '../components/Input'
import Button from '../components/Button'
import AddCourse from '../styles/AddCourse'
import TextArea from '../components/TextArea'

function addcourse() {
    const [isAuthed, setIsAuthed] = useContext(AuthContext)
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
                        <form className='form' action="">
                            <div className="inner">
                                <Input name="coursetitle" type="text" label="Course Title *" placeholder="e.g Javascript 101: Intro to web dev"/>
                                <div className="select">
                                    <label htmlFor="courseplatform">Course Platform *</label>
                                    <select name="courseplatform" id="courseplatform">
                                        <option value="coursera">Coursera</option>
                                        <option value="edx">edX</option>
                                        <option value="udemy">Udemy</option>
                                        <option value="linkedinlearning">LinkedIn Learning</option>
                                    </select>
                                </div>
                                <Input name="courselink" type="text" label="Course Link *" placeholder="e.g https://www.coursera.org/specializations/python"/>
                                <Input name="courseprovider" type="text" label="Course Provider/Creator" placeholder="e.g Harvard University, Wes Bos etc."/>
                                <TextArea label="Description (Optional)" name="description (Optional)" placeholder="This group is for students who started studying web dev through the JavaScript 101: Intro to Web Dev Course" />
                            </div>
                            <Button text="Add course"/>
                        </form>
                    </div>
                </main>
            </AddCourse>
        </>
    )
}

export default withAuth(addcourse)
