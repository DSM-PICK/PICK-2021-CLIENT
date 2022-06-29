import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { getAtCheck } from "../../../lib/api/desktop/BeforeAtCheck";
import {
  afterschoolClass,
  afterSchoolDay,
} from "../../../modules/desktop/atom/AfterSchool";
import * as S from "./styles";
const StudentStatus = () => {
  const day = useRecoilValue(afterSchoolDay);
  const daysclass = useRecoilValue(afterschoolClass);
  useEffect(() => {
    if (day !== "" && daysclass !== -1) {
      getAtCheck(daysclass, day).then((res) =>
        console.log(res.data.student_list)
      );
    }
  });
  return (
    <S.StudentStatus>
      날짜와 동아리실을 선택하시면 <br /> 해당 자습날의 출석 조회를 할 수
      있습니다.
    </S.StudentStatus>
  );
};

export default StudentStatus;
