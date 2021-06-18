import { useContext, useState, useEffect } from 'react'
import Head from 'next/head'
import GroupSideNav from '../../../components/GroupSideNav'
import GroupCard from '../../../components/GroupCard'
import { AuthContext } from '../../../context/AuthContext'
import GroupStyle from '../../../styles/GroupStyle'
import AboutGroup from '../../../components/AboutGroup'
import Group from '../../../utils/Group'
import withAuth from '../../../auth/withAuth'


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


function about({group}) {
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
            <title>About {group.name} </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <GroupStyle>
            <GroupSideNav owner={owner} joined={joined} id={group.id} name={group.name} course={group.course} nmembers={group.number_of_members} />
            <div className="container">
                <main>
                    <h1>About</h1>
                    <AboutGroup text={group.description} />
                </main>
            </div>
        </GroupStyle>
    </>
  )
}

export default withAuth(about)