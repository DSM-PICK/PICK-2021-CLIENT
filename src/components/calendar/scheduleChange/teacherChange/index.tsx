import { useRecoilValue } from "recoil";
import { date, dateValue } from "../../../../modules/atom/calendar";
import { teacherListSelector } from "../../../../modules/selector/teacher";
import * as S from "../style";
import { useMutation, useQuery, useQueryClient } from "react-query";
import teacherApi from "../../../../utils/api/teacher";
import schedule from "../../../../utils/api/schedule/scheduleApi";
import { toast } from "react-toastify";
import {
  TeacherFloorType,
  TeacherType,
} from "../../../../utils/interface/teacher";

const TeacherChange = () => {
  const queryClient = useQueryClient();

  const teacherList = useRecoilValue(teacherListSelector);
  const baseDate = useRecoilValue(date);
  const dateContent = useRecoilValue(dateValue);

  // 층별 선생님 리스트
  const { data: teacherFloor } = useQuery(
    ["teacher_floor", baseDate],
    () => teacherApi.getTeacherApi(baseDate.format("YYYY-MM-DD")),
    {
      enabled: !!dateContent,
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  console.log(teacherFloor?.data);
  const { mutate: patchTeacherHandle } = useMutation(
    ({ floor, id }: any) =>
      schedule.patchTeacher(baseDate.format("YYYY-MM-DD"), floor, id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("teacher_floor");
        queryClient.invalidateQueries("scehdule_list");
        toast.success("자습감독 선생님이 교체되었습니다.");
      },
      onError: () => {
        toast.error("자습감독 선생님 교체를 실패했습니다.");
      },
    }
  );

  const teacherListHandler = (list: TeacherType[]) => {
    const num = [2, 3, 4];
    for (let i = 2; i <= 4; i++) {
      return (
        <>
          {num.map((i) => (
            <div className="teacher_wrap" key={i}>
              {list?.map((item) => (
                <span
                  key={item.teacher_id}
                  onClick={() =>
                    patchTeacherHandle({ floor: i, id: item.teacher_id })
                  }
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
      {teacherFloor?.data?.teachers?.length !== 0 ? (
        <S.TeacherInfoWrapper>
          <S.FloorItemBox>
            {teacherFloor?.data?.teachers?.map((item: TeacherFloorType) => {
              return (
                <div className="teacher_wrap" key={item.floor}>
                  <span>{item.floor}층</span>
                  <span>{item.teacher_name} 선생님</span>
                </div>
              );
            })}
          </S.FloorItemBox>
          <S.TeacherItemBox>{teacherListHandler(teacherList)}</S.TeacherItemBox>
        </S.TeacherInfoWrapper>
      ) : (
        <p style={{ color: "#707070", textAlign: "center" }}>
          오늘은 자습감독 선생님이 없습니다. 얼른 퇴근하세요!
        </p>
      )}
    </>
  );
};

export default TeacherChange;
