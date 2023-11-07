import { useEffect, useState } from 'react';
import Header from '../../components/Header';

export function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans');
        const json = await data.json();
        setData(json.results);
      } catch {
        setData(undefined);
      }
    }
    load();
  }, [])


  return (
    <Header />
  );
}
