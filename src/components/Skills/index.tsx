import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ISkills } from '../../interfaces/Skills';

interface AboutProps {
    title: string,
    skills: ISkills[],
}

export default function Skills({title, skills}: AboutProps){
    
    return(
        <section className="block p-10 xl:mx-28 xl:p-5" id="page-i">
            <h1 className="uppercase font-bold text-4xl md:text-5xl">{title}</h1>
            <Swiper 
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectCards]}
            spaceBetween={10} 
            slidesPerView={1}
            pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
            breakpoints={{
                768: {
                  width: 768,
                  slidesPerView: 3,
                },
                350: {
                    width: 350,
                    slidesPerView: 2,
                  }
              }}
            className='my-5 white'>
                {skills.map((item, index)=>{
                    return  <SwiperSlide key={index} className="block justify-center items-center py-5 px-16 cards my-5 sm:px-10 md:px-16">
                        <img alt={item.alt} src={item.image}/>
                        <p className="text-center pt-5">{item.text}</p>
                        </SwiperSlide>
                })}
                </Swiper>
        </section>
    )
}