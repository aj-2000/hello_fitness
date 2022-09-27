import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
const RunnersWorkout = () => {
  return (
    <div className="flex h-[210px] sm:h-[230px] md:h-[270px] lg:h-[300px]">
      <div className="group hover:transition-all relative rounded-l-lg flex-1 hover:flex-[2]">
        <img
          className="object-cover h-[100%] w-[100%] rounded-l-lg"
          src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1382&q=80"
        />

        <span className="text-sm text-white absolute top-4 left-4">
          STRENGTH
        </span>

        <span className=" text-lg text-white absolute top-4 right-4 hidden group-hover:inline-block">
          <BsArrowRightCircleFill />
        </span>
      </div>

      <div className="group hover:transition-all relative flex-1 hover:flex-[2]">
        <img
          className="object-cover h-[100%] w-[100%]"
          src="https://images.unsplash.com/photo-1550259979-ed79b48d2a30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
        />
        <span className="text-sm text-white absolute top-4 left-4">
          MOBILITY
        </span>
        <span className="text-lg text-white absolute top-4 right-4 hidden group-hover:inline-block">
          <BsArrowRightCircleFill />
        </span>
      </div>
      <div className="group hover:transition-all relative flex-1 hover:flex-[2] rounded-r-lg">
        <img
          className="object-cover h-[100%] w-[100%] rounded-r-lg"
          src="https://images.unsplash.com/photo-1540174401473-df5f1c06c716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <span className="text-sm text-white absolute top-4 left-4">DRILLS</span>
        <span className="text-lg text-white absolute top-4 right-4 hidden group-hover:inline-block">
          <BsArrowRightCircleFill />
        </span>
      </div>
    </div>
  );
};

export default RunnersWorkout;
