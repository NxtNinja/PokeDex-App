import RefetchAtom from "@/utils/RefetchAtom";
import { Button } from "@nextui-org/react";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useState } from "react";
import { MdOutlineCatchingPokemon } from "react-icons/md";

const RefetchButton = () => {
  const [fetch, setFetch] = useAtom(RefetchAtom);

  const queryClient = useQueryClient();

  const handleRefetch = () => {
    queryClient.invalidateQueries({ queryKey: ["pokemon"] });
  };

  return (
    <>
      <Button
        isIconOnly
        size="lg"
        color="primary"
        href="#"
        variant="flat"
        onPress={handleRefetch}
        disableRipple
      >
        <div className={`${fetch ? "animate-spin" : ""}`}>
          <MdOutlineCatchingPokemon size={30} />
        </div>
      </Button>
    </>
  );
};

export default RefetchButton;
