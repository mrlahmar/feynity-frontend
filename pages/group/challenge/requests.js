import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import withAuth from '../../../auth/withAuth'
import Head from 'next/head'
import SideNav from '../../../components/SideNav'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import StepReq from '../../../components/StepReq'
import TextArea from '../../../components/TextArea'
import GroupCard from '../../../components/GroupCard'
import GroupStyle from '../../../styles/GroupStyle'
import Req from '../../../styles/Req'

function requests() {
    const [isAuthed, setIsAuthed] = useContext(AuthContext)
    return (
        <>
            <Head>
                <title>Challenge Requests</title>
            </Head>
            <GroupStyle>
                <SideNav />
                <div className="container">
                    <main>
                            <h1>Challenge Requests</h1>
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
                                    <StepReq n="1" text="Step 1: Complete Chapter 1"/>
                                    <StepReq n="2" text="Step 2: Code Generate Function"/>
                                </div>
                                <div className="btns">
                                    <Button marginbottom="0px" maxwidth="150px" text="Ignore" color="#ED694A" bgColor="#fff" borderColor="#ED694A"/>
                                    <Button marginbottom="0px" maxwidth="150px" text="Accept"/>
                                </div>
                            </Req>
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

export default requests