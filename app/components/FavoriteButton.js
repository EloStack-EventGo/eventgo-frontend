"use client";
import { React, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const FavoriteButton = () => {
  /*
   State to keep track of whether the button is clicked
   Should keep track of favorite events later on in DB
  */ 
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="h-10 w-10">
      <a onClick={() => setIsFavorite((prev) => !prev)}>
        {isFavorite ? (
          <FaHeart
            className="z-10 absolute top-6 right-3 transform -translate-y-1/2"
            size={30}
            color="red"
          />
        ) : (
          <FaRegHeart
            className="z-10 absolute top-6 right-3 transform -translate-y-1/2"
            size={30}
          />
        )}
      </a>
    </div>
  );
};

export default FavoriteButton;
