import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { patchPassword } from "../../../lib/api/mobile/Password";
import * as S from "./styles";
const Password: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
    checkpw: "",
    code: "",
  });
  const [errmsg, setErrmsg] = useState("");
  const { id, pw, checkpw } = inputs;
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const change = {
      ...inputs,
      [e.target.name]: e.target.value,
    };
    setInputs(change);
  };
  const changePw = () => {
    if (pw !== checkpw) {
      setErrmsg("비밀번호가 일치하지 않습니다.");
      return;
    }
    patchPassword(pw, id)
      .then((res: any) => {
        navigate("/");
      })
      .catch((err: any) => setErrmsg("아이디가 일치하지 않습니다."));
  };
  return (
    <S.Container>
      <S.LoginContainer>
        <S.Title>비밀번호 변경</S.Title>
        <S.LoginForm>
          <S.LoginInput
            placeholder={"아이디"}
            type="text"
            name="id"
            value={id}
            onChange={onChangeInput}
          />
          <S.LoginInput
            placeholder={"새 비밀번호"}
            type="password"
            name="pw"
            value={pw}
            onChange={onChangeInput}
          />
          <S.LoginInput
            placeholder={"새 비밀번호 재입력"}
            type="password"
            name="checkpw"
            value={checkpw}
            onChange={onChangeInput}
          />
          <S.LoginSubmit
            type="submit"
            value="비밀번호 변경"
            onClick={(e) => {
              e.preventDefault();
              changePw();
            }}
          />
        </S.LoginForm>
        <S.LoginFail>{errmsg}</S.LoginFail>
      </S.LoginContainer>
    </S.Container>
  );
};

export default Password;
