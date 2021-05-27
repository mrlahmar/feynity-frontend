import styled from 'styled-components'
import SideNav from '../components/SideNav'
import GroupCard from '../components/GroupCard'
import Head from 'next/head'
import withAuth from '../auth/withAuth'

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
`

const mygroups = () => {
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
                                <GroupCard />
                                <GroupCard />
                                <GroupCard />
                            </div>
                        </div>
                    </div>
                </main>
            </GroupsStyle>
        </>
    )
}

export default withAuth(mygroups)