import styled from 'styled-components'

const Req = styled.div`
    background-color: white;
    border: 2px solid #6573FF;
    border-radius: 10px;
    width: 100%;
    padding: 20px;

    h3 {
        font-size: 1.1em;
        margin-bottom: 5px;
    }

    .info {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 25px;

        .general {
            flex: 1;
            margin-right: 50px;
            
            p{
                margin-bottom: 10px;
            }
        }

        .description {
            flex: 1;
        }
    }
    
    .steps {
        margin-bottom: 25px;
    }

    .btns {
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
    }

    @media (min-width: 1080px) {
        width: 690px;
    }
`

export default Req