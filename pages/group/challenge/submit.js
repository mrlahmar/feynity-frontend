import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import withAuth from '../../../auth/withAuth'
import Head from 'next/head'
import SideNav from '../../../components/SideNav'
import Button from '../../../components/Button'
import StepSub from '../../../components/StepSub'
import Members from '../../../components/Members'
import GroupStyle from '../../../styles/GroupStyle'
import Req from '../../../styles/Req'

function submit() {
    return (
        <>
            <Head>
                <title>Challenge Submit</title>
            </Head>
            <GroupStyle>
                <SideNav />
                <div className="container">
                    <main>
                            <h1>Challenge Submit</h1>
                            <Req>
                                <div className="info">
                                    <div className="general">
                                        <h3>Challenge Name</h3>
                                        <p>Challenge X/Y</p>
                                        <h3>From</h3>
                                        <p>John Doe</p>
                                        <h3>Due Date</h3>
                                        <p>2021-10-01</p>
                                    </div>
                                    <div className="description">
                                        <h3>Description</h3>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatem atque vel et accusantium ut dolores ipsam aliquid natus ipsum?
                                    </div>
                                </div>
                                <div className="steps">
                                    <h3>Steps</h3>
                                    <StepSub n="1" text="Step 1: Complete Chapter 1"/>
                                    <StepSub n="2" text="Step 2: Code Generate Function"/>
                                </div>
                                <div className="btns">
                                    <Button marginbottom="0px" maxwidth="150px" text="Ignore" color="#ED694A" bgColor="#fff" borderColor="#ED694A"/>
                                    <Button marginbottom="0px" maxwidth="150px" text="Complete"/>
                                </div>
                            </Req>
                    </main>
                    <aside className="suggested">
                        <h3>Members</h3>
                        <Members />
                    </aside>
                </div>
            </GroupStyle>
        </>
    )
}

export default submit