import axios, { AxiosError } from "axios";
import { refresh, refreshError } from "../refresh";

export const request = axios.create({
  timeout: 10000,
  baseURL: "https://api-2021.dsm-pick.com",
});

export const getRequestWithToken = (
  token: string,
  type: "json" | "blob" | "text" = "json"
) => {
  const request = axios.create({
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${token}`,
      withCredentials: true,
    },
    responseType: type,
    withCredentials: true,
  });

  return request;
};

const instance = axios.create({
  timeout: 100000,
  baseURL: "https://api-2021.dsm-pick.com",
});

instance.interceptors.request.use(refresh, refreshError);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const refreshToken = localStorage.getItem("refresh_token");
    const Autorization = {
      refresh_token: refreshToken,
    };
    if (error.response?.status === 401) {
      request
        .put("/teacher/auth", Autorization)
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("refresh_token", res.data.refresh_token);
        })
        .catch((err: AxiosError) => {
          if (err.response?.status === 401) {
            // alert("로그인 후 이용하실 수 있습니다.");
            window.location.href = "/login";
          }
        });
    }

    return Promise.reject(error);
  }
);

export default instance;
