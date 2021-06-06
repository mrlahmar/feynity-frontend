import Comment from '../components/Comment'
import CommentForm from '../components/CommentForm'
import PostButton from '../components/PostButton'
import PostContainer from '../styles/PostContainer'

const Post = () => {
    return (
        <PostContainer>
            <div className="top">
                <div className="post-info">
                    <img src="post/profile.png" alt="Profile picture"/>
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
                    <img src="post/heart.png" alt="heart icon"/>
                    3
                </span>
                <span> - 3 comments</span>
            </div>

            <div className="buttons">
                <PostButton src="post/heart-btn.png" alt="like btn" text="Like" marginright="20px"/>
                <PostButton src="post/comment-btn.png" alt="comment btn" text="Comment"/>
            </div>

            <div className="all-comments">
                <span className="cmnts">Comments</span>
                <div className="comments">
                    <Comment writer="Mary C." src="post/comment-profile.png" text="Lorem ipsum dolor sit amet consectetur adipisicing." time="2 min ago"/>
                </div>
            </div>

            <div className="comment-form">
                <CommentForm src="/profile.png"/>
            </div>
        </PostContainer>
    )
}

export default Post