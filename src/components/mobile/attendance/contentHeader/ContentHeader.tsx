import { MajorDetailType } from "../../../../lib/interface/mobile/major";
import * as S from "./style";

interface Props {
  info: MajorDetailType;
}

const ContentHeader = ({ info }: Props) => {
  return (
    <S.ContentWrapper>
      <S.TitleWrapper>
        <span className="class-name">{info?.major_name}</span>
        <span className="place">{info?.location_name}</span>
      </S.TitleWrapper>
      <S.SubTitleWrapper>
        <span>동아리 인원 : {info?.count}명</span>
        <span>부장 : {info?.head_name}</span>
      </S.SubTitleWrapper>
    </S.ContentWrapper>
  );
};

export default ContentHeader;
