import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import GroupSideStyle from '../styles/GroupSideNav'
import { AuthContext } from '../context/AuthContext'

const GroupSideNav = ({owner,joined,name,course,nmembers}) => {
    //const [isAuthed, setIsAuthed] = useContext(AuthContext)
    return (
        <GroupSideStyle className="primary-side">
            <Link href="/profile">
                <a>
                    <div className="group-box">
                        <a>
                            <h2>{name}</h2>
                            <p className="course">Based on <span>{course}</span></p>
                            <p className="nmembers">{nmembers} Members</p>
                        </a>
                    </div>
                </a>
            </Link>
            <ul>
                <li>
                    <Link href="/feed">
                        <a>
                            <img src="/group-side/group-feed.svg" alt="Group feed"/>
                            <span>Group Feed</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/addcourse">
                        <a>
                            <img src="/group-side/about-the-group.svg" alt="About the group"/>
                            <span>About the Group</span>
                        </a>
                    </Link>
                </li>
                {joined ?
                <><li>
                    <Link href="/addgroup">
                        <a>
                            <img src="/group-side/new-challenge.svg" alt="New challenge"/>
                            <span>New Challenge</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/mygroups">
                        <a>
                            <img src="/group-side/challenge-req.svg" alt="Challenge Requests"/>
                            <span>Challenge Requests</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/mychallenges">
                        <a>
                            <img src="/group-side/my-challenges.svg" alt="My Challenges"/>
                            <span>My Challenges</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/mycourses">
                        <a>
                            <img src="/group-side/all-members.svg" alt="All members"/>
                            <span>All Members</span>
                        </a>
                    </Link>
                </li> </>: "" }
                {
                    owner ? <li>
                        <Link href="/mycourses">
                            <a>
                                <img src="/group-side/group-settings.svg" alt="Group Settings"/>
                                <span>Group Settings</span>
                            </a>
                        </Link>
                    </li>
                    : <></>
                }
            </ul>
        </GroupSideStyle>
    )
}

export default GroupSideNav
