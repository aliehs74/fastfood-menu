import Image from "next/image";
const Hero = () => {
  return (
    <div className=" w-full mx-auto h-32 relative ">
      <Image
        src="/images/header-background.jpg"
        fill={true}
        alt="header background picture"
        objectFit="cover"
      />
      <div className="absolute left-[10vw] bottom-16">
        <h1 className="font-morabbaBold text-gray-200 text-3xl uppercase">
          fastfood menu
        </h1>
      </div>
    </div>
  );
};

export default Hero;
