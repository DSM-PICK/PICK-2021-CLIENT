import styled from "@emotion/styled";
import { MainColor } from "../../../../style/color";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .class-name {
    margin-bottom: 10px;
    border-bottom: 2px solid ${MainColor};
    font-size: 28px;
    font-weight: 700;
  }

  .place {
    font-size: 20px;
  }
`;

export const SubTitleWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #707070;
  font-size: 18px;
`;
