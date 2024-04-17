import { Navigation, Scrollbar } from "swiper/modules";
import { StyledSwiper, StyledSwiperSlide } from "./Stories.style";
import StoryCard, { CreateStoryCard } from "../StoryCard/";

function Stories() {
  return (
    <StyledSwiper
      navigation={true}
      modules={[Navigation, Scrollbar]}
      slidesPerView={4}
      spaceBetween={10}
    >
      <StyledSwiperSlide>
        <CreateStoryCard />
      </StyledSwiperSlide>
      {Array(7).fill(
        <StyledSwiperSlide>
          <StoryCard />
        </StyledSwiperSlide>,
      )}
    </StyledSwiper>
  );
}

export default Stories;
