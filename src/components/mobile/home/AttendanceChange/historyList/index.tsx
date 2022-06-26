import styled from "@emotion/styled";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import {
  attendanceData,
  attendanceDataList,
} from "../../../../../modules/mobile/atom/attendance";
import { MainColor } from "../../../../../style/color";
import attendanceApi from "../../../../../lib/api/mobile/attendance";
import { Close } from "../../../../../assets";
import { AttendancePostType } from "../../../../../lib/interface/mobile/Attendance";

const EnrollmentHistory = () => {
  const queryClient = useQueryClient();
  
  const attendance = useRecoilValue(attendanceData);
  const resetAttendance = useResetRecoilState(attendanceData);

  //  TODO :  서버 배열 형태로 바뀌면 body값 아래로 변경해야함
  const [attendanceList, setAttendanceList] =
    useRecoilState(attendanceDataList);

  const attendanceFilter = (id: number) => {
    setAttendanceList(attendanceList.filter((item) => item.student_id !== id));
  };

  const { mutate: PostAttendanceHandle } = useMutation(
    () => attendanceApi.postAttendance(attendance),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("attendance_list_value");
        toast.success("출결이 등록되었습니다.");

        resetAttendance();
        setAttendanceList([]);
      },
      onError: () => {
        toast.error("출결 등록에 실패했습니다.");
      },
    }
  );

  return (
    <EnrollmentHistoryWrap
      onSubmit={(e) => {
        e.preventDefault();
        PostAttendanceHandle();
      }}
    >
      <div className="history-list-wrapper">
        {attendanceList.length > 0 ? (
          <>
            {attendanceList.map((item: AttendancePostType, index) => (
              <div key={index} className="history-wrapper">
                <div className="std-info">
                  <span>{item.state}</span>
                  <span>{item.name}</span>
                </div>
                <span>{item.reason}</span>
                <img
                  src={Close}
                  alt="삭제버튼"
                  onClick={() => attendanceFilter(item.student_id ?? 0)}
                />
              </div>
            ))}
          </>
        ) : (
          <p style={{ color: "#818181", textAlign: "center" }}>
            학생을 추가해주세요.
          </p>
        )}
      </div>
      <button>출결 변경 등록</button>
    </EnrollmentHistoryWrap>
  );
};

const EnrollmentHistoryWrap = styled.form`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .history-list-wrapper {
    overflow: auto;
    margin-bottom: 7px;
  }

  .history-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 18px;
    padding: 3px 0;

    .std-info {
      width: 50%;

      span:nth-of-type(1) {
        margin-right: 10px;
      }
    }

    img {
      width: 15px;
    }
  }

  & button {
    font-size: 16px;
    padding: 10px 15px;
    outline: none;
    border: none;
    border-radius: 20px;
    width: 100%;
    background: ${MainColor};
    color: white;
    filter: drop-shadow(0px 2px 5px rgba(153, 153, 153, 0.25));
  }
`;

export default EnrollmentHistory;
