import Post from "../Post";
import { StyledMainContainer } from "./CenterBar.style";
import NewStatus from "../NewStatus";
import Stories from "../Stories";

export default function CenterBar() {
  return (
    <StyledMainContainer>
      <Stories></Stories>
      <NewStatus></NewStatus>
      <Post></Post>
    </StyledMainContainer>
  );
}
