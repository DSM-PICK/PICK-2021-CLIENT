import { useRecoilValue } from "recoil";
import { date, dateValue } from "../../../../../modules/mobile/atom/calendar";
import { teacherListSelector } from "../../../../../modules/mobile/selector/teacher";
import * as S from "../style";
import { useMutation, useQuery, useQueryClient } from "react-query";
import teacherApi from "../../../../../lib/api/mobile/teacher";
import schedule from "../../../../../lib/api/mobile/schedule/scheduleApi";
import { toast } from "react-toastify";
import { TeacherFloorType, TeacherType } from "../../../../../lib/interface/mobile/teacher";
import { AxiosError } from "axios";

const TeacherChange = () => {
  const queryClient = useQueryClient();
  const teacherList = useRecoilValue(teacherListSelector);
  const baseDate = useRecoilValue(date);
  const dateContent = useRecoilValue(dateValue);

  const { data: teacherFloor } = useQuery(
    ["teacher_floor", baseDate],
    () => teacherApi.getTeacherApi(baseDate.format("YYYY-MM-DD")),
    {
      enabled: !!dateContent,
      cacheTime: Infinity,
      staleTime: Infinity,
      suspense: false,
      retry: false,

      onError: (e: AxiosError) => {
        if (e.response?.status === 404) {
        }
      },
    }
  );

  const { mutate: patchTeacherHandle } = useMutation(
    ({ floor, id }: any) => schedule.patchTeacher(baseDate.format("YYYY-MM-DD"), floor, id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("teacher_floor");
        queryClient.invalidateQueries("schedule_list");
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
                  onClick={() => patchTeacherHandle({ floor: i, id: item.teacher_id })}
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
      {teacherFloor?.data?.teachers?.length > 0 ? (
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
