import useSWR from "swr";
import api  from "../../service/api";

export function useFetch<Data = any, Error = any>(url:string){

  const{ data, error } = useSWR<Data, Error>(url, async url=> {
    const response = await api.get(url)

    return response.data.continents;

  },{
    revalidateOnReconnect:true,
    revalidateOnFocus:true,
    errorRetryCount:2,
  })

  return { data, error };
}