import { useRecoilValue, useSetRecoilState } from "recoil";
import { modal } from "../../../../../modules/mobile/atom/schedule";
import * as S from "./style";
import scheduleApi from "../../../../../lib/api/mobile/schedule/scheduleApi";
import { date } from "../../../../../modules/mobile/atom/calendar";
import axios from "axios";

const CalendarChangeBtn = () => {
  const setModalOpen = useSetRecoilState(modal);
  const baseDate = useRecoilValue(date);

  const downloadSchedule = async () => {
    const data = await scheduleApi.getSchedule(
      Number(baseDate.format("YYYY")),
      Number(baseDate.format("MM"))
    );
    const url = window.URL.createObjectURL(new Blob([data.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      `${baseDate.format("YYYY")}년_${baseDate.format("MM")}월_자습감독명단.xlsx`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <S.ChangeBtnWrap>
      <button id="getSchedule" onClick={downloadSchedule}>
        일정 받기
      </button>
      <div className="item_center">
        일정 교체를 원하시면 일정 교체를 선택한 후
        <br /> 변경하실 일정을 선택해주세요.
      </div>
      <button onClick={() => setModalOpen(true)}>일정 교체</button>
    </S.ChangeBtnWrap>
  );
};

export default CalendarChangeBtn;
