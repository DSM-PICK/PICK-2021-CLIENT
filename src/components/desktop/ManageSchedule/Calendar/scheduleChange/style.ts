import styled from "@emotion/styled";
import { MainColor } from "../../../../../style/color";

interface Props {
  modalOpen?: boolean;
}

export const ChangeWrapper = styled.div<Props>`
  width: 100vw;
  height: 100vh;
  display: ${({ modalOpen }) => (modalOpen ? "flex" : "none")};
  position: absolute;
  top: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const TeacherInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FloorItemBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid #dfdfdf;
  padding: 2rem 0;
`;

export const TeacherWrap = styled.div<{ gridStart: number; gridEnd: number }>`
  display: grid;
  grid-column-start: ${(props) => props.gridStart};
  grid-column-end: ${(props) => props.gridEnd};
  place-items: center;

  span:nth-of-type(1) {
    font-size: 20px;
    margin-bottom: 5px;
  }
  span:nth-of-type(2) {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const ChangeModalContainer = styled.div<Props>`
  display: inherit;
  flex-direction: column;
  justify-content: space-between;
  min-width: 700px;
  min-height: 750px;
  background: #ffffff;
  box-shadow: 0px 0px 14px rgb(164 164 164 / 25%);
  border-radius: 5px;
  bottom: 0;
  z-index: 3;
  padding: 4rem;
  box-sizing: border-box;
  transition: all 1s;

  .title_wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .info_text {
      font-size: 16px;
      color: #707070;
    }
  }

  .date {
    margin-top: 20px;
    font-size: 22px;
  }
`;

export const TeacherItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  .teacher_wrap {
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 200px;
    overflow: scroll;
    flex: 1;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    .teacher_element {
      cursor: pointer;
      padding: 5px 0;

      &:hover {
        background-color: ${MainColor};
        color: white;
        transition: all 0.1s;
      }
    }

    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }

    span {
      font-size: 20px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: 32px;

  & button {
    width: 48%;
    padding: 8px 0;
    margin-bottom: 10px;
    box-sizing: border-box;
    background: #e6e6e6;
    box-shadow: 0px 1px 8px rgba(142, 142, 142, 0.25);
    border-radius: 5px;
    outline: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    position: absolute;
    right: 0;
  }

  button:nth-of-type(1) {
    background: ${MainColor};
  }
`;

export const StateWrapper = styled.div`
  .state_wrap {
    padding: 10px 0;
    border-bottom: 1px solid #dfdfdf;

    & span {
      font-size: 24px;
      font-weight: 600;
    }
  }

  .state_list {
    display: flex;
    flex-direction: column;

    & li {
      padding: 10px 0;
      font-size: 20px;
      cursor: pointer;
    }
  }
`;
