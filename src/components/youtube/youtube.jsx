import { Link } from 'react-router-dom';
import './youtube.css';
import Card from '../card/card';
// import { Link } from 'react-router-dom';


const Youtube = () => {


  const redirectToWhatsApp = () => {
    window.location.href = "https://wa.me/+2348035317931"; 
   
  };
    return (
        <div>
        <div className="video-container">
     <iframe className="iframe" width="650" height="415" src="https://www.youtube.com/embed/egA-DzmDvMQ?si=TMN96KKKgbWtCA_B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
     </iframe>

     {/* <Link> Would you like to join our support dsystem on facebook</Link> */}
      {/* <Link>Would you</Link> */}
      </div>

      <div className='dashed-div'>
    <a  className="dashed-link" href="">Would you like to join our Facebook support system? Click the blue button now!</a>
      </div>

      <button className='btn' onClick={redirectToWhatsApp}>Facebook system</button>

      <div className='note'>

        <h1>NOTE:</h1>
        <p>​We don't accept payment from online banks. we work only with mainstream banks.</p>
      </div>

      <h1 className='ready' id='ready'>Ready to join?</h1>
    <h1 id='make'>Make your <span className='make'>contribution</span> to the account below.</h1>
    <p className='same'>GTBANK</p>
    <p className='same'>0719025393</p>
    <p className='same'>AZINONET LIMITED</p>

    <Card />
</div>
    )
}

export default Youtube;