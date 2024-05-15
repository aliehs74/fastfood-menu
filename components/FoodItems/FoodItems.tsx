"use client";

import useAxios from "@/Api/useAxios";
import { useLayoutEffect, useRef } from "react";
import Loading from "../Loading/Loading";
import SingleItem from "./SingleItem";

const FoodItems = () => {
  const urlRef = useRef<string>("/FastFood/list");

  useLayoutEffect(() => {
    const new_url = localStorage.getItem("url");
    if (new_url) {
      urlRef.current = new_url;
    }
  }, [urlRef]);

  const [fetchFoodItems, , loading] = useAxios({
    url: urlRef.current,
  });
  console.log(fetchFoodItems);

  let delay = 0.1;

  if (loading) {
    return <Loading />;
  } else if (fetchFoodItems !== null && Array.isArray(fetchFoodItems)) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {fetchFoodItems.map((item) => {
          delay += 0.03;
          return (
            <div
              
              key={item.id}
            >
              <SingleItem {...item} delay={delay} />
            </div>
          );
        })}
      </div>
    );
  }
};
export default FoodItems;
