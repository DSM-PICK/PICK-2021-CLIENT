import React from "react";
import * as S from "./styles";
type pageInfoValue = {
  pageName: string;
};
const PageInfo: React.FC<pageInfoValue> = ({ pageName }) => {
  return (
    <S.BtnContainer>
      {pageName}
      <S.PageMoveBtn>{"<"}</S.PageMoveBtn>
      2/2
      <S.PageMoveBtn>{">"}</S.PageMoveBtn>
    </S.BtnContainer>
  );
};

export default PageInfo;
