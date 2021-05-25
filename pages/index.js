import { useContext } from 'react'
import Head from 'next/head'
import HomePage from '../components/HomePage'
import { AuthContext } from '../context/AuthContext'

export default function Home() {
  const [isAuthed, setIsAuthed] = useContext(AuthContext)
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* { isAuthed.authed  */ true
      ? <main>
        
      </main>
      : <HomePage />}
    </>
  )
}
