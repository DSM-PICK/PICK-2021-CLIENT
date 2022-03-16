import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { BarLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MobileRouter from "./router/MobileRouter";
import styled from "@emotion/styled";
import "./style/global.css";
import { isDesktop, isMobile } from "react-device-detect";
import DesktopRouter from "./router/DesktopRouter";
import App from "./App";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const CircleBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer position="top-right" hideProgressBar={true} />
    <RecoilRoot>
      <Suspense
        fallback={
          <CircleBox>
            <BarLoader
              color={"black"}
              height="4px"
              width="100%"
              speedMultiplier={0.5}
            />
          </CircleBox>
        }
      >
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
