import { StyledMainContainer } from "./index.style";
import Stories from "../Stories";
import Post from "../Post";

export default function CenterBar() {
  return (
    <StyledMainContainer>
      <Stories></Stories>
      {Array(6).fill(<Post></Post>)}
    </StyledMainContainer>
  );
}
