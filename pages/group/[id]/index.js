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
import { useRouter } from 'next/router'
import Group from '../../../utils/Group'
import Warning from '../../../components/Warning'

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
    const [wentWrong, setWentWrong] = useState(false)
    const [wentWrongLeave, setWentWrongLeave] = useState(false)
    const [joined, setJoined] = useState(false)
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const router = useRouter()

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

            // if (joined) {
            //     await Group.fetchFeed(user,group,setPosts,setLoading)
            // }
            await Group.fetchFeed(user,group,setPosts,setLoading)
        }

        initGroupFeed()
    }, [])

    const joinGroup = async () => {
        await Group.joinGroup(router,user,group,setJoined,setLoading,setWentWrong)
    }

    const leaveGroup = async () => {
        await Group.leaveGroup(router,user,group,setWentWrongLeave)
    }

    const addPost = async event => {
        event.preventDefault()
        setLoading(true)
        
        try {
            // fetch endpoint
            const res = await fetch(
                'http://localhost:5000/api/v1/posts/create',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': user.accessToken
                    },
                    body: JSON.stringify({
                        title: event.target.posttitle.value,
                        content: event.target.postcontent.value,
                        group: group.name,
                        groupid: group.id
                    })
                }
            )
        
            // parse to json
            const post = await res.json()
    
            // post added successfully
            if(res.status === 200) {
                setLoading(false)
                router.reload(`/`)
            } else {
                //bad request
                setLoading(false)
            }
            
        } catch (error) {
            // Error occured during adding post
            setLoading(false)
        }
    }

    return (
        <>
            <Head>
                <title>{group.name}</title>
            </Head>
            <GroupStyle>
                <GroupSideNav owner={owner} joined={joined} id={group.id} name={group.name} course={group.course} nmembers={group.number_of_members}/>
                <div className="container">
                    <main>
                        {wentWrong ? <Warning msg="You must take the course first"/>: ""}
                        {loading ? <Loading/> : 
                                joined ?  
                                <>
                                    <PostForm onSubmit={addPost} marginbottom="15px"/>
                                    <h1>Feed</h1>
                                    {posts.map(post => <Post key={post.id} id={post.id} owner={user.userData.email === post.author} author={post.author} posttime={post.posttime} content={post.content} title={post.title} group={post.group}/>)}
                                </>
                                : 
                                <Div>
                                    <p>You have to join the Group before seeing the posts</p>
                                    <Button text="Join the Group" onClick={joinGroup}/>
                                </Div>}
                    </main>
                    {joined && !owner? <aside className="suggested">
                        <h3>Options</h3>
                        {wentWrongLeave ? <Warning/> : ""}
                        <Button text="Leave Group" color="#ED694A" bgColor="#fff" borderColor="#ED694A" minwidth="250px" onClick={leaveGroup}/>
                    </aside> : "" }
                </div>
            </GroupStyle>
        </>
    )
}

export default withAuth(group)
