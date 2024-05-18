import Image from "next/image";

const SingleItem = ({
  name,
  price,
  ingredients,
  imageUrl,
}: {
  name: string;
  price: number;
  ingredients: string;
  imageUrl: string;
}) => {
  return (
    <div
      className="flex flex-col items-center max-w-[300px] w-72 font-danaNormal"
    >
      <div className="relative">
        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 absolute top-0 right-0">
          قیمت: {price.toLocaleString()} تومان
        </span>

        <Image
          className="rounded-lg"
          src={imageUrl}
          alt="عکس یک آیتم"
          width={400}
          height={400}
          // objectFit="cover"
        />
      </div>

      <div className="text-center pt-3 pb-4  flex-col">
        <h5 className="mb-2 font-danaBold">{name}</h5>
        <div className="text-sm mb-3 h-10 text-gray-500">{ingredients}</div>
        <button className="font-danaBold mt-auto text-xs text-green-500">
          <span>&#128722;</span>
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
