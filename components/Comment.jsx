import styled from 'styled-components'

const Cmnt = styled.div`
    display: flex;
    align-items: flex-start;

    p {
        background-color: #F6F6FE;
        border-radius: 10px;
        padding: 8px;

        .writer {
            font-weight: bold;
        }

        .text {
            font-size: .9em;
        }

        .time {
            font-size: .75em;
            text-align: right;
        }
    }

    img {
        margin-right: 12px;
        border-radius: 50%;
        max-width: 35px;
    }
`

const Comment = ({writer, src, text, time}) => {
    return (
        <Cmnt>
            <img src={src} alt="profile picture"/>
            <p>
                <span className="writer">{writer}</span>
                <span className="text">{text}</span>
                <span className="time">{time}</span>
            </p>
        </Cmnt>
    )
}

export default Comment