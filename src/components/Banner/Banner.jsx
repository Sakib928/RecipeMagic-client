import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import slide4 from "../../assets/images/slide4.jpg";
import { Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="h-auto">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="mySwiper"
        loop:infinity
      >
        <SwiperSlide className="text-center">
          <img className="darkened-image" src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img className="darkened-image" src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img className="darkened-image" src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img className="darkened-image" src={slide4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
