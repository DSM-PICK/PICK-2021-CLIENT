import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { moveModal } from "../../../../modules/mobile/atom/attendance";
import StateList from "./StateListItem";
import * as S from "./style";

const StateContainer = (student: any) => {
  const [stateSelect, setStateSelect] = useState<boolean>(false);
  const [state, setState] = useState<string>("");
  const [modal, setModal] = useRecoilState(moveModal);
  const stateListRef = useRef<any>(null);

  const list = ["출석", "이동", "외출", "무단", "현체", "귀가"];

  useEffect(() => {
    if (state === "이동")
      setModal({
        open: true,
        student_name: student.student.student_name,
        student_id: student.student.student_id,
        gcn: student.student.gcn,
      });
    else
      setModal({
        open: false,
        student_name: student.student.student_name,
        student_id: student.student.student_id,
        gcn: student.student.gcn,
      });
  }, [state]);

  // 1. 학생 리스트에서 선택된 학생 리스트를 추출한다.
  // 2. 추출한 학생의 상태를 바꿔준다.

  const modalOff = (e: any) => {
    if (stateListRef.current === e.target) {
      console.log(false);
      setStateSelect(false);
    }
  };

  return (
    <S.StateWrapper state={state} ref={stateListRef}>
      <div className="state" onClick={() => setStateSelect(!stateSelect)}>
        <span>{state}</span>
      </div>

      <S.StateSelectWrapper
        stateSelect={stateSelect}
        onClick={(e) => modalOff(e)}
      >
        {list.map((item, index) => (
          <StateList
            key={index}
            item={item}
            setState={setState}
            setStateSelect={setStateSelect}
            stateSelect={stateSelect}
            modalOff={modalOff}
          />
        ))}
      </S.StateSelectWrapper>
    </S.StateWrapper>
  );
};

export default StateContainer;
