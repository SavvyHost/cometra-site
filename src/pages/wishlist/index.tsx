import React from "react";
import { useWishlist } from "@/contexts/WishlistContext";
import WishlistCard from "@/components/atoms/whishlist/WishlistCard";

const WishlistPage: React.FC = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">Your wishlist is empty</div>
          <p className="text-gray-400">
            Add tours to your wishlist to save them for later!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((tour) => (
            <WishlistCard key={tour.id} tour={tour} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
