import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    align-items: flex-start;
    margin-top: 25px;
    
    img {
        margin-right: 10px;
        border-radius: 50%;
    }

    input {
        width: 100%;
        min-height: 35px;
        height: auto;
        border: 2px solid #A2A2A2;
        border-radius: 10px;
        text-indent: 15px;
        outline: none;
    }
`

const CommentForm = ({src}) => {
    return (
        <Form>
            <img src={src} alt="profile picture"/>
            <input type="text" name="commentform" id="commentform" placeholder="Write a comment"/>
        </Form>
    )
}

export default CommentForm