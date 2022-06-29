import { useRecoilValue, useSetRecoilState } from "recoil";
import { date } from "../../../../../modules/mobile/atom/calendar";
import * as S from "../style";
import { modal } from "../../../../../modules/mobile/atom/schedule";
import schedule from "../../../../../lib/api/mobile/schedule/scheduleApi";
import { toast } from "react-toastify";
import { StateChangeHook } from "../../../../../utils/stateChangeHook";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AxiosError } from "axios";

const ScheduleChange = () => {
  const queryClient = useQueryClient();
  const baseDate = useRecoilValue(date);
  const setModalOpen = useSetRecoilState(modal);

  // 일정에 대한 state : 방과후 / 동아리 / 자습
  const { data: scheduleValue } = useQuery(
    ["state_value", baseDate],
    () => schedule.getScheduleDate(baseDate.format("YYYY-MM-DD")),
    {
      enabled: !!baseDate,
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

  const { mutate: patchScheduleHandle } = useMutation(
    (state: "SELF_STUDY" | "MAJOR" | "AFTER_SCHOOL") =>
      schedule.patchSchedule(baseDate.format("YYYY-MM-DD"), state),
    {
      onSuccess: () => {
        setModalOpen(false);
        queryClient.invalidateQueries("state_value");
        queryClient.invalidateQueries("scehdule_list");
        toast.success("일정이 변경되었습니다.");
      },
      onError: () => {
        setModalOpen(true);
        toast.error("일정 변경에 실패했습니다.");
      },
    }
  );

  return (
    <S.StateWrapper>
      {scheduleValue?.data ? (
        <>
          <div className="state_wrap">
            <span>{StateChangeHook(scheduleValue?.data?.name)}</span>
          </div>
          <ul className="state_list">
            <li onClick={() => patchScheduleHandle("SELF_STUDY")}>자습</li>
            <li onClick={() => patchScheduleHandle("AFTER_SCHOOL")}>방과후</li>
            <li onClick={() => patchScheduleHandle("MAJOR")}>동아리</li>
          </ul>
        </>
      ) : (
        <p style={{ color: "#707070", textAlign: "center" }}>
          오늘 등록된 일정이 없습니다!
        </p>
      )}
    </S.StateWrapper>
  );
};

export default ScheduleChange;
