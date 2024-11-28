import React, { createContext, useContext, useState, ReactNode } from "react";
import { TourPackage } from "@/types/tour";

interface WishlistContextType {
  wishlist: TourPackage[];
  addToWishlist: (tour: TourPackage) => void;
  removeFromWishlist: (tourId: string) => void;
  isInWishlist: (tourId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<TourPackage[]>([]);

  const addToWishlist = (tour: TourPackage) => {
    setWishlist((prev) => [...prev, tour]);
  };

  const removeFromWishlist = (tourId: string) => {
    setWishlist((prev) => prev.filter((tour) => tour.id !== tourId));
  };

  const isInWishlist = (tourId: string) => {
    return wishlist.some((tour) => tour.id === tourId);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
