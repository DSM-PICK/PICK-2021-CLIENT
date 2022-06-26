import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ListDeleteModal from "./AttendanceDelete";
import ListItem from "./AttendanceItem";
import attendance from "../../../../lib/api/mobile/attendance";
import * as S from "./style";
import { AttendanceListType } from "../../../../lib/interface/mobile/Attendance";
import _ from "lodash";

type Props = {
  selected: number;
};

const ListContainer = ({ selected }: Props) => {
  const [modal, setModal] = useState({ modal: false, attendance_id: "" });
  const [attendanceData, setAttendanceData] = useState<any>();

  const { data: attendanceListValue } = useQuery(
    ["attendance_list_value", selected],
    () => attendance.getAttendance(selected),
    {
      enabled: !!selected,
      cacheTime: Infinity,
      staleTime: Infinity,
      suspense: false,
    }
  );

  useEffect(() => {
    setAttendanceData(_.uniqBy(attendanceListValue?.data, "student_id"));
  }, [attendanceListValue?.data, selected]);

  return (
    <>
      <ListDeleteModal
        data={attendanceListValue?.data}
        modal={modal}
        setModal={setModal}
      />
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
          {attendanceData?.length === 0 ? (
            <span style={{ margin: "auto", color: "#818181" }}>
              출결 변동 내역이 입력되지 않았습니다.
            </span>
          ) : (
            attendanceData?.map((item: AttendanceListType, idx: number) => (
              <ListItem
                key={idx}
                setModal={setModal}
                modal={modal}
                item={item}
              />
            ))
          )}
        </S.ListContent>
      </S.ListBoxWrapper>
    </>
  );
};

export default ListContainer;
