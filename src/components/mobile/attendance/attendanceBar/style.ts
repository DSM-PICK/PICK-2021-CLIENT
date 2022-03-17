import styled from "@emotion/styled";

export const SelectBarWrapper = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
  overflow: auto;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const SelectItem = styled.div`
  width: calc(100% / 5);
  min-width: 18vw;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  font-size: 17px;
  font-weight: 700;
  transform: skew(-0.1deg);
`;
