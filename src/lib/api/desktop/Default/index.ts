import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config: any) => {
    config.headers.Authorization = "Bearer " + localStorage.getItem("access_token");

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config, response } = error;

    if (error.response.status === 401) {
      toast.success("로그아웃 되었습니다.");

      setTimeout(() => {
        window.location.href = "/login";
        localStorage.clear();
      }, 1000);
    }

    if (response?.status === 401 && localStorage.getItem("refresh_token")) {
      try {
        const res = await axios({
          method: "put",
          url: `${process.env.REACT_APP_BASE_URL}/teacher/auth`,
          data: {
            refresh_token: localStorage.getItem("refresh_token"),
          },
        });
        const { access_token, refresh_token, teacher_id } = res.data;

        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", refresh_token);
        localStorage.setItem("teacher_id", teacher_id);

        config.headers.Authorization = `Bearer ${access_token}`;

        return axios(config);
      } catch (err: any) {
        if (err.response.status === 401) {
          toast.success("로그아웃 되었습니다.");

          setTimeout(() => {
            window.location.href = "/login";
            localStorage.clear();
          }, 1000);
        }
      }
    }

    return Promise.reject(error);
  }
);
export default instance;
