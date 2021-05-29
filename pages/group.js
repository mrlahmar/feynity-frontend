import { useContext } from 'react'
import Head from 'next/head'
import GroupSideNav from '../components/GroupSideNav'
import Post from '../components/Post'
import GroupCard from '../components/GroupCard'
import PostForm from '../components/PostForm'
import { AuthContext } from '../context/AuthContext'
import GroupStyle from '../styles/GroupStyle'

export default function group() {
  const [isAuthed, setIsAuthed] = useContext(AuthContext)
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
                    <h3>Suggested Groups</h3>
                    <GroupCard />
                </aside>
            </div>
        </GroupStyle>
    </>
  )
}