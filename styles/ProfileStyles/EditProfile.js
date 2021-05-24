import styled from 'styled-components'

const ProfileStyle = styled.div`
    margin-top: 100px;

    main {
        width: 100%;
        max-width: 350px;
        margin: 0px auto 0px;
        padding-right: 15px;
        padding-left: 15px;

        h1 {
            margin-bottom: 15px;
        }

        img {
            margin-bottom: 15px;
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
        display: flex;
        justify-content: space-between;
        overflow-x: hidden;
        margin-top: 100px;

        main {
            margin: unset;
            margin-left: 400px;
            max-width: calc(100% - 400px);

            .inner {
                display: grid;
                grid-template-columns: repeat(auto-fill, 350px);
                grid-column-gap: 25px;
            }
        }
    }

    @media (min-width: 1440px) {
        margin: 0 auto;
        margin-top: 100px;
        width: 1440px;
    } 
`

export default ProfileStyle