import { useMutation, useQueryClient } from "react-query";
import { Close } from "../../../../assets";
import * as S from "./style";
import attendance from "../../../../lib/api/mobile/attendance";
import { toast } from "react-toastify";
import { AttendanceListType } from "../../../../lib/interface/mobile/Attendance";

interface Props {
  modal: any;
  setModal: any;
  data: AttendanceListType[];
}

const ListDeleteModal = ({ modal, setModal, data }: Props) => {
  const queryClient = useQueryClient();

  // TODO : period 제대로 값 찍히면 삭제 API 로직 맞춰봐야함
  const deleteBtnClickHandle = () => {
    setModal({ ...modal, modal: false });
    data
      ?.filter(
        (std) => std?.name === modal?.name && std?.period === modal?.period
      )
      .map((attendance) => deleteAttendance(attendance.id));
  };

  const { mutate: deleteAttendance } = useMutation(
    ["deleteAttendance"],
    (attendance_id: number) => attendance.deleteAttendance(attendance_id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("attendance_list_value");
        toast.success("출석을 삭제하셨습니다.");
      },
    }
  );

  return (
    <S.ModalWrapper modal={modal.modal}>
      <div className="box">
        <img
          src={Close}
          alt="닫기 아이콘"
          className="close-icon"
          onClick={() => setModal({ ...modal, modal: !modal })}
        />
        <span>출결 변동 사항을 삭제하시겠습니까?</span>
        <div className="button-wrapper">
          <button onClick={deleteBtnClickHandle}>삭제</button>
          <button onClick={() => setModal(!modal)}>취소</button>
        </div>
      </div>
    </S.ModalWrapper>
  );
};

export default ListDeleteModal;
