import { useRecoilState, useRecoilValue } from "recoil";
import { date } from "../../../../../modules/mobile/atom/calendar";
import * as S from "../style";
import { modal } from "../../../../../modules/mobile/atom/schedule";
import schedule from "../../../../../lib/api/mobile/schedule/scheduleApi";
import { toast } from "react-toastify";
import { StateChangeHook } from "../../../../../utils/stateChangeHook";
import { useMutation, useQuery, useQueryClient } from "react-query";

const ScheduleChange = () => {
  const queryClient = useQueryClient();
  const baseDate = useRecoilValue(date);
  const [modalOpen, setModalOpen] = useRecoilState(modal);

  // 일정에 대한 state : 방과후 / 동아리 / 자습
  const { data: stateValue } = useQuery(
    ["state_value", baseDate],
    () => schedule.getScheduleDate(baseDate.format("YYYY-MM-DD")),
    {
      enabled: !!baseDate && modalOpen,
      cacheTime: Infinity,
      staleTime: Infinity,
      suspense: false,
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
      <div className="state_wrap">
        <span>{StateChangeHook(stateValue?.data?.name)}</span>
      </div>
      <ul className="state_list">
        <li onClick={() => patchScheduleHandle("SELF_STUDY")}>자습</li>
        <li onClick={() => patchScheduleHandle("AFTER_SCHOOL")}>방과후</li>
        <li onClick={() => patchScheduleHandle("MAJOR")}>동아리</li>
      </ul>
    </S.StateWrapper>
  );
};

export default ScheduleChange;
