import axios, { AxiosRequestConfig, AxiosError } from "axios";

export const refresh = async (config: AxiosRequestConfig) => {
  let accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");

  if (!accessToken) {
    window.location.href = "/login";
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    return config;
  }

  if (config.headers === undefined) return;

  config.headers["Authorization"] = `Bearer ${accessToken}`;

  return config;
};

export const refreshError = (err: AxiosError) => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};
