import { useState } from "react";
import { Link } from "react-router-dom";
import { pickLogo } from "../../../../assets";
import LogoutModal from "./LogoutModal";
import * as S from "./style";
import { useQuery } from "react-query";
import request from "../../../../lib/api/mobile/axios";

const Header = () => {
  const [modal, setModal] = useState<boolean>(false);

  const { data: teacherInfo } = useQuery(
    ["teacher_info", localStorage.getItem("teacher_id")],
    () => request(`/teacher/${localStorage.getItem("teacher_id")}/information`),
    {
      enabled: !!localStorage.getItem("teacher_id"),
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  return (
    <>
      <LogoutModal modal={modal} setModal={setModal} />
      <S.HeaderWrapper>
        <Link to="/home">
          <img src={pickLogo} alt="pick로고" title="pick로고" />
        </Link>
        <div className="item_box" onClick={() => setModal(!modal)}>
          <span>감독교사</span>
          <span>{teacherInfo?.data?.name}</span>
        </div>
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
