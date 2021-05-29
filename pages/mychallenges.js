import { useContext } from 'react'
import Head from 'next/head'
import SideNav from '../components/SideNav'
import InviteCard from '../components/InviteCard'
import ChallengeCard from '../components/ChallengeCard'
import GroupCard from '../components/GroupCard'
import { AuthContext } from '../context/AuthContext'
import GroupStyle from '../styles/GroupStyle'
import withAuth from '../auth/withAuth'

const mychallenges = () => {
  const [isAuthed, setIsAuthed] = useContext(AuthContext)
  return (
    <>
        <Head>
            <title>My Challenges</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <GroupStyle>
            <SideNav />
            <div className="container">
                <main>
                    <h1>My Challenges</h1>
                    <div className="cg-inner">
                        <ChallengeCard marginbottom="30px"/>
                        <ChallengeCard marginbottom="30px"/>
                        <ChallengeCard marginbottom="30px"/>
                    </div>
                </main>
                <aside className="invite">
                    <h3>Invitations</h3>
                    <InviteCard />
                </aside>
            </div>
        </GroupStyle>
    </>
  )
}

export default mychallenges