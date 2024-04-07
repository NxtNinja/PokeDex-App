import { PokeData } from "@/utils/PokeType";

import React from "react";
import {
  Card,
  CardBody,
  Image,
  Button,
  Slider,
  Chip,
  Progress,
  Code,
  Textarea,
} from "@nextui-org/react";
import Link from "next/link";

const PokemonDetails = ({ info }: { info: PokeData }) => {
  return (
    <>
      <div className="grid place-items-center mt-5 gap-3 w-full md:w-[95%] mx-auto">
        <Link href={"/"} className="text-lg text-blue-500 w-4/5">
          Return to Homepage
        </Link>
        <Card className="border-none bg-background/60 dark:bg-default-100/50 w-full md:w-4/5">
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 justify-center">
              <div className="relative col-span-6 md:col-span-4">
                <Image
                  alt="Album cover"
                  className="object-cover"
                  height={200}
                  src={info.sprite}
                  width="100%"
                />
              </div>

              <div className="flex flex-col col-span-6 md:col-span-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-5">
                  <div className="flex flex-col gap-4 w-full">
                    <h3 className="font-semibold text-3xl">
                      {" "}
                      Name : {info.name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-bold">Type : </span>
                      {info.types.map((items, index) => (
                        <Chip color="primary" key={index}>
                          {items}
                        </Chip>
                      ))}
                    </div>
                    <div className="me-12">
                      <div className="flex flex-col gap-3 w-full">
                        <div className="flex justify-between items-center">
                          <div className="text-blue-800">Height: </div>
                          <div className="">{info?.height}</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-blue-800">HP: </div>
                          <div className="">{info?.baseStats.hp}</div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 w-full pt-3">
                        <div className="flex justify-between items-center">
                          <div className="text-blue-800">Weight: </div>
                          <div className="">{info?.weight}</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-blue-800">Attack: </div>
                          <div className="">{info?.baseStats.attack}</div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 w-full pt-3">
                        <div className="flex justify-between items-center">
                          <div className="text-blue-800">Spc. Attack: </div>
                          <div className="">{info?.baseStats.spAtk}</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-blue-800">Spc. Defence: </div>
                          <div className="">{info?.baseStats.spDef}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex mt-auto flex-col gap-4">
                    <div className="flex items-center gap-2 w-full">
                      <div className="w-1/3">Speed </div>
                      <div className="w-full border">
                        <Progress
                          aria-label="Loading..."
                          value={info.baseStats.speed}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                      <div className="w-1/3">Defence </div>
                      <div className="w-full border">
                        <Progress
                          aria-label="Loading..."
                          value={info.baseStats.defense}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 w-full">
                      <div className="w-1/3">Spc. Attack </div>
                      <div className="w-full border">
                        <Progress
                          aria-label="Loading..."
                          value={info.baseStats.spAtk}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 w-full">
                      <div className="w-1/3">Spc. Defence </div>
                      <div className="w-full border">
                        <Progress
                          aria-label="Loading..."
                          value={info.baseStats.spDef}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 w-full">
                      <div className="w-1/3">HP </div>
                      <div className="w-full border">
                        <Progress
                          aria-label="Loading..."
                          value={info.baseStats.hp}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 w-full">
                      <div className="w-1/3">Attack </div>
                      <div className="w-full border">
                        <Progress
                          aria-label="Loading..."
                          value={info.baseStats.attack}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 font-bold text-2xl">Abilities</div>
                <div className="w-full grid md:grid-cols-2 mt-5 gap-4">
                  {info.abilities.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-col gap-4">
                        <div>{item.name}</div>
                        <Textarea
                          isReadOnly
                          label="Description"
                          variant="flat"
                          color="primary"
                          defaultValue={item.description}
                          className="max-w-full"
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="mt-12 font-bold text-2xl">Other Details</div>
                <div className="w-full grid grid-cols-2 mt-5 gap-4">
                  <div className="flex gap-3">
                    Catch Rate : {info.training.catchRate}
                  </div>
                  <div className="flex gap-3">
                    Friendliness : {info.training.baseFriendship}
                  </div>
                  <div className="flex gap-3">
                    Experience : {info.training.baseExp}
                  </div>
                  <div className="flex gap-3">
                    Growth Rate : {info.training.growthRate}
                  </div>
                  <div className="flex gap-3">
                    Gender : {info.breeding.gender}
                  </div>
                  <div className="flex gap-3">
                    Egg groups : {info.breeding.eggGroups}
                  </div>
                  <div className="flex gap-3">
                    Egg cycles : {info.breeding.eggCycles}
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default PokemonDetails;
