import styled from 'styled-components'

const AddCourse = styled.div`
    main {
        width: 100%;
        max-width: 350px;
        margin: 10px auto 0px;
        padding-right: 15px;
        padding-left: 15px;
        
        h1 {
            margin-bottom: 1em;
        }
    }

    label {
        display: block;
    }

    @media (min-width: 768px) {
        margin-top: 100px;
    }

    @media (min-width: 1080px) {
        margin: 0 10px;
        width: 100%;
        overflow-x: hidden;
        margin-top: 100px;

        main {
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
        margin-top: 100px;
        width: 1440px;
    } 
`

export default AddCourse
