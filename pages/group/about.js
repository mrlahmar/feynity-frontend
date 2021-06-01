import { useContext } from 'react'
import Head from 'next/head'
import GroupSideNav from '../../components/GroupSideNav'
import Post from '../../components/Post'
import GroupCard from '../../components/GroupCard'
import PostForm from '../../components/PostForm'
import { AuthContext } from '../../context/AuthContext'
import GroupStyle from '../../styles/GroupStyle'
import AboutGroup from '../../components/AboutGroup'

export default function about() {
  return (
    <>
        <Head>
            <title>About Group</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <GroupStyle>
            <GroupSideNav />
            <div className="container">
                <main>
                    <h1>About</h1>
                    <AboutGroup text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus aut ipsa perferendis, ad harum quas quia aliquid magnam ipsam exercitationem iste, aperiam voluptatum culpa vitae cum officiis odit libero?" />
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