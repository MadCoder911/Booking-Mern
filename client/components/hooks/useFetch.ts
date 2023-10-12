import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url: string) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response: any = await axios.get(url);
        setData(response.data);
      } catch (error: any) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  const reFetchData = async () => {
    setLoading(true);
    try {
      const response: any = axios.get(url);
      setData(response.data);
    } catch (error: any) {
      setError(error);
    }
  };
  return { data, loading, error, reFetchData };
};

export default useFetch;
