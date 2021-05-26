import styled from 'styled-components'

const HomeStyle = styled.div`
    main h1 {
        font-size: 1.3em;
        margin-bottom: 20px;
    }

    @media (min-width: 1440px) {
        margin: 120px auto 0;
        max-width: 1440px;

        main {
            margin-left: 400px;
        }
    }
`

export default HomeStyle
