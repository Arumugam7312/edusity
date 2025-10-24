import './Contact.css'
import messgae_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import locarion_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import React from 'react'
 
const Contact = () => {


   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "82de1e30-7ad0-44e3-ab58-c539dc5af398");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Sender us a message <img src={messgae_icon} alt="" /></h3>
        <p>Fell free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
          <li><img src={mail_icon} alt="" />asarjun9976@gmail.com</li>
          <li><img src={phone_icon} alt="" />+1 986-576-565</li>
          <li><img src={locarion_icon} alt="" />77 Massachusetts Ave, Cambridge <br /> MA 02139, United</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' required />
          
          <label htmlFor="">Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />

          <label htmlFor="">Write your message here</label>
          <textarea name="message" id="" rows={6} placeholder='Enter Your Maessage' required></textarea>

          <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}
export default Contact