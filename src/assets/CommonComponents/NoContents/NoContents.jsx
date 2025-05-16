import NoContentsImage from "../../Images/noContents.svg";
import { Container, Image } from "./NoContents.style";

const NoContents = () => {
  return (
    <Container>
      <Image src={NoContentsImage} alt="해당하는 내용이 없어요" />
    </Container>
  );
};

export default NoContents;
