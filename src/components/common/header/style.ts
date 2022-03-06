import styled from "@emotion/styled";
import { HeadFootColor } from "../../../style/color";

interface Props {
  modal: boolean;
}

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${HeadFootColor};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
  position: fixed;
  z-index: 1;

  a > img {
    width: 200px;
  }

  .item_box {
    position: absolute;
    right: 0;
    margin: 0 30px;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;

    span:nth-of-type(1) {
      font-size: 16px;
    }

    span:nth-of-type(2) {
      margin-top: 2px;
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

export const FooterWrapper = styled(HeaderWrapper)`
  width: 100vw;
  position: fixed;
  z-index: 1;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  a > img {
    width: 50px;
  }
`;

export const ModalWrapper = styled.div<Props>`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.44);
  display: ${({ modal }) => (modal ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  .box {
    width: 400px;
    height: 250px;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    box-sizing: border-box;
  }
`;
