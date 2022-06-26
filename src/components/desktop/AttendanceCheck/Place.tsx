import React from "react";
import * as S from "./styles";
const floorArr = ["4층", "3층", "2층", "기타"];
const placeArr = ["교실(3-1)", "세미나실(2-1)", "교실(3-2)", "세미나실(2-2)"];
const Place = () => {
  return (
    <S.Place>
      <S.PlaceBox>
        <S.PlaceTitle>GRAM</S.PlaceTitle>
        <S.PlaceInfo>담당교사 : 신요셉</S.PlaceInfo>
        <S.PlaceInfo>총 학생 : 19명</S.PlaceInfo>
        <S.PlaceChoiceBox>
          <S.PlaceChoiceBoxTitle>
            <span>층</span>
            <span>교실명</span>
          </S.PlaceChoiceBoxTitle>
          <S.PlaceChoiceValueBox>
            <S.PlaceChoiceValue>
              {floorArr.map((floor, index) => (
                <span key={index}>{floor}</span>
              ))}
            </S.PlaceChoiceValue>
            <S.PlaceChoiceValue>
              {placeArr.map((place, index) => (
                <span key={index}>{place}</span>
              ))}
            </S.PlaceChoiceValue>
          </S.PlaceChoiceValueBox>
        </S.PlaceChoiceBox>
      </S.PlaceBox>
    </S.Place>
  );
};

export default Place;
