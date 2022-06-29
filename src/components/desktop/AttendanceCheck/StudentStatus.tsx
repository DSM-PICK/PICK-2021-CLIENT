import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { getAtCheck } from "../../../lib/api/desktop/BeforeAtCheck";
import {
  afterschoolClass,
  afterSchoolDay,
} from "../../../modules/desktop/atom/AfterSchool";
import {
  statusFilter,
  studentFilter,
} from "../../../modules/desktop/atom/ATCheck";
import * as S from "./styles";
const StudentStatus = () => {
  const day = useRecoilValue(afterSchoolDay);
  const daysclass = useRecoilValue(afterschoolClass);
  const stuFilter = useRecoilValue(studentFilter);
  const staFilter = useRecoilValue(statusFilter);
  const [student, setStudent] = useState<any>(
    <p>
      날짜와 동아리실을 선택하시면 <br /> 해당 자습날의 출석 조회를 할 수
      있습니다.
    </p>
  );
  useEffect(() => {
    if (day.day !== "" && daysclass !== -1) {
      getAtCheck(daysclass, day.day).then((res) => {
        setStudent(<></>);
        let renderArr: JSX.Element[] = [];
        res.data.student_list.map((stu: any, i: number) => {
          if (stu.student_attendance.length !== 0) {
            let j = 0,
              arr = [],
              isAt = 0;
            arr.push(
              <S.StudentInfo key={i}>{stu.gcn + " " + stu.name}</S.StudentInfo>
            );
            for (let i = 11 - day.period; i <= 10; i++) {
              if (
                stu.student_attendance[j]?.state !== "출석" &&
                stu.student_attendance[j]?.period === i
              ) {
                arr.push(
                  <S.StudentMove isChange={true} key={String(i) + String(j)}>
                    {stu.student_attendance[j]?.state}
                  </S.StudentMove>
                );

                j++;
              } else {
                arr.push(
                  <S.StudentMove isChange={false} key={String(i) + String(j)}>
                    출석
                  </S.StudentMove>
                );
                isAt++;
              }
            }
            if (isAt !== day.period) {
              let isTrue = false;
              arr.forEach((i) => {
                if (i?.props?.children === staFilter) {
                  isTrue = true;
                }
                return;
              });
              renderArr.push(
                <S.StudentStatusContainer
                  id="studentContainer"
                  isFilter={
                    (Number(arr[0]?.props?.children.substring(0, 1)) ===
                      stuFilter ||
                      stuFilter === 0) &&
                    (staFilter === "전체" || isTrue)
                  }
                >
                  {arr}
                </S.StudentStatusContainer>
              );
            }
          }
        });
        if (renderArr.length === 0) {
          setStudent(<p>당일의 변경사항이 없습니다.</p>);
        } else {
          setStudent(renderArr);
        }
      });
    }
  }, [day, daysclass, staFilter, stuFilter]);
  return <S.StudentStatus id="studentContainer">{student}</S.StudentStatus>;
};

export default StudentStatus;
