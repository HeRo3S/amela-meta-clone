import { StyledMainContainer } from "./index.style";
import Stories from "../Stories";
import Post from "../Post";

export default function CenterBar() {
  return (
    <StyledMainContainer>
      <Stories></Stories>
      <Post></Post>
    </StyledMainContainer>
  );
}
