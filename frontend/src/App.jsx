import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features.jsx';
import Testimonial from './components/Testimonial';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
   import Banner from './components/Banner.jsx';
function App() {
  return (
    <BrowserRouter>
    <Banner/>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
