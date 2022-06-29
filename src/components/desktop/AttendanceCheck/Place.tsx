import React, { useEffect, useState } from "react";
import {
  getAfterSchool,
  getClass,
  getMajorClub,
} from "../../../lib/api/desktop/Afterschool";
import {
  afterschoolClass,
  afterSchoolDay,
  afterSchoolStatus,
} from "../../../modules/desktop/atom/AfterSchool";
import { useRecoilState, useRecoilValue } from "recoil";
import * as S from "./styles";
const floorArr = [
  { floorName: "4층", value: 4 },
  { floorName: "3층", value: 3 },
  { floorName: "2층", value: 2 },
  { floorName: "기타", value: 0 },
];
type placeType = {
  id: number;
  floor: number;
  name: string;
  location_name: string;
  head_name: string;
  count: number;
};
const changeType = (arr: any, day: string) => {
  if (day === "방과후") {
    arr.forEach((a: any) => {
      a.id = a.after_school_id;
      delete a.after_school_id;
      a.head_name = a.teacher_name;
      delete a.teacher_name;
    });
  } else if (day === "동아리") {
    arr.forEach((a: any) => {
      a.id = a.major_id;
      delete a.major_id;
      a.name = a.major_name;
      delete a.major_name;
    });
  } else if (day === "자습") {
    arr.forEach((a: any) => {
      a.location_name = a.name;
      a.head_name = a.teacher_name;
      delete a.teacher_name;
    });
  }
  return arr;
};
const Place = () => {
  const [placeInfo, setPlaceInfo] = useState<placeType[]>([]);
  const [place, setPlace] = useState<placeType | undefined>(undefined);
  const [floor, setFloor] = useState<number>();
  const [placeId, setPlaceId] = useRecoilState(afterschoolClass);
  const today = useRecoilValue(afterSchoolStatus);
  const date = useRecoilValue(afterSchoolDay);
  useEffect(() => {
    setPlace(undefined);
    if (today === "동아리") {
      getMajorClub()
        .then((res) => {
          const data = changeType(res.data, "동아리");
          setPlaceInfo(data);
        })
        .catch((err) => console.log(err));
    } else if (today === "방과후") {
      getAfterSchool()
        .then((res) => {
          const data = changeType(res.data, "방과후");
          setPlaceInfo(data);
        })
        .catch((err) => console.log(err));
    } else if (today === "자습") {
      getClass().then((res) => {
        const data = changeType(res.data, "자습");
        setPlaceInfo(data);
      });
    }
  }, [today]);
  return (
    <S.Place>
      <S.PlaceBox isClick={date.day !== ""}>
        <S.PlaceInfoContainer isChoice={place === undefined}>
          <S.PlaceTitle>{place?.name}</S.PlaceTitle>
          <S.PlaceInfo>
            {today === "동아리" ? "동아리장" : "담당교사"} : {place?.head_name}
          </S.PlaceInfo>
          <S.PlaceInfo>총 학생 : {place?.count}명</S.PlaceInfo>
        </S.PlaceInfoContainer>

        <S.PlaceChoiceBox>
          <S.PlaceChoiceBoxTitle>
            <span>층</span>
            <span>교실명</span>
          </S.PlaceChoiceBoxTitle>
          <S.PlaceChoiceValueBox>
            <S.PlaceChoiceValue>
              {floorArr.map((fr, index) => (
                <span
                  key={index}
                  onClick={() => setFloor(fr.value)}
                  style={
                    floor === fr.value
                      ? { color: "#ff6e04" }
                      : { color: "#767676" }
                  }
                >
                  {fr.floorName}
                </span>
              ))}
            </S.PlaceChoiceValue>
            <S.PlaceChoiceValue>
              {placeInfo.map((pl, index) => (
                <span
                  key={index}
                  onClick={() => {
                    setPlace(pl);
                    setPlaceId(pl.id);
                  }}
                  style={{ display: pl.floor !== floor ? "none" : "block" }}
                >
                  {pl.location_name}
                </span>
              ))}
            </S.PlaceChoiceValue>
          </S.PlaceChoiceValueBox>
        </S.PlaceChoiceBox>
      </S.PlaceBox>
    </S.Place>
  );
};

export default Place;
