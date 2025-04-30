import { ServiceCategoryType } from "@/types";

const ServiceCategoryCard: React.FC<ServiceCategoryType> = ({
  title,
  shortDes,
  icon,
}) => {
  return (
    <div className="bg-secondary border border-foreground/10 p-5 rounded-md sm:flex space-x-3 items-center sm:max-h-[110px] max-w-[540px] mx-auto shadow-custom">
      <div className="bg-custom-yellow w-16 h-16 rounded-full flex items-center justify-center  mb-3 sm:mb-0">
        {icon}
      </div>
      <div className="flex-1">
        <h2 className="text-xl">{title}</h2>
        <p className="text-sm text-foreground/70">{shortDes}</p>
      </div>
    </div>
  );
};

export default ServiceCategoryCard;
