import Link from 'next/link'
import Footer from './Footer'
import HeroSection from '../styles/IndexStyles/HeroSection'
import FeaturesSection from '../styles/IndexStyles/FeaturesSection'
import ExploreSection from '../styles/IndexStyles/ExploreSection'
import PlatformsSection from '../styles/IndexStyles/PlatformsSection'

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection>
          <div className="container">
            <div className="left-col">
              <h1>Find the best learning <span>groups</span> on the Internet</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <Link href="/signup"><a className="primary-cta">Join for Free</a></Link>
            </div>
            <img src="index/hero-img.png" alt="Hero Image" />
          </div>
        </HeroSection>
        
        <FeaturesSection>
          <div className="container">
            <h2>Here to improve the Experience</h2>
            <div className="features">
              <div className="feature">
                <img className="first-feature" src="index/feat1.svg" alt="Feature 1"/>
                <p>Course Based Groups</p>
              </div>
              <div className="feature">
                <img className="second-feature" src="index/feat2.svg" alt="Feature 2"/>
                <p>Gamified Experience</p>
              </div>
              <div className="feature">
                <img className="third-feature" src="index/feat3.svg" alt="Feature 3"/>
                <p>Accountability partners</p>
              </div>
            </div>
          </div>
        </FeaturesSection>

        <ExploreSection>
          <div className="container">
            <div className="right">
              <h2>Explore the best learning groups</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, aut.</p>
            </div>
            <img src="index/explore.png" alt="Explore"/>
          </div>
        </ExploreSection>

        <PlatformsSection>
          <div className="container">
            <h2>Platforms we support</h2>
            <div className="platforms-imgs-container">
              <img className="coursera" src="/platforms/coursera.png" alt="Coursera logo"/>
              <img className="edx"  src="/platforms/edX.png" alt="edX logo"/>
              <img className="udemy"  src="/platforms/udemy.png" alt="Udemy logo"/>
              <img className="inlearning"  src="/platforms/inlearning.png" alt="Linkedin Learning logo"/>
            </div>
          </div>
        </PlatformsSection>
      </main>
      <Footer />
    </>
  )
}
