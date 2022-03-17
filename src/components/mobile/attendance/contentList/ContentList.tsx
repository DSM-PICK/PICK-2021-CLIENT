import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { MajorDetailType } from "../../../../lib/interface/mobile/major";
import { selectCount } from "../../../../modules/mobile/atom/attendance";
import { checkList_atom } from "../../../../modules/mobile/atom/attendance/studentAttendance";
import StdListItem from "./StdListItem";
import * as S from "./style";

interface Props {
  info: MajorDetailType;
  checkHandle: (e: any) => void;
}

const ContentList = ({ info, checkHandle }: Props) => {
  const checkedItems = useRecoilValue(checkList_atom);
  const count = useRecoilValue(selectCount);

  useEffect(() => {
    info?.members?.filter((std) =>
      std.student_name === checkedItems ? console.log(true) : console.log(false)
    );
  }, [checkedItems, info?.members]);

  return (
    <>
      <S.StudentList>
        <ul className="sub-header">
          <li>선택</li>
          <li>학번</li>
          <li>이름</li>
          <li>8교시</li>
          <li>9교시</li>
          <li>10교시</li>
        </ul>
        <div className="student-list">
          {info?.count === 0 ? (
            <S.None>학생이 없습니다.</S.None>
          ) : (
            <>
              {info?.members.map((item) => (
                <StdListItem
                  key={item.student_id}
                  item={item}
                  checkHandle={checkHandle}
                />
              ))}
              <span className="count">{count}명 선택됨</span>
            </>
          )}
        </div>
      </S.StudentList>
    </>
  );
};

export default ContentList;
