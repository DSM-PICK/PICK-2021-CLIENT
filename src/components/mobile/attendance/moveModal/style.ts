import styled from "@emotion/styled";

interface Props {
  modal: boolean;
}

export const ModalWrapper = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.33);
  z-index: 3;
  display: ${({ modal }) => (modal ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  position: absolute;
  width: 450px;
  height: 550px;
  background-color: white;
  box-shadow: 0px 7px 11px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  img {
    position: absolute;
    top: 0;
    right: 0;
    margin: 15px;
  }
`;

export const PlaceWrapper = styled.div`
  width: 100%;
  height: 350px;
  padding: 0 8%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AttendanceButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  line-height: 26px;
  text-align: center;

  button {
    margin-top: 20px;
    font-size: 18px;
    background: #0a84ff;
    border-radius: 5px;
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.14));
    outline: none;
    padding: 10px;
    border: none;
    color: white;
  }
`;

export const Placebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 100%;
  font-size: 24px;
  font-weight: 700;

  ul > li,
  span {
    margin: 15px 0;
    text-align: end;
  }

  span {
    color: #267dff;
  }
`;

export const PlaceContent = styled.div`
  align-items: center;
  gap: 20px;
  padding: 20px;
  overflow: auto;
  width: 55%;
  height: 100%;
  background: #f7f7f7;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;
