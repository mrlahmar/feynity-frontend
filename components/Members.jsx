import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const M = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    margin-bottom: 18px;

    img {
        max-width: 30px;
    }
`

const ChBtn = styled.button`
    background-color: #FFEDDE;
    font-size: .85em;
    padding: 5px;
    border-radius: 9px;
    color: #ED694A;
    border: none;

    &:hover{
        cursor: pointer;
    }

    img {
        margin-right: 5px;
    }
`

const P = styled.p`
    color: #6573FF;
    text-align: center;
`

const Members = () => {
    return (
        <M10 />
    )
}


const M10 = () => {
    return (
        <>
            <M>
                <img src="/profile.png" alt="profile pic" />
                <p>Flen Ben Flen</p>
                <Link href="/group/challenge">
                    <a>
                        <ChBtn>
                            <img src="/challenge/fire.png" alt="fire icon" />
                            Challenge
                        </ChBtn>
                    </a>
                </Link>
            </M>
            <M>
                <img src="/profile.png" alt="profile pic" />
                <p>Flen Ben Flen</p>
                <Link href="/group/challenge">
                    <a>
                        <ChBtn>
                            <img src="/challenge/fire.png" alt="fire icon" />
                            Challenge
                        </ChBtn>
                    </a>
                </Link>
            </M>
            <M>
                <img src="/profile.png" alt="profile pic" />
                <p>Flen Ben Flen</p>
                <Link href="/group/challenge">
                    <a>
                        <ChBtn>
                            <img src="/challenge/fire.png" alt="fire icon" />
                            Challenge
                        </ChBtn>
                    </a>
                </Link>
            </M>
            <M>
                <img src="/profile.png" alt="profile pic" />
                <p>Flen Ben Flen</p>
                <Link href="/group/challenge">
                    <a>
                        <ChBtn>
                            <img src="/challenge/fire.png" alt="fire icon" />
                            Challenge
                        </ChBtn>
                    </a>
                </Link>
            </M>
            <M>
                <img src="/profile.png" alt="profile pic" />
                <p>Flen Ben Flen</p>
                <Link href="/group/challenge">
                    <a>
                        <ChBtn>
                            <img src="/challenge/fire.png" alt="fire icon" />
                            Challenge
                        </ChBtn>
                    </a>
                </Link>
            </M>
            <M>
                <img src="/profile.png" alt="profile pic" />
                <p>Flen Ben Flen</p>
                <Link href="/group/challenge">
                    <a>
                        <ChBtn>
                            <img src="/challenge/fire.png" alt="fire icon" />
                            Challenge
                        </ChBtn>
                    </a>
                </Link>
            </M>
            <M>
                <img src="/profile.png" alt="profile pic" />
                <p>Flen Ben Flen</p>
                <Link href="/group/challenge">
                    <a>
                        <ChBtn>
                            <img src="/challenge/fire.png" alt="fire icon" />
                            Challenge
                        </ChBtn>
                    </a>
                </Link>
            </M>
            <Link href="/allmembers">
                <a>
                    <P className="mem">All members</P>
                </a>    
            </Link>

        </>
    )
}
export default Members
