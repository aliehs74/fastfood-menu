import useAxios from "@/Api/useAxios";

const Category = () => {
  const data = useAxios({
    url: "/FoodCategory/categories",
  });

  return <div>{data}</div>;
};

export default Category;
