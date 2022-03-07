import { FC } from "react";
import { isMobile } from "react-device-detect";
import MobileRouter from "./router/MobileRouter";
import DesktopRouter from "./router/DesktopRouter";

const App: FC = (): JSX.Element => {
  return <>{isMobile ? <MobileRouter /> : <DesktopRouter />}</>;
};

export default App;
