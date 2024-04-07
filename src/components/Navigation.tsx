import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import RefetchButton from "./RefetchButton";
import { SiPokemon } from "react-icons/si";

const Navigation = () => {
  return (
    <>
      <Navbar position="static">
        <NavbarBrand>
          <div className="text-2xl font-bold text-blue-500">POKEDEX.</div>
        </NavbarBrand>
        <NavbarContent justify="end" className="hidden md:flex"></NavbarContent>
        <NavbarContent justify="end" className="">
          <NavbarItem className="w-fit">
            <RefetchButton />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Navigation;
