import { PokeData, Pokemon } from "@/utils/PokeType";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Divider,
  Button,
  Chip,
} from "@nextui-org/react";
import { useRouter } from "next/router";

const PokeCard = ({ info }: { info: PokeData }) => {
  const router = useRouter();

  const showDetails = (id: string) => {
    router.push(`pokemonDetails/${id}`);
  };
  return (
    <>
      <Card className="py-4 w-[88%] md:w-[23%] text-slate-800">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <Image
            alt="Card background"
            className="w-36 md:w-72 h-36 md:h-72 rounded-full object-contain"
            src={info?.sprite}
            width={270}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2 mt-4 flex flex-col gap-3">
          <div className="flex w-full flex-col justify-center gap-2 items-center">
            <p className="md:text-3xl text-blue-600 text-2xl uppercase font-bold">
              {info?.name}
            </p>
            <div className="text-xl flex gap-2 items-center">
              {info?.types.map((item, index) => (
                <Chip key={index} color="primary">
                  {item}
                </Chip>
              ))}
            </div>
          </div>
          <Divider className="my-2 bg-white" />
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-3 w-full border-e-1 p-3">
              <div className="flex justify-between items-center">
                <div className="text-blue-800">Height: </div>
                <div className="">{info?.height}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-blue-800">HP: </div>
                <div className="">{info?.baseStats.hp}</div>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full p-3">
              <div className="flex justify-between items-center">
                <div className="text-blue-800">Weight: </div>
                <div className="">{info?.weight}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-blue-800">Attack: </div>
                <div className="">{info?.baseStats.attack}</div>
              </div>
            </div>
          </div>
          <Button
            onPress={() => showDetails(info.name)}
            color="primary"
            size="lg"
          >
            View More Details
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default PokeCard;
