import { useContext, useState, useEffect } from 'react'
import Head from 'next/head'
import HomePage from '../components/HomePage'
import SideNav from '../components/SideNav'
import Post from '../components/Post'
import Loading from '../components/Loading'
import GroupCard from '../components/GroupCard'
import { AuthContext } from '../context/AuthContext'
import HomeStyle from '../styles/IndexStyles/HomeStyle'
import fetchFeed from '../utils/Home'

export default function Home() {
  const {isAuthenticated, user} = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState(true)

  useEffect(() => {
    if (isAuthenticated) {
      fetchFeed(user,setLoading,setPosts)
    }  
  }, [])
  
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isAuthenticated
      ? <HomeStyle>
          <SideNav />
          <div className="container">
            <main>
              <h1>Feed</h1>
              {loading 
                ? <Loading /> 
                : posts.map(post => <Post key={post.id} id={post.id} owner={user.userData.email === post.author} author={post.author} posttime={post.posttime} content={post.content} title={post.title} group={post.group}/>)
              }
            </main>
            <aside className="suggested">
              <h3>Suggested Groups</h3>
              <GroupCard />
            </aside>
          </div>
        </HomeStyle> 
      : <HomePage />}
    </>
  )
}
