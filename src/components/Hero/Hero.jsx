import './Hero.css'
import drak_arrow  from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>our cutting-edge curriculum is designed to empower students with the knowledge, sills, and expriences needed to excel in the dynamic field of educationm</p>
        <button className="btn">Explore more <img src={drak_arrow} alt="" /></button>
      </div>
    </div>
  )
}
export default Hero