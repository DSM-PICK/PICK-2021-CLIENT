import { useLocation } from "react-router-dom";
import * as S from "./style";
import QueryString from "query-string";
import { useQuery } from "react-query";
import MoveModal from "./moveModal/MoveModal";
import Header from "../common/header/Header";
import Footer from "../common/header/Footer";
import LocationDetailBar from "./attendanceBar/LocationDetailBar";
import ContentHeader from "./contentHeader/ContentHeader";
import LocationFloorBar from "./attendanceBar/LocationFloorBar";
import StudentList from "./StudentList";
import AttendanceApi from "../../../lib/api/mobile/attendance";

const Attendance = () => {
  // const [isChecked, setIsChecked] = useState(false); // 체크 여부
  // const [checkedItems, setCheckedItems] = useRecoilState(checkList_atom); // 체크된 요소들
  // const [selectValue, setSelectValue] = useRecoilState(selectValue_atom);

  const location = useLocation();
  const queryData = QueryString.parse(location.search);
  const id: any = queryData.id;

  const { data: attendanceData } = useQuery(
    ["attendance_data", id],
    () => AttendanceApi.getAttendanceList(5),
    {
      enabled: !!id,
      cacheTime: Infinity,
      staleTime: Infinity,
      suspense: false,
    }
  );

  return (
    <S.MainWrapper>
      <MoveModal />
      <Header />
      <Footer />
      <div className="location_box">
        <LocationFloorBar />
        <LocationDetailBar />
      </div>
      <S.ContentWrapper>
        <ContentHeader info={attendanceData?.data} />
        <StudentList data={attendanceData?.data} />
      </S.ContentWrapper>
    </S.MainWrapper>
  );
};

export default Attendance;
