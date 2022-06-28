import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { COLOR } from "../../../style/color";

export const Container = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  img {
    width: 240px;
    height: 56px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 60px;
  }
`;

export const LoginContainer = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  position: relative;
`;

export const Title = styled.div`
  font-weight: 400;
  font-size: 32px;
  padding: 16px 0;
  border-bottom: 1px solid #000000;
`;

export const LoginForm = styled.form`
  display: inherit;
  flex-direction: column;
`;

export const LoginInput = styled.input<{type?:string}>`
  height: 60px;
  border: 1px solid #767676;
  margin-top: 25px;
  outline: none;
  padding: 0 24px;
  font-size: 18px;
  font-family: initial;

`;

export const UserHelpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto 0;
`;

export const SavdIdCheckBox = styled.div`
  display: flex;
  label {
    cursor: pointer;
  }
`;

export const Label = styled.label`
  width: 20px;
  height: 20px;
  position: relative;
  margin-right: 9px;
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  cursor: pointer;
  border: 1px solid black;
`;

export const Input = styled.input`
  width: 24px;
  height: 24px;
  display: none;
  border-radius: 5px;
  &:checked ~ div::after {
    content: "";
    color: black;
    position: absolute;
    left: 4px;
    top: 4px;
    width: 14px;
    height: 14px;
    background-color: #ff6e04;
  }
`;

export const ForgotPassword = styled.div`
  cursor: pointer;
`;

export const LoginSubmit = styled.input`
  height: 60px;
  background-color: #ff6e04;
  color: white;
  font-size: 24px;
  font-weight: 100;
  line-height: 60px;
  align-items: center;
  cursor: pointer;
  margin: 16px 0 12px 0;
  outline: none;
  border: none;
  text-decoration: none;
`;

export const Register = styled(Link)`
  text-decoration: none;
  height: 60px;
  color: black;
  border: 1px solid black;
  font-size: 24px;
  font-weight: 100;
  line-height: 60px;
  margin-top: 12px;
  cursor: pointer;
`;

export const LoginFail = styled.div`
  color: ${COLOR.red};
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`;
