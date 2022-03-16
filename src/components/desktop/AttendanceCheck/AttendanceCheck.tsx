import { FC, useEffect } from "react";
import Calendar from "../Calendar/Calendar";
import * as S from "./styles";
import Arrow from "../../../assets/icon/arrow";
import { CDateValue, CModal } from "../../../modules/desktop/atom/ATCheck";
import { useRecoilState } from "recoil";
import { COLOR } from "../../../style/color";

//출석 조회
const AttendanceCheck: FC = (): JSX.Element => {
  const date = new Date();
  const [isCOpen, setIsCOpen] = useRecoilState<boolean>(CModal);
  const [cdateValue, setCDateValue] = useRecoilState<string>(CDateValue);

  useEffect(() => {
    setCDateValue(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );
  }, []);

  return (
    <div>
      <S.ACContainer>
        <S.Title>출석 조회</S.Title>
        <S.ACBox>
          <S.ChooseBox>
            <S.dateText>날짜</S.dateText>
            <S.ChooseDate>
              <S.Date
                onClick={() => {
                  setIsCOpen(!isCOpen);
                }}
                color={COLOR.black}
              >
                {`${cdateValue.split("-")[0]}년 ${cdateValue.split("-")[1]}월 ${
                  cdateValue.split("-")[2]
                }일`}
              </S.Date>
              <Calendar isOpen={isCOpen} index={2} />
              <S.DateIcon
                onClick={() => {
                  setIsCOpen(!isCOpen);
                }}
                rotate={isCOpen ? "0" : "-180deg"}
              >
                <Arrow />
              </S.DateIcon>
            </S.ChooseDate>
          </S.ChooseBox>
        </S.ACBox>
      </S.ACContainer>
    </div>
  );
};

export default AttendanceCheck;
