import { useState } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { Close } from "../../../../assets";
import locationApi from "../../../../lib/api/mobile/location/locationApi";
import { moveModal } from "../../../../modules/mobile/atom/attendance";
import * as S from "./style";

const MoveModal = () => {
  const [selected, setSelected] = useState<number>(0);
  const [modal, setModal] = useRecoilState(moveModal);
  const [selectedPlace, setSelectedPlace] = useState<string>("");

  const place = [
    {
      id: 1,
      place: "2층",
    },
    {
      id: 2,
      place: "3층",
    },
    {
      id: 3,
      place: "4층",
    },
    {
      id: 4,
      place: "5층",
    },
    {
      id: 5,
      place: "특별실",
    },
    {
      id: 6,
      place: "직접입력",
    },
  ];

  const { data: placeValue } = useQuery(
    ["place_value", selected],
    () => locationApi.getLocationFloor(selected),
    {
      enabled: !!selected,
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  const selectedMent = () => {
    if (selectedPlace) {
      return (
        <>
          <span>
            {modal.gcn} {modal.student_name} 학생 {selectedPlace} 이동을
            맞으신가요?
          </span>
          <button>출석하기</button>
        </>
      );
    } else {
      return (
        <>
          <span>
            {modal.gcn} {modal.student_name} 학생 이동 교실을 선택해주세요.
          </span>
          <button>출석하기</button>
        </>
      );
    }
  };

  return (
    <S.ModalWrapper modal={modal.open}>
      <S.ModalBox>
        <h1>이동 교실 선택</h1>
        <img
          src={Close}
          alt="닫기 아이콘"
          onClick={() => setModal({ ...modal, open: false })}
        />
        <S.PlaceWrapper>
          <S.Placebar>
            <span>
              {modal.gcn} {modal.student_name}
            </span>
            <ul>
              {place.map((place, index) => (
                <li
                  key={index}
                  onClick={() => setSelected(place.id)}
                  style={{ color: place.id === selected ? "#267dff" : "" }}
                >
                  {place.place}
                </li>
              ))}
            </ul>
          </S.Placebar>
          <S.PlaceContent>
            {placeValue?.data?.map((place: any) => (
              <li key={place.id} onClick={() => setSelectedPlace(place.name)}>
                {place.name}
              </li>
            ))}
          </S.PlaceContent>
        </S.PlaceWrapper>
        <S.AttendanceButton>{selectedMent()}</S.AttendanceButton>
      </S.ModalBox>
    </S.ModalWrapper>
  );
};

export default MoveModal;
