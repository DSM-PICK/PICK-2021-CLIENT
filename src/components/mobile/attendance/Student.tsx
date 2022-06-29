import { FC } from "react";
import {
  StudentAttendanceDetailType,
  StudentAttendanceType,
} from "../../../lib/interface/mobile/Attendance";
import { MainColor } from "../../../style/color";
import * as S from "./style";

type Props = {
  index: number;
  idx: number;
  changeSelectHandle: any;
  selected: string[];
  student: StudentAttendanceType;
  std: StudentAttendanceDetailType;
  period: number;
};

const Student: FC<Props> = ({
  index,
  idx,
  changeSelectHandle,
  selected,
  student,
  std,
  period,
}) => {
  const isAttendanceHandle = () => {
    if (std?.state === "출석") {
      return " ";
    } else if (std?.state === "이동") {
      return std?.state === "이동" && std?.location_name + " " + std?.state;
    } else {
      return std?.state;
    }
  };

  return (
    <S.StudentSelect
      // id={String(index) + String(idx)}
      onChange={(e) => {
        changeSelectHandle([index, idx], e, student, std?.id);
      }}
      // value={selected[index * 4 + idx]}
      //  value={isAttendanceHandle()}
      style={{
        background:
          std?.state.length > 0 && std?.state !== "출석" ? MainColor : "white",
        color:
          std?.state.length > 0 && std?.state !== "출석" ? "white" : "white",
        border: std?.state.length > 0 && std?.state !== "출석" ? "none" : "",
      }}
    >
      <option value=" " selected>
        {isAttendanceHandle()}
      </option>
      <option value=" ">출석</option>
      <option value="이동">{std?.location_name} 이동</option>
      <option value="외출">외출</option>
      <option value="무단">무단</option>
      <option value="현체">현체</option>
      <option value="귀가">귀가</option>
      <option value="취업">취업</option>
    </S.StudentSelect>
  );
};

export default Student;
