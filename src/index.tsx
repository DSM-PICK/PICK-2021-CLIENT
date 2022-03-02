import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { BarLoader } from "react-spinners";
import styled from "@emotion/styled";

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

