import { useEffect, useState } from 'react';

export function UseFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIspending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setIspending(false);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
        setIspending(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isPending, error };
}
