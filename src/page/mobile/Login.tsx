import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseURL } from "../../lib/api/mobile/axios";
import { User } from "../../lib/interface/mobile/user";
import { Logo } from "../../assets";
import styled from "@emotion/styled";

const Login = () => {
  const navigate = useNavigate();
  const [btnColor, setBtnColor] = useState<boolean>(false);
  const [inputs, setInputs] = useState<User>({
    id: "",
    password: "",
  });

  const { id, password } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e: React.FormEventHandler<HTMLFormElement> | any) => {
    e.preventDefault();

    axios
      .post(`${baseURL}/teacher/login`, { id, password })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("refresh_token", res.data.refresh_token);
        localStorage.setItem("teacher_id", res.data.teacher_id);
        toast.success("로그인에 성공했습니다.");
        navigate("/home");
      })
      .catch((e) => {
        console.log(e);
        toast.error("정보를 다시 입력해주세요");
      });

    setInputs({ id: "", password: "" });
  };

  useEffect(() => {
    id.length > 0 && password.length >= 8
      ? setBtnColor(true)
      : setBtnColor(false);

    const reg = "/[~!@#$%;'^,&*()_+|</>=>`?:{[}]/g";
    if (!reg.includes(password)) {
      console.log("ddd");
    }
  }, [id.length, password, password.length]);

  return (
    <LoginWrapper>
      <LoginBox onSubmit={(e) => onSubmit(e)} btnColor={btnColor}>
        <img src={Logo} alt="픽로고" />
        <div className="input_box">
          <input
            type="text"
            value={id}
            name="id"
            onChange={(e) => onChange(e)}
            placeholder="id"
          />
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => onChange(e)}
            placeholder="password"
          />
        </div>
        <button>login</button>
      </LoginBox>
    </LoginWrapper>
  );
};

export default Login;

export const LoginWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.form<{ btnColor: boolean }>`
  width: 50%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & img {
    width: 70%;
    margin: 0 auto;
  }

  .input_box {
    display: flex;
    flex-direction: column;

    & input {
      font-family: "Noto Sans KR", sans-serif;
      padding: 15px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 1px solid #c9c9c9;
      font-size: 16px;
    }
  }

  & button {
    padding: 15px;
    background: ${({ btnColor }) => (btnColor ? "#277dfe" : "#f1f1f1")};
    color: ${({ btnColor }) => (btnColor ? "white" : "")};
    outline: none;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 2px 6px rgb(0 0 0 / 25%);
    font-size: 16px;
    transition: all 0.5s;
  }
`;
