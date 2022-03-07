import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { teacherInfoSelector } from "../../../../modules/mobile/selector/teacher";
import { teacherId } from "../../../../lib/api/mobile/axios";
import { Logo } from "../../../../assets";
import LogoutModal from "./LogoutModal";
import * as S from "./style";

const Header = () => {
  const [modal, setModal] = useState<boolean>(false);
  const info = useRecoilValue(teacherInfoSelector(teacherId));

  return (
    <>
      <LogoutModal modal={modal} setModal={setModal} />
      <S.HeaderWrapper>
        <Link to="/home">
          <img src={Logo} alt="pick로고" title="pick로고" />
        </Link>
        <div className="item_box" onClick={() => setModal(!modal)}>
          <span>감독교사</span>
          <span>{info?.name}</span>
        </div>
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
