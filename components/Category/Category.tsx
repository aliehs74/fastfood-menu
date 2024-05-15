"use client";

import useAxios from "@/Api/useAxios";
import handleClick from "@/utils/handleClick";

const Category = () => {
  const [response, , loading] = useAxios({ url: "/FoodCategory/categories" });

  return (
    <nav className="w-3/4 ">
      <ul
        className="flex justify-between w-3/4 font-morabbaNormal  child-hover:bg-emerald-400 child-hover:rounded-md child:cursor-pointer  child:mx-auto child:flex child:justify-center h-full items-center child:min-w-[15%]"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <li>همه</li>
        {response !== null &&
          Array.isArray(response) &&
          response.map((item: { id: number; name: string }) => (
            <li key={item.id}>{item.name}</li>
          ))}
      </ul>
    </nav>
  );
};

export default Category;
