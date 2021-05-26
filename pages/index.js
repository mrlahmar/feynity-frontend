import { useContext } from 'react'
import Head from 'next/head'
import HomePage from '../components/HomePage'
import SideNav from '../components/SideNav'
import Post from '../components/Post'
import { AuthContext } from '../context/AuthContext'
import HomeStyle from '../styles/IndexStyles/HomeStyle'

export default function Home() {
  const [isAuthed, setIsAuthed] = useContext(AuthContext)
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* isAuthed.authed  */ true
      ? <HomeStyle>
          <SideNav />
          <main>
            <h1>Feed</h1>
            <Post />
          </main>
          <div className="suggested">
            {/* <h3>Suggested Groups</h3> */}
          </div>
        </HomeStyle>
      : <HomePage />}
    </>
  )
}
