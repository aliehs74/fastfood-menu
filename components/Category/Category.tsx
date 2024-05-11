"use client";

import useAxios from "@/Api/useAxios";
import Loading from "../Loading/Loading";
import Link from "next/link";

const Category = () => {
  const [response, , loading] = useAxios({ url: "/FoodCategory/categories" });

  if (loading) {
    return <Loading />;
  } else {
    return (
      <nav className="w-3/4">
        <ul className="flex justify-between w-3/4 gap-6 font-morabbaNormal child-hover:bg-emerald-400 child-hover:rounded-md child:cursor-pointer child:w-full child:mx-auto child:flex child:justify-center h-full items-center">
          <li>همه</li>
          {response !== null &&
            Array.isArray(response) &&
            response.map((item: { id: number; name: string }) => (
              <li key={item.id}>{item.name}</li>
            ))}
        </ul>
      </nav>
    );
  }
};

export default Category;
