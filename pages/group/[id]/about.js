import { useContext } from 'react'
import Head from 'next/head'
import GroupSideNav from '../../../components/GroupSideNav'
import Post from '../../../components/Post'
import GroupCard from '../../../components/GroupCard'
import PostForm from '../../../components/PostForm'
import { AuthContext } from '../../../context/AuthContext'
import GroupStyle from '../../../styles/GroupStyle'
import AboutGroup from '../../../components/AboutGroup'

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


export default function about({group}) {
  return (
    <>
        <Head>
            <title>About {group.name} </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <GroupStyle>
            <GroupSideNav />
            <div className="container">
                <main>
                    <h1>About</h1>
                    <AboutGroup text={group.description} />
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