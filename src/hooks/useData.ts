import apiClient from "@/services/api-client"
import { AxiosRequestConfig } from "axios"
import { useQuery } from "@tanstack/react-query"



interface FetchResponse<T> {
  count: number
  results: T[]
}

const useData = <T> (endpoint: string, requestConfig?: AxiosRequestConfig) => {
    
  return useQuery<FetchResponse<T>, Error>({
    queryKey: [endpoint, requestConfig],
    queryFn: () =>
      apiClient
        .get<FetchResponse<T>>(endpoint, requestConfig)
        .then(res => res.data),
      select: data => ({
        count: data.count,
        results: data.results,
      })
  }) 
 }

export default useData