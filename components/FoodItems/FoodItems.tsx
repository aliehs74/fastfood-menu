"use client";

import useAxios from "@/Api/useAxios";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import SingleItem from "./SingleItem";
import Image from "next/image";

const FoodItems = () => {
  
  const [url, setUrl] = useState("/FastFood/list");
  const new_url = localStorage.getItem("url");

  const [fetchFoodItems, , loading] = useAxios({
    url,
  });

  useEffect(() => {
    if (url !== new_url && new_url !== null) {
      setUrl(new_url);
    }
  }, [url, new_url]);

  if (loading) {
    return <Loading />;
  } else if (fetchFoodItems !== null && Array.isArray(fetchFoodItems)) {
    if (fetchFoodItems.length === 0) {
      return (
        <div className="relative size-96">
          <Image
            src={"/images/404.png"}
            alt="image404"
            fill={true}
            objectFit="contain"
          />
        </div>
      );

    } else {
      return (
        <div className="grid grid-cols-3 gap-4">
          {fetchFoodItems.map((item) => {
            return (
              <div key={item.id}>
                <SingleItem {...item} />
              </div>
            );
          })}
        </div>
      );
    }
  }
};
export default FoodItems;
