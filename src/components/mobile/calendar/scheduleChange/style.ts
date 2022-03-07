import styled from "@emotion/styled";
import { MainColor } from "../../../../style/color";

interface Props {
  modalOpen?: boolean;
}

export const ChangeWrapper = styled.div<Props>`
  display: flex;
  transform: ${({ modalOpen }) =>
    modalOpen ? "translateY(0)" : "translateY(85vh)"};
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 85vh;
  background: #ffffff;
  box-shadow: 0px 0px 14px rgb(164 164 164 / 25%);
  border-radius: 50px 50px 0 0;
  position: absolute;
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

export const TeacherInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FloorItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #dfdfdf;
  padding: 2rem 0;

  .teacher_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;

    span:nth-of-type(1) {
      font-size: 20px;
      margin-bottom: 5px;
    }
    span:nth-of-type(2) {
      font-size: 24px;
      font-weight: 600;
    }
  }
`;

export const TeacherItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 0;

  .teacher_wrap {
    display: flex;
    flex-direction: column;
    height: 200px;
    overflow: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }

    span {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4%;

  & button {
    width: 48%;
    padding: 8px 0;
    margin-bottom: 10px;
    box-sizing: border-box;
    weight: 100%;
    background: #e6e6e6;
    box-shadow: 0px 1px 8px rgba(142, 142, 142, 0.25);
    border-radius: 5px;
    outline: none;
    border: none;
    color: white;
    font-size: 18px;
  }

  button:nth-of-type(2) {
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
    }
  }
`;
