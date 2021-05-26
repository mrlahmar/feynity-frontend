import { useContext } from 'react'
import Head from 'next/head'
import SideNav from '../components/SideNav'
import Post from '../components/Post'
import ChallengeCard from '../components/ChallengeCard'
import GroupCard from '../components/GroupCard'
import { AuthContext } from '../context/AuthContext'
import ActivityStyle from '../styles/ActivityStyle'
import withAuth from '../auth/withAuth'

const myactivity = () => {
  const [isAuthed, setIsAuthed] = useContext(AuthContext)
  return (
    <>
        <Head>
            <title>My Activity</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <ActivityStyle>
            <SideNav />
            <div className="container">
                <main>
                    <h1>My Activity</h1>
                    <ChallengeCard marginbottom="30px"/>
                    <Post />
                    <Post />
                </main>
                <aside className="suggested">
                    <h3>Suggested Groups</h3>
                    <GroupCard marginbottom="15px"/>
                    <GroupCard />
                </aside>
            </div>
        </ActivityStyle>
    </>
  )
}

export default withAuth(myactivity)