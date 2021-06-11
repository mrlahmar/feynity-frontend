import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import withAuth from '../../../auth/withAuth'
import Head from 'next/head'
import GroupSideNav from '../../../components/GroupSideNav'
import Button from '../../../components/Button'
import Warning from '../../../components/Warning'
import GroupCard from '../../../components/GroupCard'
import GroupStyle from '../../../styles/GroupStyle'
import { useRouter } from 'next/router'


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
    const [wentWrong, setWentWrong] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const initGroupFeed = async () => {
            // check if he's the owner
            if (group.creator === user.userData.email) {
                setOwner(true)
            }
        }

        initGroupFeed()
    }, [])

    const deleteGroup = async _ => {
        setWentWrong(false)
        try {
            // fetch end point
            const res = await fetch(
                'http://localhost:5000/api/v1/groups/delete',
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': user.accessToken
                    },
                    body: JSON.stringify({
                        'groupid': group.id,
                        'groupcreator': group.creator
                    })
                }
            )

            if (res.status === 200) {
                // parse data
                router.push(`/mygroups`)
            } else {
                setWentWrong(true)
            }
        } catch (error) {
            setWentWrong(true)
        }
    }

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
                            {owner ? 
                            <div className="cg-inner">
                                {wentWrong ? <Warning msg="Error Deleting the group"/>: ""}
                                <Button text="Delete the group" color="#ED694A" bgColor="#fff" borderColor="#ED694A" onClick={deleteGroup}/>
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