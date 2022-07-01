import { useRecoilState, useRecoilValue } from "recoil";
import { modal } from "../../../../../modules/mobile/atom/schedule";
import * as S from "./style";
import { date } from "../../../../../modules/mobile/atom/calendar";
import { DateChangeHook } from "../../../../../utils/dateChangeHook";
import ScheduleChange from "./scheduleChange";
import TeacherChange from "./teacherChange";
import { FC, useState } from "react";
import {
  useMutation,
  useQuery,
  RefetchOptions,
  RefetchQueryFilters,
  QueryObserverResult,
} from "react-query";
import scheduleApi from "../../../../../lib/api/mobile/schedule/scheduleApi";
import teacherApi from "../../../../../lib/api/mobile/teacher";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { TeacherFloorType } from "../../../../../lib/interface/mobile/teacher";

interface Props {
  refetchScheduleList: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<AxiosResponse<any, any>, unknown>>;
}

const ChangeModal: FC<Props> = ({ refetchScheduleList }) => {
  const [modalOpen, setModalOpen] = useRecoilState(modal);
  const baseDate = useRecoilValue(date);
  const teacherListWhenUndefined = [
    {
      teacher_name: "___",
      teacher_id: "dsm00",
      floor: 2,
    },
    {
      teacher_name: "___",
      teacher_id: "dsm00",
      floor: 3,
    },
    {
      teacher_name: "___",
      teacher_id: "dsm00",
      floor: 4,
    },
  ];
  const [teacherFloorArr, setTeacherFloorArr] = useState<TeacherFloorType[] | undefined>(
    teacherListWhenUndefined
  );
  const [hasTeacher, setHasTeacher] = useState([false, false, false]);
  const [hasSchedule, setHasSchedule] = useState(false);

  const { refetch: refetchTeacherFloor } = useQuery(
    ["teacher_floor", baseDate],
    () => teacherApi.getTeacherApi(baseDate.format("YYYY-MM-DD")),
    {
      suspense: false,
      retry: false,
      onSuccess: (response) => {
        setHasTeacher([false, false, false]);
        if (response.data.teachers.length >= 3) {
          setTeacherFloorArr(response.data.teachers);
          setHasTeacher([true, true, true]);
        } else if (response.data.teachers.length <= 0) {
          setTeacherFloorArr(teacherListWhenUndefined);
          setHasTeacher([false, false, false]);
        } else {
          setTeacherFloorArr(response.data.teachers);

          setHasTeacher((prev) => {
            const arr = [...prev];
            response.data.teachers.map(
              (value: { teacher_id: string; teacher_name: string; floor: number }) => {
                arr[value.floor - 2] = true;
              }
            );
            return arr;
          });
        }
      },
      onError: () => {
        setTeacherFloorArr(teacherListWhenUndefined);
        setHasTeacher([false, false, false]);
      },
    }
  );

  const { mutate: patchTeacherHandle } = useMutation(
    ({ floor, id }: { floor: number; id: string }) =>
      scheduleApi.patchTeacher(baseDate.format("YYYY-MM-DD"), floor, id),
    {
      onSuccess: () => {
        setModalOpen(false);
        toast.success("자습감독 선생님이 교체되었습니다.");
        refetchScheduleList();
        refetchTeacherFloor();
        setHasTeacher([false, false, false]);
      },
      onError: () => {
        toast.error("자습감독 선생님 교체를 실패했습니다.");
      },
    }
  );

  const { mutate: postTeacherHandle } = useMutation<any, AxiosError, any>(
    ({ floor, date, teacher_id }: { floor: number; date: string; teacher_id: string }) =>
      scheduleApi.postTeacher(floor, date, teacher_id),
    {
      onSuccess: () => {
        toast.success("자습감독 선생님이 추가되었습니다.");
        refetchScheduleList();
        refetchTeacherFloor();
        setModalOpen(false);
        setHasTeacher([false, false, false]);
      },
      onError: (err, variable) => {
        if (err.response?.status === 409) {
          toast.error("해당 층에 이미 자습감독님이 존재합니다.");
        }
        if (err.response?.status === 404) {
          postScheduleHandle("SELF_STUDY");
          postTeacherHandle(variable);
          setHasSchedule(true);
        }
      },
      retry: false,
    }
  );

  const { data: stateValue } = useQuery(
    ["state_value", baseDate],
    () => scheduleApi.getScheduleDate(baseDate.format("YYYY-MM-DD")),
    {
      suspense: false,
      retry: false,
      onSuccess: () => {
        setHasSchedule(true);
      },
      onError: (err: AxiosError) => {
        if (err.response?.status === 404) {
          setHasSchedule(false);
        }
      },
    }
  );

  const { mutate: patchScheduleHandle } = useMutation(
    (state: "SELF_STUDY" | "MAJOR" | "AFTER_SCHOOL") =>
      scheduleApi.patchSchedule(baseDate.format("YYYY-MM-DD"), state),
    {
      onSuccess: () => {
        setModalOpen(false);
        refetchScheduleList();
        toast.success("일정이 변경되었습니다.");
      },
      onError: () => {
        setModalOpen(false);
        toast.error("일정 변경에 실패했습니다.");
      },
    }
  );

  const { mutate: postScheduleHandle } = useMutation(
    (name: "SELF_STUDY" | "MAJOR" | "AFTER_SCHOOL") =>
      scheduleApi.postSchedule(baseDate.format("YYYY-MM-DD"), name),
    {
      onSuccess: () => {
        setModalOpen(false);
        toast.success("일정 추가 성공");
        refetchScheduleList();
      },
    }
  );

  return (
    <S.ChangeWrapper modalOpen={modalOpen} onClick={() => setModalOpen(false)}>
      <S.ChangeModalContainer modalOpen={modalOpen} onClick={(e) => e.stopPropagation()}>
        <div className="title_wrap">
          <h1>일정 추가</h1>
          <span className="info_text">
            자습 감독 선생님과 해당 날의 자습 상태를 변경 할 수 있습니다.
          </span>
        </div>
        <span className="date">{DateChangeHook(baseDate.format("YYYY-MM-DD"))}</span>
        <TeacherChange
          teacherFloorArr={teacherFloorArr}
          patchTeacherHandle={patchTeacherHandle}
          hasTeacher={hasTeacher}
          postTeacherHandle={postTeacherHandle}
        />
        <ScheduleChange
          stateValue={stateValue?.data ?? { name: "SELF_STUDY", period: 2 }}
          patchScheduleHandle={patchScheduleHandle}
          postScheduleHandle={postScheduleHandle}
          hasSchedule={hasSchedule}
        />
        <S.ButtonWrapper>
          <button onClick={() => setModalOpen(false)}>완료</button>
        </S.ButtonWrapper>
      </S.ChangeModalContainer>
    </S.ChangeWrapper>
  );
};
export default ChangeModal;
