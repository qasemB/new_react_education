import { useEffect, useState } from "react";

export const useGetData = (url)=>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setLoading(true);
  
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error("خطا در دریافت اطلاعات");
          return res.json();
        })
        .then((data) => {
          setData(data.slice(0, 12)); // Limiting to first 12 posts for better UI
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
  
    }, [url]);

    return {data, loading, error};
}