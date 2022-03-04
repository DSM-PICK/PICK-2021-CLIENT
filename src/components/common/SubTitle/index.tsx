import styled from "@emotion/styled";
import { MainColor } from "../../../style/color";

interface Props {
  title: string;
}

const SubTitle = ({ title }: Props) => {
  const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 5px;
    border-bottom: 3px solid ${MainColor};
    width: fit-content;
  `;

  return <Title>{title}</Title>;
};

export default SubTitle;
