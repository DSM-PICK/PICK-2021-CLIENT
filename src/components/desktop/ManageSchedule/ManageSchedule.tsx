import { FC } from "react";
// import Calendar from "./Calendar/Calendar";
// import * as S from "./styles";
// import ChooseTeacher from "./ChooseTeacher/ChooseTeacher";
// import { useRecoilState } from "recoil";
// import { scheduleEditStatus } from "../../state/atom/Schedule";

const ManageSchedule: FC = (): JSX.Element => {
  //   const [editStatus, setEditStatus] =
  //     useRecoilState<boolean>(scheduleEditStatus);

  //   return (
  //     <S.Wrapper>
  //       <S.MSContainer>
  //         <S.CTContainer>
  //           <S.PageTitle>일정관리</S.PageTitle>
  //           <ChooseTeacher editStatus={editStatus} />
  //           <S.ButtonContainer>
  //             <S.DownloadSchedule
  //               type="button"
  //               style={editStatus ? { display: "none" } : { display: "block" }}
  //               value={"일정 받기"}
  //             />
  //             <S.EditSchedule
  //               value={editStatus ? "완료" : "일정수정"}
  //               type="button"
  //               onClick={() => setEditStatus(!editStatus)}
  //             />
  //           </S.ButtonContainer>
  //         </S.CTContainer>
  //         <Calendar editStatus={editStatus} />
  //       </S.MSContainer>
  //     </S.Wrapper>
  //   );
  // };
  return <div>hi</div>;
};

export default ManageSchedule;
