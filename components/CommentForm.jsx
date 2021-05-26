import styled from 'styled-components'

const Cmnt = styled.div`
    
`

const CommentForm = () => {
    return (
        <Cmnt>
            <img src="post/comment-form-profile.png" alt="profile picture"/>
            <input type="text" name="commentform" id="commentform" placeholder="Write a comment"/>
        </Cmnt>
    )
}

export default CommentForm