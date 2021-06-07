import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import withAuth from '../auth/withAuth'
import Head from 'next/head'
import SideNav from '../components/SideNav'
import Input from '../components/Input'
import Button from '../components/Button'
import TextArea from '../components/TextArea'
import GroupCard from '../components/GroupCard'
import GroupStyle from '../styles/GroupStyle'
import Loading from '../components/Loading'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Warning from '../components/Warning'

const Select = styled.div`
    label {
        display: block;
        margin-bottom: 10px;
    }
`

function creategroup() {
    const {user} = useContext(AuthContext)
    const [myCourses, setMyCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)
    const router = useRouter()

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
                    setLoading(false)
                }
            } catch (error) {
                setLoading(false)
            }
        }

        fetchMyCourses()
    }, [])

    const createAgroup = async event => {
        event.preventDefault()
        setLoading(true)
        setErr(false)
        try {
            // fetch end point
            const res = await fetch(
                'http://localhost:5000/api/v1/groups/create',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': user.accessToken
                    },
                    body: JSON.stringify({
                        groupname: event.target.groupname.value,
                        course: event.target.course.value,
                        description: event.target.description.value
                    })
                }
            )
            if (res.status === 200) {
                // parse data
                router.push('/mygroups')
                setLoading(false)
            } else {
                setLoading(false)
                setErr(true)
            }
        } catch (error) {
            setLoading(false)
            setErr(true)
        }
    }


    return (
        <>
            <Head>
                <title>Create a group</title>
            </Head>
            <GroupStyle>
                <SideNav />
                <div className="container">
                    <main>
                            <h1>Create a group</h1>
                            {myCourses.length === 0 ? <p>You must take atleast one course to create a group</p> : <div className="cg-inner">
                                {err ? <Warning/> : ""}
                                {loading ? <Loading /> : <form className='form' onSubmit={createAgroup}>
                                    <Input maxwidth="100%" name="groupname" type="text" label="Group Name *" placeholder="e.g Tunisian Python Community"/>
                                    <Select>
                                        <label htmlFor="course">Course *</label>
                                        <select name="course" id="course" required>
                                            <option value="select" disabled selected>Select a course</option>
                                            {
                                                myCourses.map(mycourse => <option key={mycourse.id} value={`${mycourse.id}/${mycourse.title}`}>{mycourse.title}</option>)
                                            }
                                        </select>
                                    </Select>
                                    <TextArea width="100%" label="Description (Optional)" name="description" placeholder="This group is for students who started studying web dev through the JavaScript 101: Intro to Web Dev Course" />
                                    <Button text="Create group"/>
                                </form>}
                            </div> }
                    </main>
                    <aside className="suggested">
                        <h3>Suggested Groups</h3>
                        <GroupCard />
                    </aside>
                </div>
            </GroupStyle>
        </>
    )
}

export default withAuth(creategroup)