import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { PickMainLogo } from "../../../utils/assets";

const SplashScreen = () => {
  const navigate = useNavigate();

  return (
    <MainWrapper
      onClick={() => {
        navigate("/login");
      }}
    >
      <img src={PickMainLogo} alt="" />

      <span>화면을 클릭해주세요.</span>
    </MainWrapper>
  );
};

export default SplashScreen;

export const MainWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
  }
  span {
    font-size: 22px;
    color: #8a8a8a;
    bottom: -200px;
    position: relative;
  }
`;