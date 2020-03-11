import axios, { AxiosRequestConfig, Method } from "axios"

import { logger } from "../../loaders"

const httpRequest = (options: AxiosRequestConfig) => async <U>(
  method: Method,
  endpoint: string,
  { params, data }: RequestConfig = {},
) => {
  const response = await axios.request<U>({
    ...options,
    method,
    url: `${options.url}/${endpoint}`,
    params,
    data,
  })

  logger.info("temp")

  return response.data
}

type RequestConfig = {
  params?: string | URLSearchParams | Record<string, string>
  data?: {}
}

export { httpRequest }
