import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import SideStyle from '../styles/SideNav'
import { AuthContext } from '../context/AuthContext'

const SideNav = () => {
    const [isAuthed, setIsAuthed] = useContext(AuthContext)
    return (
        <SideStyle className="primary-side">
            <Link href="/profile">
                <a>
                    <div className="profile-box">
                        <img src="side-nav/profile-side.png" alt="Profile pic"/>
                            <a>
                                <p>{isAuthed.user.learner.name}</p>
                                <p>Edit profile</p>
                            </a>
                    </div>
                </a>
            </Link>
            <ul>
                <li>
                    <Link href="/addcourse">
                        <a>
                            <img src="side-nav/create-group.svg" alt="Add a course"/>
                            <span>Add a course</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/addgroup">
                        <a>
                            <img src="side-nav/create-group.svg" alt="Create a group"/>
                            <span>Create a group</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/mygroups">
                        <a>
                            <img src="side-nav/my-groups.svg" alt="My Groups"/>
                            <span>My Groups</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/mycourses">
                        <a>
                            <img src="side-nav/my-courses.svg" alt="My Courses"/>
                            <span>My Courses</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/mychallenges">
                        <a>
                            <img src="side-nav/my-challenges.svg" alt="My Challenges"/>
                            <span>My Challenges</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </SideStyle>
    )
}

export default SideNav
