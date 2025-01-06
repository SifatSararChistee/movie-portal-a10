import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Banner.css';

import bannerImg1 from "../../assets/banner1.jpg";
import bannerImg2 from "../../assets/banner2.jpg";
import bannerImg3 from "../../assets/banner3.jpg";
import bannerImg4 from "../../assets/banner4.jpg";
import bannerImg5 from "../../assets/banner5.jpg";

const Banner = () => {
    return (
        <div className="h-[500px] max-w-screen-2xl mx-auto">
            <Swiper
                navigation={true}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                modules={[Navigation, Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img 
                        src={bannerImg1} 
                        alt="Banner 1" 
                        className="w-full h-[500px] object-cover" 
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src={bannerImg2} 
                        alt="Banner 2" 
                        className="w-full h-[500px] object-cover" 
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src={bannerImg3} 
                        alt="Banner 3" 
                        className="w-full h-[500px] object-cover" 
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src={bannerImg4} 
                        alt="Banner 4" 
                        className="w-full h-[500px] object-cover" 
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src={bannerImg5} 
                        alt="Banner 5" 
                        className="w-full h-[500px] object-cover" 
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;