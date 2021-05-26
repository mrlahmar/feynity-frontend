import styled from "styled-components"

const PostContainer = styled.div`
    max-width: 690px;
    height: auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    margin-bottom: 30px;
    padding: 20px;

    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        .post-info {
            display: flex;
            align-items: center;

            img {
                margin-right: 12px;
                border-radius: 50%;
            }
        }
    }

    .post-content {
        margin-bottom: 20px;

        p span {
            font-weight: bold;
            color: #6573FF;
        }
    }

    .post-stats {
        margin-bottom: 10px;

        img {
            margin-right: 7px;
        }
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        width: 100%;
    }

    .all-comments {
        span {
            display: block;
        }

        .cmnts {
            margin-bottom: 20px;
        }
    }
`

export default PostContainer