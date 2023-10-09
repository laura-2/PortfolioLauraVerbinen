import Header from './components/Header';
import logo from './assets/stickerBallon.png';
import Letter from './components/Letter';
import stickerSit from './assets/stickerSit.png'
import About from './components/About';
import stickerMusic from './assets/stickerMusic.png'
import Skills from './components/Skills';
import Contact from './components/Contact';
import stickerRun from './assets/stickerRun.png'
import Project from './components/Project';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header image={logo}/>
      <Letter image={stickerSit} title="Front End Developer" text="Hi, I'm Laura! It's nice to see you here!"/>
      <About image={stickerMusic} title="About me" text="I am originally from Brazil, Jaraguá do Sul, Santa Catarina and currently reside in Curitiba, Paraná.
       I am a graduated technician in analysis and development of systems from PUCPR College in Brazil. 
       Additionally, I have gained valuable experience in Front-End development skills. 
       I have been actively working and growing in the field of technology for the past two years, 
       continuously enhancing my knowledge and expertise in this dynamic industry."/>
       <Skills title="Hard Skills"/>
       <Project title="My projects"/>
       <Contact title="Contact me!"
       image={stickerRun}/>
       <Footer/>
      </>
  );
}

export default App;
