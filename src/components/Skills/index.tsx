import react from '../../assets/atom.png';
import reactNative from '../../assets/atom.png';
import css from '../../assets/css.png';
import git from '../../assets/git.png';
import html from '../../assets/html.png';
import js from '../../assets/js.png';
import mysql from '../../assets/mysql.png';
import next from '../../assets/next.js.png';
import node from '../../assets/node.js.png';
import redux from '../../assets/redux.png';
import sass from '../../assets/sass.png';
import tp from '../../assets/typescript.png';
import tw from '../../assets/tailwind.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface AboutProps {
    titulo: string
}

export default function Skills({titulo}: AboutProps){
    const skills = [
        {
            imagem: react,
            alt: 'React',
            texto: 'React'
        },
        {
            imagem: reactNative,
            alt: 'React Native',
            texto: 'React Native'
        },
        {
            imagem: css,
            alt: 'CSS',
            texto: 'CSS'
        },
        {
            imagem: git,
            alt: 'Git',
            texto: 'Git'
        },
        {
            imagem: html,
            alt: 'HTML',
            texto: 'HTML'
        },
        {
            imagem: js,
            alt: 'JavaScript',
            texto: 'JavaScript'
        },
        {
            imagem: mysql,
            alt: 'MySQL',
            texto: 'MySQL'
        },
        {
            imagem: next,
            alt: 'NextJS',
            texto: 'NextJS'
        },
        {
            imagem: node,
            alt: 'NodeJS',
            texto: 'NodeJS'
        },
        {
            imagem: redux,
            alt: 'Redux',
            texto: 'Redux'
        },
        {
            imagem: sass,
            alt: 'SASS',
            texto: 'SASS'
        },
        {
            imagem: tw,
            alt: 'Tailwind CSS',
            texto: 'Tailwind CSS'
        },
        {
            imagem: tp,
            alt: 'TypeScript',
            texto: 'TypeScript'
        },

    ]
    return(
        <section className="block mx-44" id="Skills">
            <h1 className="uppercase font-bold text-7xl">{titulo}</h1>
            <Swiper spaceBetween={20} slidesPerView={4} 
            className='flex my-28 shadow-md'>
                {skills.map((item, index)=>{
                    return  <SwiperSlide key={index} className="block justify-center shadow-2xl p-16
                    border-2 rounded-lg">
                        <img alt={item.alt} src={item.imagem}></img>
                        <p className="text-center pt-5">{item.texto}</p>
                        </SwiperSlide>
                })}
                </Swiper>
        </section>
    )
}