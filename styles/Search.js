import styled from 'styled-components'

const StyledSearch = styled.div`
    margin: 100px auto 0px;
    padding: 0 10px;

    main {
        margin-left: auto;
        margin-right: auto;

        .tag {
            font-size: 1.2em;
            margin-bottom: 20px;
        }
    }

    .results {
        p {
            margin-bottom: 20px;
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fill, 330px);
            grid-gap: 15px;
        }
    }

    @media (min-width: 1080px) {

        margin-top: 120px;

        .logged {
            margin-left: 400px;
        }

        .results p {
            margin-bottom: 40px;
        }
    }

    @media (min-width: 1440px) {
        max-width: 1440px;
        padding: unset;
    }

    .fetcherr {
        color: red;
    }
`

export default StyledSearch
