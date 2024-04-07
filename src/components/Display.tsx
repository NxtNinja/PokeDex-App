import { useAtom } from "jotai";
import PokeCard from "./PokeCard";
import RefetchAtom from "@/utils/RefetchAtom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { Image } from "@nextui-org/react";

const Display = () => {
  const [fetch, setFetch] = useAtom(RefetchAtom);

  const { data, isFetched, isFetching, isSuccess, isLoading } = useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => {
      const pokeID = Math.floor(Math.random() * 1010) + 1;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const req = await axios.get(
        `https://ex.traction.one/pokedex/pokemon/${pokeID}`
      );
      const res = req.data[0];
      console.log(res);

      return res;
    },
    refetchOnWindowFocus: false,

    retry: true,
  });

  useEffect(() => {
    if (isLoading || isFetching) {
      setFetch(true);
    } else {
      setFetch(false);
    }
  }, [isLoading, isFetching]);

  if (isLoading || isFetching) {
    return (
      <div className="grid place-items-center h-[80dvh]">
        <div className="flex flex-col justify-center items-center gap-4">
          <Image
            alt="loading background"
            className="animate-spin"
            src="/pokeball.png"
            width={100}
          />
          <div className="">.......This may take a few seconds</div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="h-[80dvh] grid place-items-center">
          <PokeCard info={data} />
        </div>
      </>
    );
  }
};

export default Display;
