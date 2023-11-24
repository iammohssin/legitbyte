import './App.css';
import Services from './Components/Services/Services';
import Navbar from './Components/Navbar/Navbar'
import Slider from './Components/Slider/Slider';
import AboutUs from './Components/AboutUs/AboutUs';
import Project from './Components/Projects/Project';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/ContactUs/Contact';
import Footer from './Components/Footer/Footer';
import BackToTop from './Components/BackToTopButton/BackToTop';

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <br /><br /><br />
      <Services />
      <br /><br /><br />
      <AboutUs />
      <br /><br /><br />
      <div id="projects">
        <Project />
      </div>
      <br /><br /><br />
      <Testimonials />
      <br /><br /><br />
      <Contact />
      <br /><br /><br />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
