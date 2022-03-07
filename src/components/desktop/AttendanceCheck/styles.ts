import styled from "@emotion/styled";

export const ACContainer = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 60px;
`;

export const Title = styled.div`
  font-size: 24px;
  display: inline-block;
`;

export const ACBox = styled.div`
  width: 1280px;
  display: grid;
  grid-template-columns: 40% 60%;
`;

export const ChooseBox = styled.div`
  width: 100%;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const dateText = styled.div`
  font-size: 18px;
`;

export const ChooseDate = styled.div`
  width: 36%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  cursor: pointer;
`;

export const Date = styled.div<{color: string}>`
  color: ${props => props.color};
  transition: all 0.4s ease-out;
  text-align: center;
  width: 90%;
`;

export const DateIcon = styled.div<{rotate : string}>`
  transform: rotate(${props => props.rotate});
  transition: all 0.2s ease-out;
  position: relative;
  width: 15px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-self: center;
`;
