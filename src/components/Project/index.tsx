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
    titulo: string
}

export default function Project({titulo}: ProjectProps){
    const skills = [
        {
            imagem: casaverde,
            site: 'https://casa-verde-coral.vercel.app/',
            alt: 'Project Casa Verde',
            codigo: 'https://github.com/laura-2/casaVerde',
            texto: 'React Javascript CSS'
        },
        {
            imagem: cord,
            site: 'https://web-site-nextjs-delta.vercel.app/',
            alt: 'Project LauraCord',
            codigo: 'https://github.com/laura-2/WebSite-nextjs',
            texto: 'Next Javascript CSS'
        },
        {
            imagem: meteora,
            site: 'https://loja-meteora-eight.vercel.app/',
            alt: 'Project Loja Meteora',
            codigo: 'https://github.com/laura-2/loja-meteora',
            texto: 'React Javascript Bootstrap'
        },
        {
            imagem: midi,
            site: 'https://teclas-som.vercel.app/',
            alt: 'Project Midi',
            codigo: 'https://github.com/laura-2/teclasSom',
            texto: 'HTML CSS JavaScript'
        },
        {
            imagem: fruta,
            site: 'https://frutafruto-azure.vercel.app/',
            alt: 'Project fruta&fruto',
            codigo: 'https://github.com/laura-2/frutafruto',
            texto: 'HTML CSS'
        },
        {
            imagem: alura,
            site: 'https://alura-html-b8wo.vercel.app/',
            alt: 'Project Alura',
            codigo: 'https://github.com/laura-2/alura_html',
            texto: 'HTML CSS'
        },
        {
            imagem: alFood,
            site: 'https://al-food.vercel.app/',
            alt: 'Project AlFood',
            codigo: 'https://github.com/laura-2/alFood',
            texto: 'React TypeScript SASS'
        },
        {
            imagem: culturama,
            site: 'https://culturama-nine-kappa.vercel.app/',
            alt: 'Project Culturama',
            codigo: 'https://github.com/laura-2/culturama',
            texto: 'HTML CSS'
        },
        {
            imagem: cursos,
            site: 'https://alura-books-laura-2.vercel.app/',
            alt: 'Project AluraBooks',
            codigo: 'https://github.com/laura-2/aluraBooks',
            texto: 'HTML CSS'
        },
        {
            imagem: tech,
            site: 'https://optimus-tech-lake.vercel.app/',
            alt: 'Project OptimusTech',
            codigo: 'https://github.com/laura-2/optimusTech',
            texto: 'HTML CSS'
        },
        {
            imagem: lembrancas,
            site: 'https://organo-seven-dusky.vercel.app/',
            alt: 'Project Lembranças',
            codigo: 'https://github.com/laura-2/organo',
            texto: 'React Javascript CSS'
        },
        {
            imagem: sobremim,
            site: 'https://portfolio-ten-pi-85.vercel.app/index.html',
            alt: 'Project Sobre mim',
            codigo: 'https://github.com/laura-2/portfolio',
            texto: 'HTML CSS Javascript'
        },
        {
            imagem: confeitaria,
            site: 'https://magnolia-x6x5.vercel.app/',
            alt: 'Project Magnolia',
            codigo: 'https://github.com/laura-2/magnolia',
            texto: 'HTML CSS'
        },
        {
            imagem: cash,
            site: 'https://pod-cast-eta.vercel.app/',
            alt: 'Project PdCast',
            codigo: 'https://github.com/laura-2/podCast',
            texto: 'HTML CSS'
        },

    ]
    return(
        <section className="block mx-44" id="Projects">
            <h1 className="uppercase font-bold text-7xl">{titulo}</h1>
            <Swiper spaceBetween={20} slidesPerView={2} 
            className='flex my-28'>
                {skills.map((item, index)=>{
                    return  <SwiperSlide key={index} className="block justify-center text-center px-16 py-10
                    border-2 rounded-lg">
                        <a href={item.site}><img alt={item.alt} src={item.imagem}></img></a>
                        <p className="py-5">{item.texto}</p>
                            <a href={item.codigo} 
                            className="text-white px-5 py-2 link-code">Visualizar Código-fonte</a>
                        </SwiperSlide>
                })}
                </Swiper>
        </section>
    )
}