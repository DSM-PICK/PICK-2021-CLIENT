import { CModal } from "../../modules/desktop/atom/ATCheck";
import { COLOR } from "../../style/color";
import { useRecoilValue } from "recoil";

const Arrow = () => {
  return (
    <svg
      width="16"
      height="8"
      viewBox="0 0 16 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H16L8 8L0 0Z" fill={COLOR.black} />
    </svg>
  );
};

export default Arrow;
