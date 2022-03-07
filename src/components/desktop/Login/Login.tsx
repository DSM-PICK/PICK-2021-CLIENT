import { FC, useRef, useState } from "react";
import * as S from "./styles";
import { loginRequest } from "../../../lib/api/desktop/Login";
import { pickLogo } from "../../../assets";

const Login: FC = (): JSX.Element => {
  const [display, setDisplay] = useState<string>("none");
  const idRef = useRef<HTMLInputElement>(null);
  const [id, setId] = useState<string | any>(
    window.localStorage.getItem("pick_id")
      ? window.localStorage.getItem("pick_id")
      : ""
  );
  const pwRef = useRef<HTMLInputElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const requestLoginApi = () => {
    loginRequest(idRef.current?.value, pwRef.current?.value)
      .then((res: any) => {
        if (res.status === 200 && checkboxRef.current?.checked) {
          localStorage.setItem("pick_id", id);
        }
        localStorage.setItem("teacher_id", res.data.teacher_id);
        window.location.href = "/";
      })
      .catch((err: any) => {
        if (err.response.status === 401 || err.response.status === 403) {
          setDisplay("default");
        }
        if (err.response.status === 400) {
          alert("아이디 또는 비밀번호를 입력해주세요.");
        }
      });
  };

  return (
    <S.Container>
      <img src={pickLogo} alt="" />
      <S.LoginContainer>
        <S.Title>로그인</S.Title>
        <S.LoginForm>
          <S.LoginInput
            placeholder={"아이디"}
            type="text"
            onChange={(e) => setId(e.target.value)}
            ref={idRef}
            value={id}
          />
          <S.PasswordInput
            placeholder={"비밀번호"}
            type="password"
            ref={pwRef}
          />
          <S.UserHelpContainer>
            <S.SavdIdCheckBox>
              <S.Label htmlFor="checkbox">
                <S.Input type="checkbox" id="checkbox" ref={checkboxRef} />
                <S.Box />
              </S.Label>
              <label htmlFor="checkbox">아이디 저장</label>
            </S.SavdIdCheckBox>
            <S.ForgotPassword>비밀번호를 잃으셨나요?</S.ForgotPassword>
          </S.UserHelpContainer>
          <S.LoginSubmit
            type="submit"
            value="로그인"
            onClick={(e) => {
              e.preventDefault();
              requestLoginApi();
            }}
          />
        </S.LoginForm>
        <S.LoginFail display={display}>
          아이디 또는 비밀번호가 일치하지 않습니다.
        </S.LoginFail>
      </S.LoginContainer>
    </S.Container>
  );
};

export default Login;
