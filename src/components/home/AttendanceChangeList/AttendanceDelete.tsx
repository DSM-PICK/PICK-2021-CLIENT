import { Close, Pick } from "../../../utils/assets";
import * as S from "./style";

interface Props {
  modal: boolean;
  setModal: any;
}

const ListDeleteModal = ({ modal, setModal }: Props) => {
  return (
    <S.ModalWrapper modal={modal}>
      <div className="box">
        <img src={Pick} alt="logo" id="logo" />
        <img
          src={Close}
          alt="닫기 아이콘"
          className="close-icon"
          onClick={() => setModal(!modal)}
        />
        <span>출결 변동 사항을 삭제하시겠습니까?</span>

        <div className="button-wrapper">
          <button
            onClick={() => {
              setModal(!modal);
            }}
          >
            삭제
          </button>
          <button onClick={() => setModal(!modal)}>취소</button>
        </div>
      </div>
    </S.ModalWrapper>
  );
};

export default ListDeleteModal;
