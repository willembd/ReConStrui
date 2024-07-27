import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./carrossel.css"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as S from "./carrosselStyle"


export default function Carrossel(){

  const imagens = [

    {id: '1', image: "/Carrossel-1.svg" },
    {id: '2', image: "/Carrossel-2.svg" },
    {id: '3', image: "/Carrossel-3.svg" },

  ]
  

  return (
      <div className='Conteiner'>

         <Swiper 
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            pagination={{ clickable: true}}
            navigation 
           >
            
             {imagens.map( (item) => (
                <SwiperSlide key={item.id}>
                   <S.Imagens src={item.image} alt="Slide" className='slide-item'/>
                </SwiperSlide>

              ))}
           </Swiper>

      </div>
     
  )
}