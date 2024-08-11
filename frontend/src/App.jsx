import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features.jsx';
import Testimonial from './components/Testimonial';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
   import Banner from './components/Banner.jsx';
   import Dashboard from './components/Dashboard.jsx';
function App() {
  return (
   
    <>
      {/* <Banner/>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer /> */}
      <Routes>
      <Route 
          path="/" 
          element={
            <>
              <Banner />
              <Navbar />
              <Hero />
              <Features />
              <Testimonial />
              <CallToAction />
              <Footer />
            </>
          } 
        />
				<Route path='/dash' element={<Dashboard />} />
			</Routes>
    </>
   
  );
}

export default App;
