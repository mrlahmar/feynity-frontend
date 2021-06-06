import styled from 'styled-components'

const Header = styled.header`
    width: 100%;
    height: 77px;
    background: white;
    padding: 1em;
    box-shadow: 0 0px 4px 0 rgba(0,0,0,.2);
    position: fixed;
    top: 0;

    .container {
        display: flex;
        align-items: center;
    } 

    @media (min-width: 1440px) {
        .container {
            margin: 0 auto;
            width: 1440px;
        }
    }

    .logo {
        display: flex;
        align-items: center;
    }

    .mobile-menu {
        cursor: pointer;
        margin-right: 15px;
    }

    // Yellow nav
    .notlogged {
        position: fixed;
        z-index: 99;
        width: 100%;
        left: 0;
        top: 0;
        background: #F8E7A8;
        height: 100vh;
        transform: translateX(-100%);
        transition: transform 0.5s linear;

        .mobile-menu-exit {
            float: left;
            margin: 1.5em 1em 1em 1em;
            cursor: pointer;
        }

        ul {
            margin-top: 90px;
            margin-left: calc(50vw - 80px);

            li {
                margin-bottom: 20px;
            }

            a {
                display: inline-block;
                text-align: center;
            }
        }

        .border {
            border: 2px var(--primary-color) solid;
        }
    }
    
    .notlogged.menu-btn {
        transform: translateX(0);
        transition: transform 0.5s linear; 
    }

    @media (min-width: 768px) {
        .mobile-menu, .mobile-menu-exit {
            display: none;
        }

        .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .notlogged {
            display: flex;
            position: unset;
            background: none;
            padding: 0;
            height: auto;
            width: auto;
            transform: unset;
            transition: unset;

            ul {
                display: flex;
                margin: 0;

                li {
                    margin-bottom: 0;
                }

                li:first-child {
                    margin-right: 1em;
                }
            }
        }

        .notlogged.menu-btn {
            transform: unset;
            transition: unset;
        }
    }

    // Logged

    .logged {
        position: fixed;
        z-index: 99;
        width: 100%;
        left: 0;
        top: 0;
        background: #F8E7A8;
        height: 100vh;
        transform: translateX(-100%);
        transition: transform 0.5s linear;

        .mobile-menu-exit {
            float: left;
            margin: 1.5em 1em 1em 1em;
            cursor: pointer;
        }

        ul {
            margin-top: 90px;
            margin-left: calc(50vw - 80px);

            li {
                margin-bottom: 20px;
            }

            a {
                display: inline-block;
                text-align: center;
            }
        }

        .border {
            border: 2px var(--primary-color) solid;
        }
    }
    
    .logged.menu-btn {
        transform: translateX(0);
        transition: transform 0.5s linear; 
    }

  
    .logged .primary-nav {
        margin-top: 50px;
        margin-left: calc(50vw - 80px);
        margin-bottom: 50px;

        li img {
            margin-right: 5px;
        }
    }

    .logged .secondary-nav {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        margin-left: 15px;

        li {
            margin-right: 15px;
        }

        .logout {
            display: flex;
            align-items: center;
            padding-bottom: 5px;
        }

        .logout:hover {
            cursor: pointer;
        }

        .logout span {
            color: #A2A2A2;
            font-weight: normal;
            margin-left: 8px;
        }

        span {
            color: #6573FF;
        }
    }

    @media (min-width: 768px) {
        .mobile-menu, .mobile-menu-exit {
            display: none;
        }

        .container {
            display: grid;
            grid-template-columns: 100px auto;
            justify-content: space-between;
        }

        .logged {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: unset;
            background: none;
            padding: 0;
            height: auto;
            width: 100%;
            transform: unset;
            transition: unset;

            ul {
                display: flex;
                margin: 0;

                li {
                    margin-bottom: 0;
                }

                li:first-child {
                    margin-right: 1em;
                }
            }
        }

        .logged.menu-btn {
            transform: unset;
            transition: unset;
        }
        

        .logged .primary-nav {
            display: flex;
            align-content: left;
            margin-top: unset;
            margin-left: 20px;
            margin-right: 20px;
            margin-bottom: unset;

            li {
                margin-right: 15px;
            }
            li:last-child {
                margin-right: 0;
            }

            li img {
                margin-right: 5px;
            }
        }

        .logged .secondary-nav {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: unset;
            margin-left: 15px;

            li {
                margin-right: 15px;
            }

            span {
                color: #6573FF;
                font-weight: bold;
            }
        }
    }

    @media (min-width: 1080px) {
        .logged .primary-nav {
            margin-right: 150px;
        }
    }

    @media (min-width: 1440px) {
        .logged .primary-nav {
            margin-right: 250px;
        }
    }

    .profilepic {
        border-radius: 50%;
        max-width: 35px;
    }
`

export default Header