import styled from "styled-components"

const Container = styled.div`
    width: 881px;
    height: auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    margin-bottom: 30px;

    .top {
        display: flex;

        .post-info {
            display: flex;
        }
    }
`

function Post() {
    return (
        <Container>
            <div className="top">
                <div className="post-info">
                    <img src="profile.png" alt="Profile picture"/>
                    <div className="post-details">
                        <h3>Best Javascript Libraries</h3>
                        <span>Julia Mary in JavaScript Intermediate</span>
                    </div>
                </div>
                <span>2h ago</span>
            </div>
            
            <div className="post-content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error cupiditate debitis earum sequi voluptatem! Atque beatae sit quis excepturi illum consectetur provident aut, inventore totam expedita repellat eligendi omnis laboriosam. <span>Read more</span></p>
            </div>

            <div className="post-stats">
                <span>
                    <img src="heart.png" alt="heart icon"/>
                    3
                </span>
                <span> - 3 comments</span>
            </div>

            <div className="buttons">
                <button>Like</button>
                <button>Comment</button>
            </div>

            <div className="all-comments">
                <span>Comments</span>
                <div className="comments">
                    <Comment />
                </div>
            </div>

            <div className="comment-form">
                <CommentForm />
            </div>
        </Container>
    )
}

function Comment() {
    return (
        <div>
            <img src="profile.png" alt="profile picture"/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
                <span>2 min ago</span>
            </p>
        </div>
    )
}


function CommentForm() {
    return (
        <>
            <img src="profile.png" alt="profile picture"/>
            <input type="text" name="commentform" id="commentform" placeholder="Write a comment"/>
        </>
    )
}

export default Post