import styled from "@emotion/styled";
import { useState } from "react";
import {
  StateBtnList,
  StateBtnType,
} from "../../../../utils/interface/Attendance/StateBtnType";
import StateBtn from "../../../common/StateBtn";

const StateItem = () => {
  const [selected, setSelected] = useState<number>(1);

  const selectedHandlerColor = (item: StateBtnType) => {
    setSelected(item.id);
  };
  return (
    <EnrollmentItem>
      <SubTitle>종류</SubTitle>
      <div className="field-item">
        {StateBtnList.map((item) => (
          <StateBtn
            key={item.id}
            item={item}
            selected={selected}
            selectedHandlerColor={selectedHandlerColor}
          />
        ))}
      </div>
    </EnrollmentItem>
  );
};

const SubTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  padding: 9px 0;
`;

const EnrollmentItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .field-item {
    display: flex;
  }

  .react-datepicker-wrapper {
    width: auto;
  }

  .example-custom-input {
    background: white;
    border: none;
  }

  .text-input {
    border-bottom: 1px solid black;
    outline: none;
    border: none;
    text-align: center;
    font-size: 18px;
  }
`;

export default StateItem;
