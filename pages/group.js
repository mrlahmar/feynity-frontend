import { useContext } from 'react'
import Head from 'next/head'
import GroupSideNav from '../components/GroupSideNav'
import Post from '../components/Post'
import Members from '../components/Members'
import PostForm from '../components/PostForm'
import { AuthContext } from '../context/AuthContext'
import GroupStyle from '../styles/GroupStyle'

export default function group() {
    
  return (
    <>
        <Head>
            <title>Group N</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <GroupStyle>
            <GroupSideNav />
            <div className="container">
                <main>
                    <PostForm marginbottom="15px"/>
                    <h1>Feed</h1>
                    <Post />
                    <Post />
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