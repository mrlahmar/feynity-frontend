import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import SideStyle from '../styles/SideNav'

const SideNav = () => {
    return (
        <SideStyle className="primary-side">
            <div className="profile-box">
                <img src="side-nav/profile-side.png" alt="Profile pic"/>
                <Link href="/profile">
                    <a>
                        <p>John Doe</p>
                        <p>Edit profile</p>
                    </a>
                </Link>
            </div>
            <ul>
                <li>
                    <Link href="/">
                        <a>
                            <img src="side-nav/create-group.svg" alt="Create a group"/>
                            <span>Create a group</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            <img src="side-nav/my-groups.svg" alt="My Groups"/>
                            <span>My Groups</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            <img src="side-nav/my-courses.svg" alt="My Courses"/>
                            <span>My Courses</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
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
