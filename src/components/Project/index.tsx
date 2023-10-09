import alFood from '../../assets/ProjetoAlFood.png';
import alura from '../../assets/ProjetoAlura.png';
import casaverde from '../../assets/ProjetoCasaVerde.png';
import cash from '../../assets/ProjetoCash.png';
import confeitaria from '../../assets/ProjetoConfeitaria.png';
import cord from '../../assets/ProjetoCord.png';
import culturama from '../../assets/ProjetoCulturama.png';
import cursos from '../../assets/ProjetoCursos.png';
import lembrancas from '../../assets/ProjetoLembrancas.png';
import meteora from '../../assets/ProjetoMeteora.png';
import midi from '../../assets/ProjetoMidi.png';
import tech from '../../assets/ProjetoTech.png';
import fruta from '../../assets/Projetofruta.png';
import sobremim from  '../../assets/Projetosobremim.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface ProjectProps {
    title: string
}

export default function Project({title}: ProjectProps){
    const skills = [
        {
            image: casaverde,
            website: 'https://casa-verde-coral.vercel.app/',
            alt: 'Project Casa Verde',
            code: 'https://github.com/laura-2/casaVerde',
            text: 'React Javascript CSS'
        },
        {
            image: cord,
            website: 'https://web-site-nextjs-delta.vercel.app/',
            alt: 'Project LauraCord',
            code: 'https://github.com/laura-2/WebSite-nextjs',
            text: 'Next Javascript CSS'
        },
        {
            image: meteora,
            website: 'https://loja-meteora-eight.vercel.app/',
            alt: 'Project Loja Meteora',
            code: 'https://github.com/laura-2/loja-meteora',
            text: 'React Javascript Bootstrap'
        },
        {
            image: midi,
            website: 'https://teclas-som.vercel.app/',
            alt: 'Project Midi',
            code: 'https://github.com/laura-2/teclasSom',
            text: 'HTML CSS JavaScript'
        },
        {
            image: fruta,
            website: 'https://frutafruto-azure.vercel.app/',
            alt: 'Project fruta&fruto',
            code: 'https://github.com/laura-2/frutafruto',
            text: 'HTML CSS'
        },
        {
            image: alura,
            website: 'https://alura-html-b8wo.vercel.app/',
            alt: 'Project Alura',
            code: 'https://github.com/laura-2/alura_html',
            text: 'HTML CSS'
        },
        {
            image: alFood,
            website: 'https://al-food.vercel.app/',
            alt: 'Project AlFood',
            code: 'https://github.com/laura-2/alFood',
            text: 'React TypeScript SASS'
        },
        {
            image: culturama,
            website: 'https://culturama-nine-kappa.vercel.app/',
            alt: 'Project Culturama',
            code: 'https://github.com/laura-2/culturama',
            text: 'HTML CSS'
        },
        {
            image: cursos,
            website: 'https://alura-books-laura-2.vercel.app/',
            alt: 'Project AluraBooks',
            code: 'https://github.com/laura-2/aluraBooks',
            text: 'HTML CSS'
        },
        {
            image: tech,
            website: 'https://optimus-tech-lake.vercel.app/',
            alt: 'Project OptimusTech',
            code: 'https://github.com/laura-2/optimusTech',
            text: 'HTML CSS'
        },
        {
            image: lembrancas,
            website: 'https://organo-seven-dusky.vercel.app/',
            alt: 'Project Lembranças',
            code: 'https://github.com/laura-2/organo',
            text: 'React Javascript CSS'
        },
        {
            image: sobremim,
            website: 'https://portfolio-ten-pi-85.vercel.app/index.html',
            alt: 'Project Sobre mim',
            code: 'https://github.com/laura-2/portfolio',
            text: 'HTML CSS Javascript'
        },
        {
            image: confeitaria,
            website: 'https://magnolia-x6x5.vercel.app/',
            alt: 'Project Magnolia',
            code: 'https://github.com/laura-2/magnolia',
            text: 'HTML CSS'
        },
        {
            image: cash,
            website: 'https://pod-cast-eta.vercel.app/',
            alt: 'Project PdCast',
            code: 'https://github.com/laura-2/podCast',
            text: 'HTML CSS'
        },

    ]
    return(
        <section className="block p-10 xl:mx-28" id="page-j">
            <h1 className="uppercase font-bold text-5xl">{title}</h1>
            <Swiper spaceBetween={20} slidesPerView={1} 
            breakpoints={{
                1024: {
                  width: 1024,
                  slidesPerView: 2,
                }
              }}
            className='flex my-28'>
                {skills.map((item, index)=>{
                    return  <SwiperSlide key={index} className="block justify-center text-center px-16 py-10
                    border-2 rounded-lg">
                        <a href={item.website}><img alt={item.alt} src={item.image}></img></a>
                        <p className="py-5">{item.text}</p>
                            <a href={item.code} 
                            className="text-white px-5 py-2 link-code">View source code</a>
                        </SwiperSlide>
                })}
                </Swiper>
        </section>
    )
}