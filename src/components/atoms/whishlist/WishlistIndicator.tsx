import React from "react";

import { useWishlist } from "@/contexts/WishlistContext";
import Link from "next/link";
import { HeartIcon } from "lucide-react";

const WishlistIndicator: React.FC = () => {
  const { wishlist } = useWishlist();

  return (
    <Link href="/wishlist" className="relative inline-flex items-center">
      <HeartIcon className="w-6 h-6 text-gray-500 hover:text-red-500" />
      {wishlist.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {wishlist.length}
        </span>
      )}
    </Link>
  );
};

export default WishlistIndicator;
