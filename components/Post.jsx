import PostContainer from '../styles/PostContainer'
import styled from 'styled-components'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Span = styled.span`
    display: block;
    color: red;
    text-align: right;
    margin-bottom: 5px;

    &:hover {
        cursor: pointer;
    }
`

const Post = ({id,title,owner,author,group,content,posttime,groupid,authmail}) => {
    const {user} = useContext(AuthContext)
    const milliseconds = parseInt(posttime)
    const dateObject = new Date(milliseconds)
    const humanDateFormat = dateObject.toLocaleString()
    const router = useRouter()

    const deletePost = async () => {
        try {
            // fetch end point
            const res = await fetch(
                'http://localhost:5000/api/v1/posts/delete',
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': user.accessToken
                    },
                    body: JSON.stringify({
                        postid: id,
                        postcreator: authmail
                    })
                }
            )
            if (res.status === 200) {
                // parse data
                router.reload(`/`)
            } else {
                router.reload(`/`)
            }
        } catch (error) {
            router.reload(`/`)
        }
    }

    return (
        <PostContainer>
            <div className="top">
                <div className="post-info">
                    <img src="/profile.png" alt="Profile picture"/>
                    <div className="post-details">
                        <h3>{title}</h3>
                        <span>{author} in <Link href={`/group/${groupid}`}><a className="grpname">{group}</a></Link></span>
                    </div>
                </div>
                <span>
                    {owner ? <Span className="delete" onClick={deletePost}>Delete your post</Span> : "" }
                    <span>{humanDateFormat}</span>
                </span>
            </div>
            
            <div className="post-content">
                <p>{content}</p>
            </div>
            {/*
            <div className="post-stats">
                <span>
                    <img src="/post/heart.png" alt="heart icon"/>
                    3
                </span>
                <span> - 3 comments</span>
            </div>

            <div className="buttons">
                <PostButton src="/post/heart-btn.png" alt="like btn" text="Like" marginright="20px"/>
                <PostButton src="/post/comment-btn.png" alt="comment btn" text="Comment"/>
            </div>

            <div className="all-comments">
                <span className="cmnts">Comments</span>
                <div className="comments">
                    <Comment writer="Mary C." src="/profile.png" text="Lorem ipsum dolor sit amet consectetur adipisicing." time="2 min ago"/>
                </div>
            </div>

            <div className="comment-form">
                <CommentForm src="/profile.png"/>
            </div>*/}
        </PostContainer>
    )
}

export default Post