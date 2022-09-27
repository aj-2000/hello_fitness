import React from "react";
import NavbarMenuItem from "./NavbarMenuItem";
import { IoIosFitness } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { MdCardMembership } from "react-icons/md";
import { FaRunning } from "react-icons/fa";
import { GrAppsRounded } from "react-icons/gr";
import { RiLiveLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className="bg-white flex justify-between shadow-lg py-2 px-6">
      <div className="bg-black rounded-full text-white flex items-center">
        <IoIosFitness size={40}/>
      </div>
      <div className="flex gap-x-8 md:gap-x-16 lg:gap-x-20 items-center justify-between">
        <NavbarMenuItem icon={<RiLiveLine />} title={"LIVE"} />
        <NavbarMenuItem icon={<MdCardMembership />} title={"MEMBERSHIPS"} />
        <NavbarMenuItem icon={<FaRunning />} title={"PLANS"} />
        <NavbarMenuItem icon={<GrAppsRounded />} title={"MORE"} />
      </div>
      <div className="flex items-center gap-x-2">
        <span className="text-base">
          <BsFillPersonFill />
        </span>
        <span className="text-sm">Login</span>
      </div>
    </div>
  );
};

export default Navbar;
