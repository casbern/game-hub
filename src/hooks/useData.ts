import apiClient from "@/services/api-client"
import { AxiosRequestConfig, CanceledError } from "axios"
import { useEffect, useState } from "react"


interface FetchResponse<T> {
  count: number
  results: T[]
}

const useData = <T> (endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      const controller = new AbortController()
  
      setLoading(true)
      apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
        .then( res => {
          setData(res.data.results)
          setLoading(false)
        })
        .catch(err => {
          if(err instanceof CanceledError) return
          setError(err.message)
          console.error('Error fetching genres:', error)
          setLoading(false)
        })
  
        return () => { controller.abort() }
    }, deps ? [...deps] : [])
  
    return { data, error, loading }
  
 }

export default useData