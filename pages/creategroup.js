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

const Select = styled.div`
    label {
        display: block;
        margin-bottom: 10px;
    }

    select {
        margin-bottom: 15px;
    }
`

function creategroup() {
    const {user} = useContext(AuthContext)
    const [myCourses, setMyCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)

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
                    setErr(true)
                    setLoading(false)
                }
            } catch (error) {
                setErr(true)
                setLoading(false)
            }
        }

        fetchMyCourses()
    }, [])

    const createAgroup = async event => {
        event.preventDefault()
        console.log("Ahla")
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
                            <div className="cg-inner">
                                {loading ? <Loading /> :<form className='form' onSubmit={createAgroup}>
                                    <Input maxwidth="100%" name="groupname" type="text" label="Group Name *" placeholder="e.g Tunisian Python Community"/>
                                    {myCourses.length === 0 ? <p>You must take a course to create a group</p>:
                                    <Select>
                                        <label htmlFor="course">Course *</label>
                                        <select name="course" id="course" required>
                                            <option value="select" disabled selected>Select a course</option>
                                            {
                                                myCourses.map(mycourse => <option key={mycourse.id} value={mycourse.id}>{mycourse.title}</option>)
                                            }
                                            {/* Forget about err and no courses took (verification )*/}
                                        </select>
                                    </Select>}
                                    <TextArea width="100%" label="Description (Optional)" name="description" placeholder="This group is for students who started studying web dev through the JavaScript 101: Intro to Web Dev Course" />
                                    <Button text="Create group"/>
                                </form>}
                            </div>
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

export default creategroup