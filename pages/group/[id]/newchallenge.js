import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import withAuth from '../../../auth/withAuth'
import Head from 'next/head'
import GroupSideNav from '../../../components/GroupSideNav'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Step from '../../../components/Step'
import TextArea from '../../../components/TextArea'
import GroupCard from '../../../components/GroupCard'
import GroupStyle from '../../../styles/GroupStyle'
import Group from '../../../utils/Group'


export const getStaticPaths = async () => {
    // fetch paths
    const res = await fetch('http://localhost:5000/api/v1/groups/getall')
    const groups = await res.json()

    const paths = groups.map(group => {
        return {
            params: {id: group.id.toString()}
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
    const res = await fetch(`http://localhost:5000/api/v1/groups/getById/${id}`)
    const group = await res.json()

    return {
        props: {group}
    }
}

function newchallenge({group}) {
    const {user} = useContext(AuthContext)
    const [owner, setOwner] = useState(false)
    const [joined, setJoined] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const initGroupFeed = async () => {
            // check if he's the owner
            if (group.creator === user.userData.email) {
                setOwner(true)
                setJoined(true)
                setLoading(false)
            } else {
                // check if joined the group
                await Group.checkJoined(group,user,setJoined,setLoading)
            }
        }

        initGroupFeed()
    }, [])

    return (
        <>
            <Head>
                <title>New Challenge</title>
            </Head>
            <GroupStyle>
                <GroupSideNav owner={owner} joined={joined} id={group.id} name={group.name} course={group.course} nmembers={group.number_of_members}/>
                <div className="container">
                    {joined ? <main>
                            <h1>New Challenge</h1>
                            <div className="cg-inner">
                                <form className='form' action="">
                                    <Input maxwidth="100%" name="challengename" type="text" label="Challenge Name *" placeholder="e.g Challenge X/Y"/>
                                    <Input maxwidth="100%" name="whotochallenge" type="text" label="Who to Challenge ? *" placeholder="e.g John Doe"/>
                                    <Input maxwidth="100%" name="duedate" type="date" label="Due Date *"/>
                                    <div className="steps">
                                        <label htmlFor="steps">Steps <span>  Add a step</span></label>
                                        <Step n="1" name="step1" placeholder="e.g Step 1"/>
                                        <Step n="2" name="step1" placeholder="e.g Step 2" />
                                    </div>
                                    <TextArea width="100%" height="100px" label="Edit Description" name="description" placeholder="This group is for students who started studying web dev through the JavaScript 101: Intro to Web Dev Course" />
                                    <Button text="Update"/>
                                </form>
                            </div>
                    </main> :
                    <main>
                        <h1>New Challenge</h1>
                        <p>You don't have the right to access this page</p>
                    </main> }
                    <aside className="suggested">
                        <h3>Suggested Groups</h3>
                        <GroupCard />
                    </aside>
                </div>
            </GroupStyle>
        </>
    )
}

export default withAuth(newchallenge)