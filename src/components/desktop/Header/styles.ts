import styled from "@emotion/styled";
import { COLOR } from "../../../style/color";
import { Link } from "react-router-dom";
export const Container = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  padding: 0 8%;
  box-sizing: border-box;
  background-color: ${COLOR.white};
  border-bottom: 1px solid #e5e5e5;
`;
export const RegisterContainer = styled(Container)`
  width: 700px;
  padding: 0;
`;
export const RegisterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Register = styled(Link)`
  width: 110px;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  box-sizing: border-box;
  padding-top: 24px;
  color: black;
  text-decoration: none;
`;
export const LogoutBtn = styled.div`
  width: 84px;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  box-sizing: border-box;
  padding-top: 24px;
  color: red;
`;
export const RegisterBotLine = styled.div`
  width: 70px;
  border: 2px solid black;
`;
