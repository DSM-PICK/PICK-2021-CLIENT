import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { pickLogo } from "../../../../assets";
import { teacherId } from "../../../../constance";
import { teacherInfoSelector } from "../../../../modules/mobile/selector/teacher";
import * as S from "./style";

interface Props {
  modal: boolean;
  setModal: any;
}

const LogoutModal = ({ modal, setModal }: Props) => {
  const info = useRecoilValue(teacherInfoSelector(teacherId));

  const logoutHandle = () => {
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("access_token");
    toast.success("로그아웃 되었습니다.");

    setTimeout(() => {
      window.location.href = "/";
      setModal(false);
    }, 1000);
  };

  return (
    <S.ModalWrapper modal={modal}>
      <S.ModalContent>
        <img src={pickLogo} alt="logo" />
        <span>
          {info.name} 선생님! <br /> 오늘 하루도 수고하셨습니다 😉
        </span>
        <div className="btn_box">
          <button onClick={() => setModal(false)}>돌아가기</button>
          <button onClick={logoutHandle}>퇴근하기</button>
        </div>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default LogoutModal;
