import Header from '../styles/Navbar'
import Link from 'next/link'
import {useContext, useState} from 'react'
import {AuthContext} from '../context/AuthContext'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isAuthed, setIsAuthed] = useContext(AuthContext);

    return (
        <Header>
            <div className="container">
                <img src="nav/ham-menu.svg" className="mobile-menu" alt="Open Navigation" onClick={() => {setOpen(!open)}}/>
                <Link href="/"><a className="logo"><img src="nav/logo.svg" alt="Feynity logo" /></a></Link>
                {isAuthed.authed
                ? <nav className={`logged ${open && "menu-btn"}`}>
                    <img src="nav/close-nav.svg" className="mobile-menu-exit" alt="Close Navigation" onClick={() => {setOpen(!open)}}/>
                    <ul className="primary-nav">
                        <li>
                            <Link href="/">
                                <a>
                                    <img src="nav/home-nav-mobile.png" alt="Home Icon" />
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/progress">
                                <a>
                                    <img src="nav/progress-nav.png" alt="Progress Icon" />
                                    Progress
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/myactivity">
                                <a>
                                    <img src="nav/my-activity-nav.png" alt="My Activity Icon" />
                                    My Activity
                                </a>
                            </Link>   
                        </li>
                        <li>
                            <Link href="/search">
                                <a>
                                    <img src="nav/search.png" alt="My Activity Icon" />
                                    Search
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <ul className="secondary-nav">
                        <li><span>{isAuthed.user.learner.points} points</span></li>
                        <li>
                            <img src="nav/bell.png" alt="bell icon" />
                        </li>
                        <li>
                            <img className='profilepic' src="nav/profile-pic.png" alt="profile picture" />
                        </li>
                        <li className='logout' onClick={() => {setIsAuthed({authed: false, user: {}}); localStorage.removeItem('accessToken')}}>
                            <img src="nav/logout.png" alt="logout icon"/>
                            <span>Log out</span>
                        </li>
                    </ul>
                  </nav>
                : <nav className={`notlogged ${open && "menu-btn"}`}>
                    <img src="nav/close-nav.svg" className="mobile-menu-exit" alt="Close Navigation" onClick={() => {setOpen(!open)}}/>
                    <ul>
                        <li><Link href="/signin"><a className="secondary-btn">Log In</a></Link></li>
                        <li><Link href="/signup"><a className="primary-btn border">Join for Free</a></Link></li>
                    </ul>
                  </nav>
                }
            </div>
        </Header>
    )
}

export default Navbar