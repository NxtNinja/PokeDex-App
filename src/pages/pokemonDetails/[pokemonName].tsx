import Navigation from "@/components/Navigation";
import PokemonDetails from "@/components/PokemonDetails";
import PokemonData from "@/utils/PokemonData";
import RefetchAtom from "@/utils/RefetchAtom";
import { Image } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect } from "react";

const pokemonName = () => {
  const [pokemonData, setPokemonData] = useAtom(PokemonData);
  const [fetch, setFetch] = useAtom(RefetchAtom);

  const router = useRouter();
  const pokeName = router.query.pokemonName;

  const { data, isFetched, isFetching, isSuccess, isLoading } = useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const req = await axios.get(
        `https://ex.traction.one/pokedex/pokemon/${pokeName}`
      );
      const res = req.data[0];

      setPokemonData(res);
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
        <PokemonDetails info={pokemonData} />
      </>
    );
  }
};

export default pokemonName;
