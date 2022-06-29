import styled from "@emotion/styled";

interface Props {
  modal: boolean;
}

export const MainWrapper = styled.section`
  margin: 8% 0;
  width: 100%;
  height: 100%;
`;

export const SelectButtonWrapper = styled.div`
  margin: 20px 0;
`;

export const ItemButton = styled.span`
  font-size: 22px;
  padding-bottom: 3px;
  margin-right: 15px;
  color: #818181;
`;

export const ListBoxWrapper = styled.div`
  width: 100%;
  height: 230px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0px 3px 10px rgba(163, 163, 163, 0.25);
  border-radius: 20px;

  text-align: center;

  .std {
    width: 20%;
  }

  .state {
    width: 10%;
  }

  .date {
    width: 45%;
  }

  .teacher {
    width: 10%;
  }

  .reason {
    width: 15%;
  }
`;

export const ListHeader = styled.div`
  display: flex;
  width: 100%;
`;

export const ListContent = styled.div`
  margin-top: 15px;
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 82%;
`;

export const StdListItem = styled.div`
  display: flex;
  margin-bottom: 13px;
  font-size: 17px;
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

  .box {
    width: 400px;
    height: 250px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 7px 11px rgb(72 72 72 / 25%);
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #logo {
      margin-top: 20px;
    }
    .close-icon {
      position: absolute;
      right: 0;
      top: 0;
      margin: 10px;
    }

    span {
      font-size: 20px;
      margin: 40px 0;
    }

    .button-wrapper {
      margin-top: 10px;
      display: flex;
      flex-direction: row;

      button {
        margin: 20px;
        filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.14));
        background: #267dff;
        border-radius: 10px;
        padding: 10px 25px;
        font-size: 18px;
        color: white;
        outline: none;
        border: none;
      }
    }
  }
`;
