import { useMutation, useQueryClient } from "react-query";
import { Close } from "../../../../assets";
import * as S from "./style";
import attendance from "../../../../lib/api/mobile/attendance";
import { toast } from "react-toastify";

interface Props {
  modal: any;
  setModal: any;
}

const ListDeleteModal = ({ modal, setModal }: Props) => {
  const queryClient = useQueryClient();

  const deleteBtnClickHandle = () => {
    deleteAttendance();
    setModal({ ...modal, modal: false });
  };

  const { mutate: deleteAttendance } = useMutation(
    ["deleteAttendance"],
    () => attendance.deleteAttendance(modal.attendance_id),
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
