import styled from 'styled-components'
import SideNav from '../components/SideNav'
import GroupCard from '../components/GroupCard'
import Loading from '../components/Loading'
import Warning from '../components/Warning'
import Head from 'next/head'
import Link from 'next/link'
import withAuth from '../auth/withAuth'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

const GroupsStyle = styled.div`
    padding: 0 15px 0;

    main {
        margin: 100px auto 0px;
        .tag {
            margin-bottom: 15px;
        }
    }

    .my-groups .my-grp {
        display: grid;
        grid-template-columns: repeat(auto-fill, 330px);
        grid-gap: 15px;
    }

    @media (min-width: 1080px) {
        margin-top: 120px;
        main {
            margin-left: 400px;
        }
    }

    @media (min-width: 1440px) {
        main {
            margin: 120px auto 0 400px;
        }
        
        margin: 0 auto;
        padding: unset;
        width: 1440px;
    }

    .srch {
        color: #6573FF;
        display: block;
    }
`

const mygroups = () => {
    const {user} = useContext(AuthContext)
    const [myGroups, setMyGroups] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)

    useEffect(() => {
        const fetchMyGroups = async () => {
            try {
                // fetch end point
                const res = await fetch(
                    'http://localhost:5000/api/v1/groups/mygroups',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'x-auth-token': user.accessToken
                        }   
                    }
                )
                if (res.status === 200) {
                    // parse data
                    const mygroups = await res.json()
                    setMyGroups(mygroups)
                    setLoading(false)
                } else {
                    setErr(true)
                    setLoading(false)
                }
            } catch (error) {
                setErr(true)
                setLoading(false)
            }
        }

        fetchMyGroups()
    }, [])

    return (
        <>
            <Head>
                <title>My Groups</title>
            </Head>
            <GroupsStyle>
                <SideNav />
                <main>
                    <h4 className='tag'>My Groups</h4>
                    <div className="container">
                        <div className="my-groups">
                            <div className="my-grp">
                                {
                                    loading ? <Loading /> :
                                        myGroups.length === 0 && err
                                            ? <Warning />
                                            : myGroups.length === 0
                                                ? <p>You Haven't joined any course yet <span className="srch"><Link href='/search'><a>Create a group</a></Link></span></p>
                                                : myGroups.map(
                                                    mygroup => <GroupCard key={mygroup.id} id={mygroup.id} name={mygroup.name} coursename={mygroup.course} courseid={mygroup.courseid} nmembers={mygroup.number_of_members}/>
                                                )
                                }
                            </div>
                        </div>
                    </div>
                </main>
            </GroupsStyle>
        </>
    )
}

export default withAuth(mygroups)