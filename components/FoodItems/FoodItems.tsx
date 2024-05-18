"use client";

import useAxios from "@/Api/useAxios";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Loading from "../Loading/Loading";
import SingleItem from "./SingleItem";

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
};
export default FoodItems;
