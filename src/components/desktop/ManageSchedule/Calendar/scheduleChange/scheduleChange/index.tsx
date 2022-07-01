import * as S from "../style";
import { StateChangeHook } from "../../../../../../utils/stateChangeHook";
import { UseMutateFunction } from "react-query";
import { FC } from "react";
import { AxiosResponse } from "axios";

interface Props {
  stateValue: { name: "SELF_STUDY" | "MAJOR" | "AFTER_SCHOOL"; floor: number };
  patchScheduleHandle: UseMutateFunction<
    AxiosResponse<any, any>,
    unknown,
    "SELF_STUDY" | "MAJOR" | "AFTER_SCHOOL",
    unknown
  >;
  postScheduleHandle: UseMutateFunction<
    AxiosResponse<any, any>,
    unknown,
    "SELF_STUDY" | "MAJOR" | "AFTER_SCHOOL",
    unknown
  >;
  hasSchedule: boolean;
}

const ScheduleChange: FC<Props> = ({
  stateValue,
  patchScheduleHandle,
  postScheduleHandle,
  hasSchedule,
}) => {
  if (stateValue) {
    return (
      <S.StateWrapper>
        <div className="state_wrap">
          <span>{stateValue ? StateChangeHook(stateValue.name) : "일정을 추가해주세요"}</span>
        </div>
        <ul className="state_list">
          <li
            onClick={() => {
              hasSchedule ? patchScheduleHandle("SELF_STUDY") : postScheduleHandle("SELF_STUDY");
            }}
          >
            자습
          </li>
          <li
            onClick={() => {
              hasSchedule
                ? patchScheduleHandle("AFTER_SCHOOL")
                : postScheduleHandle("AFTER_SCHOOL");
            }}
          >
            방과후
          </li>
          <li
            onClick={() => {
              hasSchedule ? patchScheduleHandle("MAJOR") : postScheduleHandle("MAJOR");
            }}
          >
            동아리
          </li>
        </ul>
      </S.StateWrapper>
    );
  }

  return <></>;
};

export default ScheduleChange;
