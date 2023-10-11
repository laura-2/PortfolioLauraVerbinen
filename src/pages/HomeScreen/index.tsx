import Header from '../../components/Header';
import logo from '../../assets/stickerBallon.png';
import Letter from '../../components/Letter';
import stickerSit from '../../assets/stickerSit.png'
import About from '../../components/About';
import stickerMusic from '../../assets/stickerMusic.png'
import Skills from '../../components/Skills';
import Contact from '../../components/Contact';
import stickerRun from '../../assets/stickerRun.png'
import Project from '../../components/Project';
import Footer from '../../components/Footer';
import skills from '../../data/skills';
import projects from '../../data/projects';
import icons from '../../data/icons';

function HomeScreen() {
  const option = ['Home', 'About', 'Skills', 'Projects', 'Contact']
  return (
    <>
      <Header image={logo} option={option}/>
      <Letter image={stickerSit} title="Front End Developer" text="Hi, I'm Laura! It's nice to see you here!"/>
      <About image={stickerMusic} title="About me" text="I am a graduated technician in analysis and development of systems from PUCPR College in Curitiba, Brazil. 
       Additionally, I have gained valuable experience in Front-End development skills. 
       I have been actively working and growing in the field of technology for the past two years, 
       continuously enhancing my knowledge and expertise in this dynamic industry."/>
       <Skills title="Hard Skills" skills={skills}/>
       <Project title="My projects" projects={projects}/>
       <Contact title="Contact me!"
       image={stickerRun} labelName='Name' labelEmail='Email'
       labelMessage='Message'/>
       <Footer icons={icons}/>
      </>
  );
}

export default HomeScreen;
