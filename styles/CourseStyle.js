import styled from 'styled-components'

const CourseStyle = styled.div`
    padding: 0 15px 0;

    main {
        margin: 50px auto 0px;
        .tag {
            margin-bottom: 15px;
        }
    }

    .container {
        .course {
            p span {
                color: #6573FF;
                font-weight: bold;
            }
        }

        h4{
            margin-bottom: 20px;
        }

        .provider {
            margin-bottom: 20px;
        }

        .course-info .description {
            margin-bottom: 30px;
        }
    }

    .related-groups .related-grp {
        display: grid;
        grid-template-columns: repeat(auto-fill, 330px);
        grid-gap: 15px;
    }

    @media (min-width: 730px) {
        .course {
            display: flex;

            .course-info {
                padding-right: 20px;
            }

            .ctas {
                margin-top: 30px;
            }
        }
    }

    @media (min-width: 768px) {
        h1 {
            font-size: 2.5em;
        }
    }

    @media (min-width: 1080px) {
        .logged {
            margin-left: 400px;
        }
    }

    @media (min-width: 1440px) {
        main {
            margin: 100px auto 0;
        }
        
        margin: 0 auto;
        padding: unset;
        width: 1440px;
    }
`

export default CourseStyle
