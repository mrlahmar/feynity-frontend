import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import withAuth from '../../../auth/withAuth'
import Head from 'next/head'
import GroupSideNav from '../../../components/GroupSideNav'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import TextArea from '../../../components/TextArea'
import GroupCard from '../../../components/GroupCard'
import GroupStyle from '../../../styles/GroupStyle'


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


function settings({group}) {
    const {user} = useContext(AuthContext)
    const [owner, setOwner] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const initGroupFeed = async () => {
            // check if he's the owner
            if (group.creator === user.userData.email) {
                setOwner(true)
                setLoading(false)
            }
        }

        initGroupFeed()
    }, [])

    return (
        <>
            <Head>
                <title>Group Settings</title>
            </Head>
            <GroupStyle>
                <GroupSideNav owner={owner} joined={owner} id={group.id} name={group.name} course={group.course} nmembers={group.number_of_members}/>
                <div className="container">
                    <main>
                            <h1>Group Settings</h1>
                            {owner ? <div className="cg-inner">
                                <form className='form' action="">
                                    <Input maxwidth="100%" name="groupname" type="text" label="Edit Group Name *" placeholder="e.g Tunisian Python Community"/>
                                    <Input maxwidth="100%" name="coursetitle" type="text" label="Edit Course Title *" placeholder="e.g Python for Everyone"/>
                                    <TextArea width="100%" label="Edit Description" name="description" placeholder="This group is for students who started studying web dev through the JavaScript 101: Intro to Web Dev Course" />
                                    <Button text="Update"/>
                                </form>
                            </div> : 
                            <div>
                                <p>You don't have the right to access this page</p>
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

export default withAuth(settings)