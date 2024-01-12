import React from "react";
import Logo from "../assets/GameLogo.jpeg";
import { Button } from "@material-tailwind/react";


const Header = () => {
  return (
    <div className=" flex mt-4 gap-x-5 items-start pl-8">
      {/* <h5 className="text-white">Play More - Win More !!!</h5> */}
      <img src={Logo} alt="logo" width={60} height={50} />
      <Button className="bg-amber-600 text-white w-18 h-9 mt-3 rounded-md" size="sm">Wallet</Button>
      <Button className="bg-cyan-800 text-white w-18 h-9 mt-3 rounded-full" size="sm">REGISTER</Button>
      <Button className="bg-cyan-800 text-white w-18 h-9 mt-3 rounded-full" size="sm">LOGIN</Button>

      {/* <Button className="gap-x-4 mt-1 font-bold bg-cyan-700 rounded-md">REGISTER</Button>
      <Button className="gap-x-4 mt-1" >LOGIN</Button> */}
    </div>
  );
};

export default Header;