import styled from 'styled-components';

const PlatformsSection = styled.section`
  background-color: #E7E7EC;
  text-align: center;

  h2 {
    font-size: 1em;
    margin-bottom: 3em;
  }

  .platforms-imgs-container {
    margin: 0 auto;
    max-width: 750px;

    img {
      margin-bottom: 2em;
      margin-right: 1em;
    }

    img:last-child {
      margin-bottom: 0;
      margin-right: 0;
    }

    img.coursera {
        width: 185px;
        height: 35px;
        padding-right: 5px;
    }

    img.edx {
        width:113px;
        height:59px;
        padding-left: 10px;
    }

    img.udemy {
        width:160px;
        height:46px;
        margin-left: -25px;
    }

    img.inlearning {
        width:200px;
        height:58px;
    }
  }

  @media (min-width: 745px) {
    img.coursera {
      padding-right: 5px;
    }

    img.edx {
      padding-left: 10px;
    }

    img.udemy {
      margin-left: -25px;
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 27px;
    }

    .platforms-imgs-container {
        display: grid;
        align-content: center;
        justify-content: center;
        grid-template-columns: repeat(auto-fit, minmax(150px,1fr));
    }
  }
  
  @media (min-width: 1080px) {
    .container {
        width: 1080px;
        margin: 0 auto;
    }
  }
`

export default PlatformsSection;