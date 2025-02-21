import './App.css'
import Faq from './components/faq/faq'
import Footer from './components/footer/footer'
import Heading from './components/heading/heading'
import Hero from './components/hero/hero'
import Testimonial from './components/testimonial/testimonial'

function App() {
  

  return (
    <div>
      <Heading />
      <div className='main'>
      <Hero />
      <Faq />
      <Testimonial />
      </div>
      {/* <Testimonial /> */}
      {/* <Faq /> */}
      <Footer />
    </div>
  )
}

export default App
