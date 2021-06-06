import styled from 'styled-components'

const ProfileStyle = styled.div`
    margin-top: 120px;

    main {
        width: 100%;
        max-width: 350px;
        margin: 0px auto 0px;
        padding-right: 15px;
        padding-left: 15px;
        display: grid;
        justify-content: center;

        h1 {
            margin-bottom: 15px;
        }

        img {
            margin-bottom: 15px;
            max-width: 150px;
        }
    }

    @media (min-width: 400px) {
        .container {
            padding: unset;
        }
    }

    @media (min-width: 1080px) {
        margin: 0 10px;
        width: 100%;
        overflow-x: hidden;
        margin-top: 120px;

        main {
            display: block;
            margin: unset;
            margin-left: 400px;
            max-width: calc(100% - 450px);

            .inner {
                display: grid;
                grid-template-columns: repeat(auto-fill, 350px);
                grid-column-gap: 25px;
            }
        }
    }

    @media (min-width: 1440px) {
        margin: 0 auto;
        margin-top: 120px;
        width: 1440px;
    } 


    .profilepic {
        border-radius: 50%;
    }
`

export default ProfileStyle