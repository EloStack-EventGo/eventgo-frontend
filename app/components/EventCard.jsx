import React from "react";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

const EventCard = ({ source }) => {
  return (
    <div className="relative group lg:w-[320px] lg:h-64 2xl:w-[420px] 2xl:h-80 rounded-2xl border-4 bg-white">
      <FavoriteButton />
      <Image
        className="object-cover rounded-xl non-selectable"
        src={source}
        fill="true"
        alt="Picture of the author"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center rounded-xl">
        <div className="text-white text-center p-4">
          <h3 className="text-lg font-bold">Test Title</h3>
          <p>Test Description</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
