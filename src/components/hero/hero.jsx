import Youtube from '../youtube/youtube';
import './hero.css';


const Hero = () => {
    return (
       <div className='hero'>
        <div><h1>How to <span className='span'>Become Financially Stable</span> 
        <br></br>With <span className='red'>Aziononet</span>
        <br />
        <span className='redd'>Digital contribution</span> <span className='spann'>& Facebook Strategy!</span>
        </h1>
        <h2 className='right'>Click Play</h2>
        </div>

        <Youtube />
       </div>
    )
}


export default Hero;