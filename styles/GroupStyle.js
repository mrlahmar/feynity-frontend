import styled from 'styled-components'

const GroupStyle = styled.div`
    main h1 {
        font-size: 1.3em;
        margin-bottom: 20px;
    }

    padding: 0 10px;

    .suggested {
        display: none;
    }

    .invite {
        h3 {
            margin-bottom: 20px;
        }
    }

    main {
        display: grid;
        justify-content: center;
    }

    @media (min-width: 1150px) {
        .container {
            display: flex;
            justify-content: space-between;
        }

        .suggested {
            h3 {
                margin-bottom: 20px;
            }

            display: unset;
            margin-right: 10px;
            margin-left: 15px;
        }
    }

    @media (min-width: 1080px) {
        margin: 120px auto 0;

        main {
            margin-left: 400px;
            display: block;
        }
        
        .cg-inner {
            width: 690px;
        }

        .invite {
            margin-left: 400px;
        }
    }

    @media (min-width: 1440px) {
        max-width: 1440px;
        padding: unset;

        .container {
            display: flex;
            justify-content: space-between;
        }

        .suggested {
            h3 {
                margin-bottom: 20px;
            }

            display: unset;
            position: fixed;
            right: calc((100% - 1440px) / 2);
        }
        
        .invite {
            position: fixed;
            right: calc((100% - 1440px) / 2);
        }
    }
`

export default GroupStyle
