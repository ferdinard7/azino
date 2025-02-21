import videos from '../../../videos';
import './testimonial.css';


const Testimonial = () => {
    return (
        <div>
            <h1 className='omoo'>TESTIMONIALS</h1>
            <div className='videos-container'>
            {videos.map((video) => (
          <div key={video.id} className='vid'>
            
            <h4>{video.title}</h4>
            <video width="300" controls>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>
        ))}
            </div>
        </div>
    )
}


export default Testimonial;