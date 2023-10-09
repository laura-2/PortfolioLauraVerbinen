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

interface AboutProps {
    title: string
}

export default function Skills({title}: AboutProps){
    const skills = [
        {
            image: react,
            alt: 'React',
            text: 'React'
        },
        {
            image: reactNative,
            alt: 'React Native',
            text: 'React Native'
        },
        {
            image: css,
            alt: 'CSS',
            text: 'CSS'
        },
        {
            image: git,
            alt: 'Git',
            text: 'Git'
        },
        {
            image: html,
            alt: 'HTML',
            text: 'HTML'
        },
        {
            image: js,
            alt: 'JavaScript',
            text: 'JavaScript'
        },
        {
            image: mysql,
            alt: 'MySQL',
            text: 'MySQL'
        },
        {
            image: next,
            alt: 'NextJS',
            text: 'NextJS'
        },
        {
            image: node,
            alt: 'NodeJS',
            text: 'NodeJS'
        },
        {
            image: redux,
            alt: 'Redux',
            text: 'Redux'
        },
        {
            image: sass,
            alt: 'SASS',
            text: 'SASS'
        },
        {
            image: tw,
            alt: 'Tailwind CSS',
            text: 'Tailwind CSS'
        },
        {
            image: tp,
            alt: 'TypeScript',
            text: 'TypeScript'
        },

    ]
    return(
        <section className="block mx-44 py-20" id="page-i">
            <h1 className="uppercase font-bold text-7xl">{title}</h1>
            <Swiper spaceBetween={20} slidesPerView={4} 
            className='flex my-20 shadow-md'>
                {skills.map((item, index)=>{
                    return  <SwiperSlide key={index} className="block justify-center shadow-2xl p-16
                    border-2 rounded-lg">
                        <img alt={item.alt} src={item.image}></img>
                        <p className="text-center pt-5">{item.text}</p>
                        </SwiperSlide>
                })}
                </Swiper>
        </section>
    )
}