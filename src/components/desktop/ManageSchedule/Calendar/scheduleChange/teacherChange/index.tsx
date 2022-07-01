import { useRecoilValue } from "recoil";
import { teacherListSelector } from "../../../../../../modules/mobile/selector/teacher";
import * as S from "../style";
import { UseMutateFunction } from "react-query";
import { TeacherFloorType, TeacherType } from "../../../../../../lib/interface/mobile/teacher";
import { FC } from "react";
import { AxiosResponse } from "axios";
import { date } from "../../../../../../modules/mobile/atom/calendar/index";

interface Props {
  teacherFloorArr: TeacherFloorType[] | undefined;
  patchTeacherHandle: UseMutateFunction<
    AxiosResponse<any, any>,
    unknown,
    { id: string; floor: number },
    unknown
  >;
  hasTeacher: boolean[];
  postTeacherHandle: UseMutateFunction<
    AxiosResponse<any, any>,
    unknown,
    {
      floor: number;
      date: string;
      teacher_id: string;
    },
    unknown
  >;
}

const TeacherChange: FC<Props> = ({
  teacherFloorArr,
  patchTeacherHandle,
  hasTeacher,
  postTeacherHandle,
}) => {
  const teacherList = useRecoilValue(teacherListSelector);
  const baseDate = useRecoilValue(date);

  const teacherListHandler = (list: TeacherType[]) => {
    const num = [2, 3, 4];

    for (let i = 0; i < 3; i++) {
      return (
        <>
          {num.map((i) => (
            <div className="teacher_wrap" key={i}>
              {list?.map((item, index) => (
                <span
                  key={index}
                  onClick={() => {
                    hasTeacher[i - 2]
                      ? patchTeacherHandle({ floor: i, id: item.teacher_id })
                      : postTeacherHandle({
                          floor: i,
                          teacher_id: item.teacher_id,
                          date: baseDate.format("YYYY-MM-DD"),
                        });
                  }}
                  className="teacher_element"
                >
                  {item.name}
                </span>
              ))}
            </div>
          ))}
        </>
      );
    }
  };

  return (
    <>
      <S.TeacherInfoWrapper>
        <S.FloorItemBox>
          {teacherFloorArr?.map((item: TeacherFloorType, index: number) => {
            return (
              <S.TeacherWrap
                key={`${baseDate}${item.teacher_name}${index}`}
                gridStart={item.floor - 1}
                gridEnd={item.floor}
              >
                <span>{item.floor ?? 2}층</span>
                <span>{item.teacher_name ?? "에러"} 선생님</span>
              </S.TeacherWrap>
            );
          })}
        </S.FloorItemBox>
        <S.TeacherItemBox>{teacherListHandler(teacherList)}</S.TeacherItemBox>
      </S.TeacherInfoWrapper>
    </>
  );
};

export default TeacherChange;
