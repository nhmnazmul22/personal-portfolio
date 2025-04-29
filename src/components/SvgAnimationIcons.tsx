import Image from "next/image";

const SvgAnimationIcons = () => {
  return (
    <div className="svg-icon z-[1]">
      <Image
        src="/Ellipse-1.svg"
        width={20}
        height={20}
        alt="Ellipse"
        className="absolute top-[-30px] left-[10%]"
      ></Image>
      <Image
        src="/Ellipse-2.svg"
        width={20}
        height={20}
        alt="Ellipse"
        className="hidden lg:block absolute top-[20px] lg:right-[10%]"
      ></Image>
      <Image
        src="/Polygon.svg"
        width={20}
        height={20}
        alt="Ellipse"
        className="absolute bottom-[50px] rotate-45 right-[40%]"
      ></Image>
      <Image
        src="/Ellipse-2.svg"
        width={20}
        height={20}
        alt="Ellipse"
        className="absolute bottom-[-40px] left-[20%]"
      ></Image>
      <Image
        src="/Rectangle-1.svg"
        width={20}
        height={20}
        alt="Ellipse"
        className="absolute bottom-0 right-[60px]"
      ></Image>
      <Image
        src="/Rectangle-2.svg"
        width={20}
        height={20}
        alt="Ellipse"
        className="absolute top-[-40px] right-[20%]"
      ></Image>
    </div>
  );
};

export default SvgAnimationIcons;
