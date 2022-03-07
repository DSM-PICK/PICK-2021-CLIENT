import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-hooks/rules-of-hooks
const history = useNavigate();
export const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("teacher_id");
    alert("로그아웃 되었습니다.");
    history("/login");
  };