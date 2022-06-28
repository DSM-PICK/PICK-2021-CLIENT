import styled from "@emotion/styled";

export const MainWrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;

  .location_box {
    margin-top: 80px;
    position: relative;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 4%;
  box-sizing: border-box;
`;

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  overflow-y: scroll;
  margin-top: 30px;
  padding: 10px 0;
`;

export const StudentList = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 18px;

  span {
    width: 20%;
    text-align: center;
  }
`;

export const StudentListTitle = styled(StudentList)`
  border-bottom: 2px solid #ff6e04;
  padding-bottom: 15px;
`;

// custom checkBox
export const CheckBoxContainer = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #dadada;
  border-radius: 10px;

  :hover {
    cursor: pointer;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  input[type="checkbox"]:checked + label {
    background-color: #ff6e04;
  }
  input[type="checkbox"] + label {
    width: 20px;
    height: 20px;
    border-radius: 5px;
  }
  input[type="checkbox"] {
    display: none;
  }
`;

export const CheckPoint = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  outline: none;
  border: none;
`;
export const Title = styled.div`
  font-size: 18px;
  width: 20%;
  text-align: center;
`;

export const StudentSelect = styled.select`
  padding: 7px 10px;
  width: 140px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  border-radius: 12px;
  text-align: center;
  font-size: 15px;
  outline: none;
  border: 1px solid #dadada;
`;

export const StdStateList = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
