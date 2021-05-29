import styled from 'styled-components'

const GroupSideStyle = styled.aside`
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

    .group-box {
        display: flex;
        align-items: center;
        border: 3px #6573FF solid;
        border-radius: 20px;
        background-color: transparent;
        padding: 13px 15px;
        margin-bottom: 35px;
        margin-top: 10px;

        a {
            margin-left: 1em;
        }

        h2 {
            color: #6573FF;
            margin: 0 0 10px 0;
        }

        .course {
            margin-bottom: 10px;
            span {
                color: #6573FF;
            }
        }

        .nmembers {
            font-size: 15px;
            font-weight: bold;
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

export default GroupSideStyle