import React from "react";

const NavbarMenuItem = (props) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl text-center">{props?.icon}</span>
      <span className="text-xs font-semibold">{props?.title}</span>
    </div>
  );
};

export default NavbarMenuItem;
