import { Close, Logo } from "../../../../assets";
import * as S from "./style";

interface Props {
  modal: boolean;
  setModal: any;
}

const LogoutModal = ({ modal, setModal }: Props) => {
  return (
    <S.ModalWrapper modal={modal}>
      <div className="box">
        <img src={Logo} alt="logo" />
        <img src={Close} alt="닫기 버튼" onClick={() => setModal(!modal)} />
      </div>
    </S.ModalWrapper>
  );
};

export default LogoutModal;
