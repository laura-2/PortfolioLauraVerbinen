import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { IProjects } from '../../interfaces/IProjects';

interface ProjectProps {
    title: string
    projects: IProjects[]
}

export default function Project({title, projects}: ProjectProps){
    
    return(
        <section className="block p-10 xl:mx-28 xl:p-5" id="page-j">
            <h1 className="uppercase font-bold text-4xl md:text-5xl">{title}</h1>
            <Swiper 
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20} slidesPerView={1} 
            pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
            breakpoints={{
                1024: {
                  width: 1024,
                  slidesPerView: 2,
                }
              }}
            className='flex my-5'>
                {projects.map((item, index)=>{
                    return  <SwiperSlide key={index} className="block justify-center text-center
                    border-2 rounded-lg py-5 my-8">
                        <a href={item.website}><img alt={item.alt} src={item.image} className='px-5'/></a>
                        <p className="py-3">{item.text}</p>
                            <a href={item.code} 
                            className="text-white px-5 py-2 link-code">View source code</a>
                        </SwiperSlide>
                })}
                </Swiper>
        </section>
    )
}