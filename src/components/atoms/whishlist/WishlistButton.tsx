import React from "react";

import { useWishlist } from "@/contexts/WishlistContext";
import { TourPackage } from "@/types/tour";
import { Heart, HeartIcon } from "lucide-react";

interface WishlistButtonProps {
  tour: TourPackage;
  className?: string;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({
  tour,
  className = "",
}) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isInWishlist(tour.id)) {
      removeFromWishlist(tour.id);
    } else {
      addToWishlist(tour);
    }
  };

  return (
    <button
      onClick={toggleWishlist}
      className={`transition-colors duration-200 bg-white rounded-full p-2 ${className}`}
      aria-label={
        isInWishlist(tour.id) ? "Remove from wishlist" : "Add to wishlist"
      }
    >
      {isInWishlist(tour.id) ? (
        <HeartIcon className="w-6 h-6 text-red-500 fill-red-500" />
      ) : (
        <Heart className="w-6 h-6 text-gray-500 hover:text-red-500" />
      )}
    </button>
  );
};

export default WishlistButton;
