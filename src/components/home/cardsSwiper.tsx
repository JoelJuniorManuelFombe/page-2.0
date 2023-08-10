import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
    EffectCoverflow,
    Pagination,
    Navigation,
    Autoplay,
    FreeMode,
} from "swiper/modules";
import { CardTestimony } from "./testimony";
import { DataUser } from "./data";


const CardSwiper = () => {
    return (
        <section>
            <div className="">
                <Swiper
                    loop={true}
                    slidesPerView={6}
                    spaceBetween={30}
                    centeredSlides={true}
                    freeMode={false}
                    speed={38000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 8,
                        },
                        500: {
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {DataUser.map((e) => (
                        <SwiperSlide key={e.name}>
                            <CardTestimony comment={e.comment} date={e.date} name={e.name} username={e.username} photo={e.photo}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export { CardSwiper };
