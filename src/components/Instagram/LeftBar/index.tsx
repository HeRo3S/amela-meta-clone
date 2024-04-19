import { LeftBarContainer } from "./index.style";
import TopList from "./TopList";
import BottomList from "./BottomList";

function LeftBar() {
  return (
    <LeftBarContainer>
      <TopList />
      <BottomList />
    </LeftBarContainer>
  );
}

export default LeftBar;
