"use client";
import useAxios from "@/Api/useAxios";

const Category = () => {
  const [response, , loading] = useAxios({ url: "/FoodCategory/categories" });

  const baseURL = "/FastFood/list";
  let queryString: string;


  const handleClick = () => {
    if (queryString.length !== 0) {
      localStorage.setItem("url", `${baseURL}?categoryId=${queryString}`);
    } else {
      localStorage.setItem("url", `${baseURL}`);
    }
    console.log(localStorage.getItem("url"));
  };

  return (
    <nav className="w-3/4 ">
      <ul className="flex justify-between w-3/4 font-morabbaNormal  child-hover:bg-emerald-400 child-hover:rounded-md child:cursor-pointer  child:mx-auto child:flex child:justify-center h-full items-center child:min-w-[15%]">
        <li
          onClick={() => {
            queryString = "";
            handleClick();
          }}
        >
          همه
        </li>
        {response !== null &&
          Array.isArray(response) &&
          response.map((item: { id: number; name: string }) => (
            <li
              key={item.id}
              onClick={() => {
                queryString = `${item.id}`;
                handleClick();
              }}
            >
              {item.name}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Category;
