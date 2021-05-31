import React from 'react'
import styled from 'styled-components'

const Load = styled.div`

    display: grid;
    justify-content: center;
    align-items: center;

    .dot-typing {
        margin: 6em auto 0 auto;
        position: relative;
        left: -9999px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: rgb(101, 115, 255);
        color: rgb(101, 115, 255);
        box-shadow: 9984px 0 0 0 rgb(101, 115, 255), 9999px 0 0 0 rgb(101, 115, 255), 10014px 0 0 0 rgb(101, 115, 255);
        animation: dotTyping 1.5s infinite linear;
    }
  
    @keyframes dotTyping {
        0% {
            box-shadow: 9984px 0 0 0 rgb(101, 115, 255), 9999px 0 0 0 rgb(101, 115, 255), 10014px 0 0 0 rgb(101, 115, 255);
        }
        16.667% {
            box-shadow: 9984px -10px 0 0 rgb(101, 115, 255), 9999px 0 0 0 rgb(101, 115, 255), 10014px 0 0 0 rgb(101, 115, 255);
        }
        33.333% {
            box-shadow: 9984px 0 0 0 rgb(101, 115, 255), 9999px 0 0 0 rgb(101, 115, 255), 10014px 0 0 0 rgb(101, 115, 255);
        }
        50% {
            box-shadow: 9984px 0 0 0 rgb(101, 115, 255), 9999px -10px 0 0 rgb(101, 115, 255), 10014px 0 0 0 rgb(101, 115, 255);
        }
        66.667% {
            box-shadow: 9984px 0 0 0 rgb(101, 115, 255), 9999px 0 0 0 rgb(101, 115, 255), 10014px 0 0 0 rgb(101, 115, 255);
        }
        83.333% {
            box-shadow: 9984px 0 0 0 rgb(101, 115, 255), 9999px 0 0 0 rgb(101, 115, 255), 10014px -10px 0 0 rgb(101, 115, 255);
        }
        100% {
            box-shadow: 9984px 0 0 0 rgb(101, 115, 255), 9999px 0 0 0 rgb(101, 115, 255), 10014px 0 0 0 rgb(101, 115, 255);
        }
    }

    p {
        font-weight: normal;
        font-size: 1.1em;
        margin-top: 15px;
    }
`

const Loading = () => {
    return (
        <Load>
            <div class="dot-typing"></div>
            <p>Loading</p>
        </Load>
    )
}

export default Loading
