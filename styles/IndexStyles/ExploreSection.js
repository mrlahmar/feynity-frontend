import styled from 'styled-components'

const ExploreSection = styled.section`
  text-align: center;
  
  .right {
    h2 {
      font-size: 30px;
      color: var(--primary-color);
      margin-bottom: 40px;
    }

    p {
      font-size: 1.2em;
    }
  }

  img {
    display: none;
  }

  @media (min-width: 800px) {
    padding: 0 2.5em;

    .container {
      display: flex;
      justify-content: center;
      align-content: center;
      margin: 0 auto;
    }

    .right {
      text-align: left;
      max-width: 450px;
      align-self: center;
      margin-right: 3em;
      padding: 3em 0;

      h2 {
        font-size: 40px;
        margin-bottom: 20px;
      }

      p {
        font-size: 1em;
        max-width: 400px;
      }
    }

    img {
      display: block;
      width: 400px;
      height: 380px;
    }
  }

  @media (min-width: 1080px) {
    .container {
      width: 1080px;
    }
  }
`

export default ExploreSection;