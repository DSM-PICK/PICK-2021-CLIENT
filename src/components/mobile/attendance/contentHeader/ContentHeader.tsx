import { AttendanceType } from "../../../../lib/interface/mobile/Attendance";
import * as S from "./style";

interface Props {
  info: AttendanceType;
}

const ContentHeader = ({ info }: Props) => {
  return (
    <S.ContentWrapper>
      <S.TitleWrapper>
        <span className="class-name">{info?.class_name}</span>
        <span className="place">{info?.location_name}</span>
      </S.TitleWrapper>
      <S.SubTitleWrapper>
        <span>학생 수 : {info?.student_list.length}명</span>
        {info?.head_name && <span>부장 : {info?.head_name}</span>}
      </S.SubTitleWrapper>
    </S.ContentWrapper>
  );
};

export default ContentHeader;
