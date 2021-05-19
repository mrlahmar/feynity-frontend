import styled from 'styled-components';

const HeroSection = styled.section`
  background-color: white;
  margin-top: 82px;
  text-align: center;
  
  .left-col {

    h1 {
      font-size: 35px;
      font-weight: normal;
      margin-bottom: 20px;
    
      span {
        font-weight: bold;
      }
    }

    p {
      margin-bottom: 20px;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }
  }

  img {
    display: none;
  }

  @media (min-width: 768px) {
    padding: 7em 2.5em;

    .container {
      display: flex;
      justify-content: center;
      align-content: center;

      .left-col {
        text-align: left;
        margin-right: 3em;

        h1 {
          max-width: 550px;
        }

        a {
          margin: unset;
        }
      }
    }

    img {
      display: block;
      width: 250px;
      height: 250px;
    }
  }

  @media (min-width: 1080px) {
    .container {
      margin: 0 auto;
      width: 1080px;
      
      .left-col {
        margin-right: 4.5em;

        h1 {
          max-width: 550px;
        }
      }
    }
  }
`
export default HeroSection;