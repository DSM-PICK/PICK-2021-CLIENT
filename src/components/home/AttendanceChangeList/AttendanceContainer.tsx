import { useState } from "react";
import { useQuery } from "react-query";
import ListDeleteModal from "./AttendanceDelete";
import ListItem from "./AttendanceItem";
import attendance from "../../../utils/api/attendance";
import { BarLoader } from "react-spinners";
import { MainColor } from "../../../style/color";
import * as S from "./style";
import { AttendanceType } from "../../../utils/interface/Attendance";

const ListContainer = () => {
  const [modal, setModal] = useState<boolean>(false);

  const { data: attendanceListValue, isLoading } = useQuery(
    ["attendance_list_value"],
    () => attendance.getAttendance(),
    {
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  if (isLoading)
    return (
      <BarLoader
        color={MainColor}
        height="4px"
        width="100%"
        speedMultiplier={0.5}
      />
    );

  return (
    <>
      <ListDeleteModal modal={modal} setModal={setModal} />
      <S.ListBoxWrapper>
        <S.ListHeader>
          <div className="std">
            <span>학번/이름</span>
          </div>
          <span className="state">상태</span>
          <span className="date">날짜</span>
          <span className="reason">사유</span>
          <span className="teacher">확인교사</span>
        </S.ListHeader>

        <S.ListContent>
          {!!attendanceListValue?.data ? (
            <span style={{ margin: "auto", color: "#818181" }}>
              출결 변동 내역이 입력되지 않았습니다.
            </span>
          ) : (
            attendanceListValue?.data?.map((item: AttendanceType) => (
              <ListItem setModal={setModal} modal={modal} item={item} />
            ))
          )}
        </S.ListContent>
      </S.ListBoxWrapper>
    </>
  );
};

export default ListContainer;
