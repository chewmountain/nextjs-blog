import { useEffect, useState } from "react";

export default function helloWorld() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const req = await fetch("http://localhost:3000/api/hello");
      const data = await req.json();
      setData(data);
    }
    getData();
  }, []);
  return (
    <>
      <h1>Hello world! I'm doing the new edits (2023-04-03)</h1>
      <h2>Data: {data?.text}</h2>
    </>
  );
}
