/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "redaxios";
import type { Options, RequestHeaders } from "redaxios";

export type ResponseConfig<Tdata = unknown> = {
  data: Tdata;
  status: number;
  statusText: string;
  headers?: RequestHeaders;
};

type AxiosInstance = ReturnType<typeof axios.create>;

const axiosClient =
  (axiosInstance: AxiosInstance) =>
    async <TData, TError = unknown, _T = ResponseConfig<TData>>(
      options: Options
    ) => {
      const { url, ...config } = {
        ...options,
        headers: { ...options.headers },
      };
      if (!url) throw new Error("URL is required");
      return axiosInstance.request<TData>(url, config).catch((e: TError) => {
        throw e;
      });
    };

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  validateStatus: (status) => status < 400,
});

const client = axiosClient(axiosInstance);

export default client;
