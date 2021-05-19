import Link from 'next/link'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    padding: 2em;

    .container {
        @media (min-width: 1440px) {
            margin: 0 auto;
            width: 1440px;
        }
    }

    ul {
        margin-bottom: 3em;

        li {
            margin-bottom: 1em;
        }
    }

    @media (min-width: 768px) {
        div:first-child {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
        }

        ul {
            display: flex;
            margin-bottom: 0;

            li {
                margin-bottom: 0;
                margin-right: 2em;
            }
            
            li:last-child {
                margin-right: 0;
            }
        }
    }
`

function Footer() {
    return (
        <StyledFooter>
            <div className="container">
                <ul>
                    <li><Link href="/contact"><a>Contact</a></Link></li>
                    <li><Link href="/about"><a>About Us</a></Link></li>
                    <li><Link href="/faq"><a>FAQ</a></Link></li>
                </ul>

                <p>© Feynity 2021</p>
            </div>
        </StyledFooter>
    )
}

export default Footer
