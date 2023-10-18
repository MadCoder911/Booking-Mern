import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url: string) => {
  const [data, setData] = useState<
    | Array<number>
    | [{ count: number; type: string }]
    | [
        {
          _id: number;
          name: string;
          type: string;
          photos: [string];
          city: string;
          address: string;
        }
      ]
  >();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | boolean>(false);
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
