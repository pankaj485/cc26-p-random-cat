import { useEffect, useState } from "react";
import "./App.css";
import type { ApiRes, CatBreed } from "./types.d.ts";
import { CatCard } from "./components/Cat.tsx";

function App() {
  const [cat, setCat] = useState<CatBreed | null>(null);

  useEffect(() => {
    const API_ENDPOINT =
      "https://api.freeapi.app/api/v1/public/cats/cat/random";

    fetch(API_ENDPOINT)
      .then((_) => _.json())
      .then((res: ApiRes) => {
        if (res.success && res.statusCode === 200) {
          setCat(res.data);
          console.log(res.data);
        }
      });
  }, []);

  return (
    <div className="bg-slate-200 p-4 w-max-[1000px] h-dvh">
      <h1 className="text-center text-2xl font-semibold">FreeAPI Random Cat</h1>

      <div className="grid grid-cols-1 gap-6 m-4 max-w-150 mx-auto mt-10">
        {cat && cat !== null && <CatCard cat={cat} />}
      </div>
    </div>
  );
}

export default App;
