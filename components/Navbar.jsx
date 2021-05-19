import Header from '../styles/Navbar'
import Link from 'next/link'
import {useState} from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [logged, setLogged] = useState(false)

    return (
        <Header>
            <div className="container">
                <img src="nav/ham-menu.svg" className="mobile-menu" alt="Open Navigation" onClick={() => {setOpen(!open)}}/>
                <Link href="/"><a className="logo"><img src="nav/logo.svg" alt="Feynity logo" /></a></Link>
                {logged
                ? <nav className={`logged ${open && "menu-btn"}`}>
                    <img src="nav/close-nav.svg" className="mobile-menu-exit" alt="Close Navigation" onClick={() => {setOpen(!open)}}/>
                    <ul className="primary-nav">
                        <li>
                            <img src="nav/home-nav-mobile.png" alt="Home Icon" />
                            Home
                        </li>
                        <li>
                            <img src="nav/progress-nav.png" alt="Progress Icon" />
                            Progress
                        </li>
                        <li>
                            <img src="nav/my-activity-nav.png" alt="My Activity Icon" />
                            My Activity
                        </li>
                        <li>
                            <img src="nav/my-activity-nav.png" alt="My Activity Icon" />
                            Search
                        </li>
                    </ul>
                    <ul className="secondary-nav">
                        <li><span>1250 points</span></li>
                        <li>
                            <img src="nav/bell.png" alt="bell icon" />
                        </li>
                        <li>
                            <img src="nav/profile-pic.png" alt="profile picture" />
                        </li>
                        <li>
                            <img src="nav/drop.png" alt="dropdown icon" />
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