import { Swiper, SwiperSlide } from "swiper/react";
import styled from "@emotion/styled";
import "swiper/css";
import "swiper/css/navigation";

export const StyledSwiper = styled(Swiper)({
  width: "100%",
  height: "300px",
});

export const StyledSwiperSlide = styled(SwiperSlide)({
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
});
