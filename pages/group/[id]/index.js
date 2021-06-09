import React, { useContext, useState, useEffect } from 'react'
import Head from 'next/head'
import GroupSideNav from '../../../components/GroupSideNav'
import Post from '../../../components/Post'
import Members from '../../../components/Members'
import PostForm from '../../../components/PostForm'
import { AuthContext } from '../../../context/AuthContext'
import GroupStyle from '../../../styles/GroupStyle'
import withAuth from '../../../auth/withAuth'
import Loading from '../../../components/Loading'
import Button from '../../../components/Button'
import styled from 'styled-components'

const Div = styled.div`
    p {
        margin-bottom: 10px;
    }
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

const group = ({group}) => {
    const {user} = useContext(AuthContext)
    const [owner, setOwner] = useState(false)
    const [joined, setJoined] = useState(false)
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)

    const joinGroup = async () => {
        setLoading(true)
        try {
            // fetch end point
            const res = await fetch(
                'http://localhost:5000/api/v1/groups/join',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': user.accessToken
                    },
                    body: JSON.stringify({
                        'groupid': group.id
                    })
                }
            )

            const data = await res.json()

            if (res.status === 200 && data.joined === true) {
                // parse data
                setJoined(true)
                setLoading(false)
            } else {
                setJoined(false)
                setLoading(false)
            }
        } catch (error) {
            setJoined(false)
            setLoading(false)
        }
    }
    
    useEffect(() => {
        // check joined function
        const checkJoined = async () => {
            try {
                // fetch end point
                const res = await fetch(
                    'http://localhost:5000/api/v1/groups/checkJoined',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'x-auth-token': user.accessToken
                        },
                        body: JSON.stringify({
                            'groupid': group.id
                        })
                    }
                )

                const data = await res.json()

                if (res.status === 200 && data.joined === true) {
                    // parse data
                    setJoined(true)
                    setLoading(false)
                } else {
                    setJoined(false)
                    setLoading(false)
                }
            } catch (error) {
                setJoined(false)
                setLoading(false)
            }
        }

        const fetchPosts = async () => {
            
            // check owner
            if (group.creator === user.userData.email) {
                setOwner(true)
                setJoined(true)
                setLoading(false)
            } else {
                checkJoined()
            }

            // fetch posts
            /*if (owner === true || joined === true) {

            }*/
        }

        fetchPosts()
    }, [])

    return (
        <>
            <Head>
                <title>{group.name}</title>
            </Head>
            <GroupStyle>
                <GroupSideNav owner={owner} name={group.name} course={group.course} nmembers={group.number_of_members}/>
                <div className="container">
                    <main>
                        {loading ? <Loading/> : joined ?  <><PostForm marginbottom="15px"/>
                                    <h1>Feed</h1>
                                    <Post />
                                    <Post /></>
                                : <Div>
                                    <p>You have to join the Group to see the content</p>
                                    <Button text="Join Group" onClick={joinGroup}/>
                                </Div>}
                    </main>
                    <aside className="suggested">
                        <h3>Members</h3>
                        <Members />
                    </aside>
                </div>
            </GroupStyle>
        </>
    )
}

export default withAuth(group)
