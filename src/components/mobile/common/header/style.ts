import styled from "@emotion/styled";
import { MainColor } from "../../../../style/color";

interface Props {
  modal: boolean;
}

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;

  background: #ffffff;
  box-shadow: 0px -3px 20px rgba(200, 200, 200, 0.56);
  border-radius: 0px 0px 20px 20px;

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
  background: #ffffff;
  box-shadow: 0px -3px 20px rgba(200, 200, 200, 0.25);
  border-radius: 20px 20px 0px 0px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      color: #6f828c;
      font-weight: 600;
    }

    > img {
      margin-bottom: 5px;
      width: 30px;
    }
  }
`;

export const ModalWrapper = styled.div<Props>`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.44);
  display: ${({ modal }) => (modal ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 400px;
  height: 250px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 20px;

  > img {
    width: 200px;
  }

  > span {
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
  }

  .btn_box {
    display: flex;
    gap: 20px;

    button {
      padding: 6px 20px;
      border-radius: 15px;
      font-size: 18px;
      border: none;
      background: ${MainColor};
      color: white;
      filter: drop-shadow(0px 2px 5px rgba(153, 153, 153, 0.25));

      :nth-of-type(1) {
        background: #c7c7c7;
      }
    }
  }
`;
