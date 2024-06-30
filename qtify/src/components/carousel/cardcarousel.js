
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { CardComponent } from '../container2/container';
import styles from "./CardCarousel.module.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import leftButton from "../../asset/assets/LeftArrow.svg";
import rightButton from "../../asset/assets/RightArrow.svg";


function CardCarousel({ name,songsData}){
    return (
        <div className={styles.swiper}>
      <Swiper
        slidesPerView={10}
        spaceBetween={10}
        navigation={{
          nextEl: `#${name.split(' ').join('')}-right`,
          prevEl: `#${name.split(' ').join('')}-left`,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {songsData.map((song) => (
          <SwiperSlide key={song.id}>
            <CardComponent
              image={song.image}
              text={
                song.follows !== undefined
                  ? `${song.follows} Follows`
                  : `${song.likes} Likes`
              }
              title={song.title}
              tooltipText={song.songs?.length}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className={`${styles.leftbutton},${styles.sliderbutton}`}
        id={`${name.split(' ').join('')}-left`}
      >
        <img src={leftButton} alt="Left Button" />
      </button>
      <button
        className={`${styles.leftbutton},${styles.sliderbutton}`}
        id={`${name.split(' ').join('')}-right`}
      >
        <img src={rightButton} alt="Right Button" />
      </button>
    </div>
  );


}
export {CardCarousel};