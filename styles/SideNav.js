import styled from 'styled-components'

const SideStyle = styled.aside`
    width: 100%;
    max-width: 350px;
    margin: 100px auto 70px;
    padding: 10px;

    ul {
        list-style: none;

        li {
            margin-bottom: 22px;
        }

        a {
            display: flex;
            align-items: center;

            span {
                margin-left: 1em;
            }
        }
    }

    .profile-box {
        display: flex;
        align-items: center;
        border: 3px #6573FF solid;
        border-radius: 20px;
        background-color: transparent;
        padding: 13px 130px 13px 15px;
        margin-bottom: 35px;
        margin-top: 10px;

        img {
            border-radius: 50%;
            margin-right: .7em;
        }

        a {
            margin-left: 1em;
        }

        p:first-child {
            font-size: 20px;
            color: #6573FF;
            margin: 0;
        }

        p:nth-child(2) {
            font-size: 15px;
            margin: 0;
        }
    }
    


    @media (min-width: 400px) {
        padding: unset;
    }

    @media (min-width: 786px) {
        display: block;
        margin: 100px unset 40px;
        
    }

    @media (min-width: 1080px) {
        margin: unset;
        position: fixed;

        .show-menu {
            display: none;
        }
    }
`

export default SideStyle