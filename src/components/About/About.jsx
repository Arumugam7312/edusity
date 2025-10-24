import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt=""  className='about-img'/>
        <img src={play_icon} alt=""  className='play-icon' onClick={() => {setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a tranformative educational journey with our universit's comprehensive education programs. Our cutting-edge  curriclum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
        <p>With a focus on innovation , hands-on learing, and personalized mentorship, our program perpare aspring educators to mae a meaningful impact in classrooms, schools and communities.</p>
        <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, Our diverse of programs offers the perfect pathway to achive your goals and unloc your full potential in shaping in shaping the future of education.</p>
      </div>
    </div>
  )
}
export default About