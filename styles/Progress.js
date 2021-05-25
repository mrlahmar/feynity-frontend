import styled from 'styled-components'

const ProgressStyle = styled.div`
    padding: 0 15px;

    main {
        margin-left: auto;
        margin-right: auto;

        h3 {
            margin-bottom: 20px;
        }
    }

    main .inner-container {
        .stats {
            margin-bottom: 25px;

            .points, .level {
                font-size: 2em;
                font-weight: bold;
            }
        }
    }

    .info-progress progress[value] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: #fff;
        border: 1px solid #5DC39E;
        border-radius: 8px;
    }

    .info-progress progress[value]::-webkit-progress-bar {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: #fff;
        border: 1px solid #5DC39E;
        border-radius: 8px;
    }

    .info-progress progress[value]::-moz-progress-bar {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: #5DC39E;
        border: 2px solid #5DC39E;
        border-radius: 8px;
    }

    .info-progress progress[value]::-webkit-progress-value , .info-progress progress[value]::-moz-progress-value {
        background-color: #5DC39E;
        border-radius: 1px;
    }


    .progress-cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, 450px);
        grid-column-gap: calc(100% - 900px);
        grid-row-gap: 25px;
    }

    @media (min-width: 1080px) {   
        margin: 120px auto 0;

        main {
            margin-left: 400px;
        }

        .stats {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    @media (min-width: 1440px) {
        max-width: 1440px;
        padding: unset;
    }
`

export default ProgressStyle
