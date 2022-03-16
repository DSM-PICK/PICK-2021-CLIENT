import { FC } from "react";
import * as S from "./styles";

interface Props {
  editStatus: boolean;
}

const ChooseTeacher: FC<Props> = ({ editStatus }): JSX.Element => {
  return (
    <S.Container
      style={editStatus ? { display: "block" } : { display: "none" }}
    >
      <S.ChooseTeacherContainer>
        <S.FloorNameBox>
          <S.FloorName>2층</S.FloorName>
          <S.FloorName>3층</S.FloorName>
          <S.FloorName>4층</S.FloorName>
        </S.FloorNameBox>
        <S.TeacherNameBox>
          <S.TeacherName>이동구</S.TeacherName>
          <S.TeacherName>이동구</S.TeacherName>
          <S.TeacherName>이동구</S.TeacherName>
        </S.TeacherNameBox>
        <S.CTBody>
          <S.TeacherNames>이동구</S.TeacherNames>
        </S.CTBody>
      </S.ChooseTeacherContainer>
      <S.AfterSchoolTypeContainer>
        <S.TypeTitleContainer>
          <S.TypeTitle>동아리</S.TypeTitle>
        </S.TypeTitleContainer>
        <S.TypeList>
          <S.Type>방과후</S.Type>
          <S.Type>자습</S.Type>
        </S.TypeList>
      </S.AfterSchoolTypeContainer>
    </S.Container>
  );
};

export default ChooseTeacher;
