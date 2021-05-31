import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import withAuth from '../auth/withAuth'
import Head from 'next/head'
import SideNav from '../components/SideNav'
import Input from '../components/Input'
import Button from '../components/Button'
import AddCourse from '../styles/AddCourse'
import TextArea from '../components/TextArea'
import { useRouter } from 'next/router'

function addcourse() {
    const [isAuthed, setIsAuthed] = useContext(AuthContext)
    const router = useRouter()

    const addAcourse = async event => {
        event.preventDefault()

        try {
            const res = await fetch(
                'http://localhost:5000/api/v1/courses/add',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': isAuthed.user.accessToken
                    },
                    body: JSON.stringify({
                        title: event.target.coursetitle.value,
                        platform: event.target.courseplatform.value,
                        link: event.target.courselink.value,
                        provider: event.target.courseprovider.value,
                        description: event.target.coursedescription.value,
                    })
                }
            )

            const u = await res.json()
            if (res.status === 200) {
                //console.log(u);
                router.push('/search')
            } else {
                // went wrong
                console.log(u);
            }
            
        } catch (error) {
            // went wrong
            //console.log(u);
        }
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
                        <form className='form' onSubmit={addAcourse}>
                            <div className="inner">
                                <Input name="coursetitle" type="text" label="Course Title *" placeholder="e.g Javascript 101: Intro to web dev"/>
                                <div className="select">
                                    <label htmlFor="courseplatform">Course Platform *</label>
                                    <select name="courseplatform" id="courseplatform" required>
                                        <option value="select" disabled selected>Select a platform</option>
                                        <option value="coursera">Coursera</option>
                                        <option value="edx">edX</option>
                                        <option value="udemy">Udemy</option>
                                        <option value="linkedinlearning">LinkedIn Learning</option>
                                    </select>
                                </div>
                                <Input name="courselink" type="text" label="Course Link *" placeholder="e.g https://www.coursera.org/specializations/python"/>
                                <Input name="courseprovider" type="text" label="Course Provider/Creator" placeholder="e.g Harvard University, Wes Bos etc."/>
                                <TextArea label="Description *" name="coursedescription" placeholder="This group is for students who started studying web dev through the JavaScript 101: Intro to Web Dev Course" />
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
