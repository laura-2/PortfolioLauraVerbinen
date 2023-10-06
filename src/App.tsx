import Header from './components/Header';
import logo from './assets/stickerBallon.png';
import Letter from './components/Letter';
import welcome from './assets/stickerSit.png'
import About from './components/About';
import imageGirl from './assets/stickerMusic.png'
import Skills from './components/Skills';
import Contact from './components/Contact';
import sticker from './assets/stickerRun.png'
import Project from './components/Project';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header alt='Logo' imagem={logo}/>
      <Letter imagem={welcome} titulo='Front End Developer' texto='Hii, I am Laura, nice to see you here!'/>
      <About imagem={imageGirl} titulo='About me' texto='I am originally from Brazil, Jaraguá do Sul, Santa Catarina and currently reside in Curitiba, Paraná.
       I am a graduated technician in analysis and development of systems from PUCPR College in Brazil. 
       Additionally, I have gained valuable experience in Front-End development skills. 
       I have been actively working and growing in the field of technology for the past two years, 
       continuously enhancing my knowledge and expertise in this dynamic industry.'/>
       <Skills titulo='Hard Skills'/>
       <Project titulo='My projects'/>
       <Contact titulo='Contact me!'
       imagem={sticker}/>
       <Footer/>
      </>
  );
}

export default App;
