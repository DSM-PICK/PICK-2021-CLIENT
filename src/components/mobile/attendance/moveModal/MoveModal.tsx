import moment from "moment";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useRecoilState, useResetRecoilState } from "recoil";
import { Close } from "../../../../assets";
import { place } from "../../../../constance";
import attendanceApi from "../../../../lib/api/mobile/attendance";
import locationApi from "../../../../lib/api/mobile/location/locationApi";
import { moveModal } from "../../../../modules/mobile/atom/attendance";
import * as S from "./style";

type Props = {
  locationId: any;
};

const MoveModal = ({ locationId }: Props) => {
  const date = moment();
  const queryClient = useQueryClient();

  const [selected, setSelected] = useState<number>(2);
  const [modal, setModal] = useRecoilState(moveModal);
  const resetModal = useResetRecoilState(moveModal);
  const [selectedPlace, setSelectedPlace] = useState<string>("");
  const [attendance, setAttendance] = useState<any>(null);

  const { data: placeValue } = useQuery(
    ["place_value", selected],
    () => locationApi.getLocationFloor(selected),
    {
      enabled: !!selected,
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  const { mutate: attendancePatchHandle } = useMutation(
    () => attendanceApi.patchAttendance(modal),
    {
      onSuccess: () => {
        toast.success("학생 상태가 변경되었습니다.");
        queryClient.invalidateQueries("attendance_data");
        setSelectedPlace("");
        resetModal();
      },
      onError: () => {
        toast.error("학생 상태가 변경에 실패했습니다.");
        queryClient.invalidateQueries("attendance_data");
        setSelectedPlace("");
        resetModal();
      },
    }
  );

  const { mutate: attendancePostHandle } = useMutation(
    () => attendanceApi.postAttendance(attendance),
    {
      onSuccess: () => {
        toast.success("학생 상태가 변경되었습니다.");
        queryClient.invalidateQueries("attendance_data");
        setSelectedPlace("");
        resetModal();
      },
      onError: () => {
        toast.error("학생 상태가 변경에 실패했습니다.");
        queryClient.invalidateQueries("attendance_data");
        setSelectedPlace("");
        resetModal();
      },
    }
  );

  const attendanceHandle = () => {
    if (modal.attendance_id) {
      attendancePatchHandle();
    } else {
      attendancePostHandle();
    }
  };

  const selectedMent = () => {
    if (selectedPlace) {
      return (
        <span>
          {modal.gcn} {modal.name} 학생 {selectedPlace} 이동이 맞으신가요?
        </span>
      );
    } else {
      return (
        <span>
          {modal.gcn} {modal.name} 학생 이동 교실을 선택해주세요.
        </span>
      );
    }
  };

  useEffect(() => {
    setAttendance({
      ...modal,
      end_period: modal.period,
      start_period: modal.period,
      reason: null,
      end_date: date.format("YYYY-MM-DD"),
      start_date: date.format("YYYY-MM-DD"),
    });
  }, [modal]);

  useEffect(() => {
    setModal({
      ...modal,
      location_id: Number(locationId),
    });
  }, [locationId]);

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
              {modal.gcn} {modal.name}
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
            {placeValue?.data.length > 0 ? (
              <>
                {placeValue?.data?.map((place: any) => {
                  return (
                    <li
                      key={place.id}
                      onClick={() => {
                        setSelectedPlace(place.name);
                        setModal({ ...modal, location_id: place.id });
                      }}
                      style={{
                        color: place.name === selectedPlace ? "#267dff" : "",
                      }}
                    >
                      {place.name}
                    </li>
                  );
                })}
              </>
            ) : (
              <span style={{ color: "gray" }}>등록된 장소가 없습니다.</span>
            )}
          </S.PlaceContent>
        </S.PlaceWrapper>
        <S.AttendanceButton>
          {selectedMent()}
          <button onClick={attendanceHandle}>출석하기</button>
        </S.AttendanceButton>
      </S.ModalBox>
    </S.ModalWrapper>
  );
};

export default MoveModal;
