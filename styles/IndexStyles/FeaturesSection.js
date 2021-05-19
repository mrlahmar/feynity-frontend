import styled from "styled-components";

const FeaturesSection = styled.section`
  text-align: center;
  background-color: #E7E7EC;

  h2 {
    font-size: 18px;
    margin-bottom: 66px;
  }

  .features {
    .feature {
      margin-bottom: 3.5em;

      img {
        margin-bottom: 16px;
      }
    }

    .feature:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: 768px) {
    .container {
      margin: 0 auto;
    }

    h2 {
      font-size: 27px;
    }

    .features {
      display: grid;
      align-content: center;
      grid-template-columns: repeat(auto-fit, minmax(100px,1fr));
      margin: 30px 0;

      .feature {
        margin-bottom: 0;

        img.first-feature {
          margin-bottom: 10px;
        }

        img.second-feature {
          margin-bottom: 40px;
        }

        img.third-feature {
          margin-bottom: 16px;
        }
      }

      .feature:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: 1080px) {
    .container {
      width: 1080px;
    }
  }
`

export default FeaturesSection;