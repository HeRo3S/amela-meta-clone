import { Navigation, Scrollbar } from "swiper/modules";
import { StyledSwiper, StyledSwiperSlide } from "./index.style";
import StorySlide from "./StorySlide";

function Stories() {
  return (
    <StyledSwiper
      navigation={true}
      modules={[Navigation, Scrollbar]}
      slidesPerView={6}
      spaceBetween={10}
    >
      {Array(15).fill(
        <StyledSwiperSlide>
          <StorySlide />
        </StyledSwiperSlide>,
      )}
    </StyledSwiper>
  );
}

export default Stories;
