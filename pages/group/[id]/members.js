import { useContext, useState, useEffect } from 'react'
import Head from 'next/head'
import GroupSideNav from '../../../components/GroupSideNav'
import Loading from '../../../components/Loading'
import { AuthContext } from '../../../context/AuthContext'
import GroupStyle from '../../../styles/GroupStyle'
import Group from '../../../utils/Group'
import withAuth from '../../../auth/withAuth'
import Member from '../../../components/Member'
import styled from 'styled-components'

const Members = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 320px);
    grid-gap: 5px;
`

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


function members({group}) {
    const {user} = useContext(AuthContext)
    const [owner, setOwner] = useState(false)
    const [joined, setJoined] = useState(false)
    const [loading, setLoading] = useState(true)
    const [allMembers, setAllMembers] = useState([])

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

            await Group.fetchMembers(group,user,setAllMembers,setLoading)
        }

        initGroupFeed()
    }, [])

  return (
    <>
        <Head>
            <title>Members of {group.name} </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <GroupStyle>
            <GroupSideNav owner={owner} joined={joined} id={group.id} name={group.name} course={group.course} nmembers={group.number_of_members} />
            <div className="container">
                {joined ? <main>
                    <h1>Members</h1>
                    {loading ? <Loading /> : <Members>
                        { allMembers.map(member => <Member key={member.id} name={member.name} groupid={group.id}/>) }
                    </Members>}
                </main> : 
                <main>
                    <h1>Members</h1>
                    <p>You don't have the right to access this page</p>
                </main> }
            </div>
        </GroupStyle>
    </>
  )
}

export default withAuth(members)