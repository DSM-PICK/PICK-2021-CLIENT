import { Link } from "react-router-dom";
import * as S from "./style";

const AttendanceHeader = () => {
  return (
    <S.HeaderWrapper>
      <Link to="/">{"<"} 홈</Link>
    </S.HeaderWrapper>
  );
};

export default AttendanceHeader;
