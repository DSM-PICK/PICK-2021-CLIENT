import styled from "@emotion/styled";
import { COLOR } from "../../../../style/color";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 70% 30%;
`;

export const ChooseTeacherContainer = styled.div`
  height: 65%;
`;

export const TeacherNameBox = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid ${COLOR.black};
  padding: 0 0 16px 0;
  margin-bottom: 24px;
`;

export const TeacherName = styled.div`
  font-size: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 500;
`;

export const FloorNameBox = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const FloorName = styled.div`
  font-size: 18px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CTBody = styled.div`
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 10px;
`;

export const TeacherNames = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: center;
`;

// ---------------------------------------------------------

export const AfterSchoolTypeContainer = styled.div``;

export const TypeTitleContainer = styled.div`
  height: 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid ${COLOR.black};
  margin-bottom: 16px;
`;

export const TypeTitle = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 24px;
`;

export const TypeList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Type = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
`;
