import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Photo } from "../interfaces";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../index.css";

type SwiperCustomProps = {
  slidesPerView?: number;
  photos: Photo[];
};

const SwiperCustom: FC<SwiperCustomProps> = ({ slidesPerView, photos }) => {
  return (
    <Swiper
      className="mySwiper"
      modules={[Navigation, Pagination, Scrollbar]}
      cssMode={true}
      spaceBetween={50}
      slidesPerView={slidesPerView || 1}
      loop={true}
      navigation
      scrollbar={{ draggable: true }}>
      {photos.map((photo) => (
        <SwiperSlide key={photo.photoId}>
          <div className="max-w-[300px]">
            <img src={photo.url} style={{ width: "100%" }} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCustom;
