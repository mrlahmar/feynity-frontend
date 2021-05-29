import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Invite = styled.div`
    padding: 20px;
    background-color: white;
    max-width: 330px;
    min-width: 320px;
    border-radius: 10px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    
    .profile {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        img {
            margin-right: 20px;
        }

        h3 {
            margin-bottom: 0;
        }
    }

    .is {
        margin-bottom: 20px;
    }

    .btns {
        display: flex;
    }
`


const InviteCard = () => {
    return (
        <Invite>
            <div className="profile">
                <img src="invite/profile-invite.png" alt="Profile pic" />
                <div className="prf">
                    <h3>John Doe</h3>
                    <p>From <span>Photoshop 101</span></p>
                </div>
            </div>
            <p className="is">is Challenging you</p>
            <div className="btns">
                <Button marginright="5px" marginbottom="0px" text="Accept" color="#5DC39E" bgColor="#fff" borderColor="#5DC39E"/>
                <Button marginright="5px" marginbottom="0px" text="Ignore" color="#ED694A" bgColor="#fff" borderColor="#ED694A"/>
                <Button marginbottom="0px" text="See Details" color="#6573FF" bgColor="#fff" borderColor="#6573FF"/>
            </div>            
        </Invite>
    )
}

export default InviteCard
