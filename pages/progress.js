import React from 'react'
import Head from 'next/head'
import ProgressStyle from '../styles/Progress'
import SideNav from '../components/SideNav'
import ProgressCard from '../components/ProgressCard'
import withAuth from '../auth/withAuth'

const progress = () => {
    return (
        <>
            <Head>
                <title>My Progress</title>
            </Head>
            <ProgressStyle>
                <SideNav />
                <main>
                    <h3>My Progress</h3>
                    <div className="inner-container">
                        <div className="stats">
                            <p className="points">1400 points</p>
                            <p className="level">Intermediate Level</p>
                        </div>
                        <div className="progress-cards">
                            <ProgressCard />
                            <ProgressCard />
                            <ProgressCard />
                        </div>
                    </div>
                </main>
            </ProgressStyle>
        </>
    )
}

export default withAuth(progress)
