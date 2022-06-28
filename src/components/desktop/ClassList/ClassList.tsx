import React, { useState, useEffect } from "react";
import {
  getAfterSchool,
  getMajorClub,
} from "../../../lib/api/desktop/Afterschool";
import * as S from "./styles";
const floorArr = ["4층", "3층", "2층", "기타"];
interface PlaceType {
  major_id?: string;
  major_name?: string;
  after_school_id?: number;
  name?: string;
  teacher_name?: string;
  location_name: string;
  floor: number;
  head_name?: string;
}
const ClassList = () => {
  const [afterschool, setAfterschool] = useState<number>(1);
  const [floor, setFloor] = useState<number>(0);
  const [placeInfo, setPlaceInfo] = useState<any>({
    name: "",
    teacher: "",
  });
  const [place, setPlace] = useState<PlaceType[]>([
    {
      after_school_id: 0,
      name: "",
      teacher_name: "",
      location_name: "",
      floor: 0,
    },
  ]);
  useEffect(() => {
    setFloor(0);
    if (afterschool === 1) {
      getAfterSchool().then((res: any) => {
        setPlace(res.data);
      });
    } else if (afterschool === 2) {
      getMajorClub().then((res: any) => setPlace(res.data));
    }
  }, [afterschool]);

  const changeFloor = (index: number) => {
    setFloor(index);
  };
  const changePlace = (name: any, teacher_name: any) => {
    setPlaceInfo({ name: name, teacher: teacher_name });
  };
  return (
    <S.BtnContainer>
      <S.ClubState>
        <S.ClassName>{placeInfo.name}</S.ClassName>
        <S.ClubStateItem display={placeInfo.teacher !== ""}>
          담당교사:{placeInfo.teacher}
        </S.ClubStateItem>
        <S.ClubStateItem display={true}>총 학생:19명</S.ClubStateItem>
      </S.ClubState>
      <S.ClubLocationWrapper>
        <S.Location>
          <span style={{ color: "black", cursor: "default" }}>층</span>
          {floorArr.map((floorname, i) => (
            <S.FloorName
              key={i}
              onClick={() => changeFloor(i)}
              select={floor === i}
            >
              {floorname}
            </S.FloorName>
          ))}
        </S.Location>
        <S.Location>
          {place.map((pn, i) => (
            <S.FloorName
              key={i}
              floor={floor !== pn.floor}
              select={
                afterschool === 1
                  ? pn.location_name === placeInfo.name
                  : pn.major_name === placeInfo.name
              }
              onClick={() =>
                afterschool === 1
                  ? changePlace(pn.name, pn.teacher_name)
                  : changePlace(pn?.major_name, "")
              }
            >
              {pn.location_name}
            </S.FloorName>
          ))}
        </S.Location>
      </S.ClubLocationWrapper>
      <S.BtnWrapper>
        <S.BtnItem onClick={() => setAfterschool(1)} select={afterschool === 1}>
          방과후
        </S.BtnItem>
        <S.BtnItem onClick={() => setAfterschool(2)} select={afterschool === 2}>
          전공
        </S.BtnItem>
        <S.BtnItem onClick={() => setAfterschool(3)} select={afterschool === 3}>
          자습
        </S.BtnItem>
      </S.BtnWrapper>
    </S.BtnContainer>
  );
};

export default ClassList;
