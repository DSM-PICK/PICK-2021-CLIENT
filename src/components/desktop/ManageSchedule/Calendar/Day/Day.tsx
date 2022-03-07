import { FC, useEffect, useState } from "react";
import * as S from "./styles";
import { COLOR } from "../../../../../style/color";
import {
  selectedIndex,
  scheduleEditStatus,
} from "../../../../../modules/desktop/atom/Schedule";
import { useRecoilState, useRecoilValue } from "recoil";

interface Props {
  fullDate: string;
  dayType: string;
  floor2: string;
  floor3: string;
  floor4: string;
  Today: string;
  month: number;
  year: number;
  index: number;
}

const Day: FC<Props> = ({
  fullDate,
  dayType,
  floor2,
  floor3,
  floor4,
  Today,
  index,
}) => {
  const [date, setDate] = useState<string | number>("");
  const [type, setType] = useState<string>();
  const [colorIndex, setColorIndex] = useRecoilState(selectedIndex);
  const editStatus = useRecoilValue(scheduleEditStatus);

  const getDate = () => {
    const newDate = (fullDate.split("-")[2] || "").split("");
    setDate(
      fullDate != "" ? parseInt(newDate[0]) * 10 + parseInt(newDate[1]) : ""
    );
  };

  const getType = () => {
    switch (dayType) {
      case "AFTER_SCHOOL":
        setType("자습");
        break;
    }
  };

  useEffect(() => {
    getDate();
    getType();
  }, []);

  return (
    <S.Days
      border={
        index === colorIndex && editStatus ? `${COLOR.red}` : `${COLOR.grey}`
      }
      onClick={() => {
        editStatus ? setColorIndex(index) : setColorIndex(colorIndex);
      }}
      cursor={editStatus ? "pointer" : "default"}
    >
      <S.DayTypeContainer>
        <S.Date
          backgroundColor={
            Today === fullDate ? `${COLOR.orange}` : `${COLOR.white}`
          }
          color={Today === fullDate ? `${COLOR.white}` : `${COLOR.black}`}
        >
          {date}
        </S.Date>
        <S.DayType
          color={Today === fullDate ? `${COLOR.orange}` : `${COLOR.black}`}
        >
          {type}
        </S.DayType>
      </S.DayTypeContainer>
      <S.InputContainer>
        <S.TeacherInput>{floor2}</S.TeacherInput>
        <S.TeacherInput>{floor3}</S.TeacherInput>
        <S.TeacherInput>{floor4}</S.TeacherInput>
      </S.InputContainer>
    </S.Days>
  );
};

export default Day;
