import Link from 'next/link'
import React from 'react'
import Button from './Button'
import Input from './Input'
import TextArea from './TextArea'
import styled from 'styled-components'

const PostFormStyle = styled.div`
    padding: 20px;
    background-color: white;
    width: 100%;
    max-width: 690px;
    border-radius: 10px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    margin-bottom: ${props => props.marginbottom};

    .container {
        display: flex;
        align-items: flex-start;

        img {
            margin-right: 25px;
            max-width: 40px;
        }

        .inputs {
            width: 100%;
        }
    }

    @media (min-width: 1100px) {
        width: 690px;
    }

    @media (min-width: 1400px) {
        width: 690px;
    }
`


const PostForm = ({marginbottom,onSubmit}) => {
    return (
        <PostFormStyle marginbottom={marginbottom}>
            <div className="container">
                <img src="/profile.png" alt="profile pic" />
                <form className="inputs" onSubmit={onSubmit}>
                    <Input type="text" name="posttitle" maxwidth="100%" placeholder="Best JS Tools" label="Post Title"/>
                    <TextArea name="postcontent" width="100%" height="100px" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste reiciendis, repudiandae eos veniam exercitationem rerum tempore molestiae quo odit." label="Post Content"/>
                    <Button text="Post"/>
                </form>
            </div>
        </PostFormStyle>
    )
}

PostForm.defaultProps = {
    marginbottom: "0px"
}


export default PostForm