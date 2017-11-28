import axios, { AxiosError, AxiosResponse } from 'axios'

axios.interceptors.response.use((res: AxiosResponse) => res, err => {
  const statusCode = err.response.status
  // 根据返回的code值来做不同的处理（和后端约定）
  switch (statusCode) {
    case 401:
    location.href= '/#/login'
    break
  }
  return Promise.reject(err)
})
