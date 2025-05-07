import { ServiceCategoryType } from "@/types";
import BorderGlowCard from "./animation/BorderGlowCard";
import InitialTransition from "./animation/InitialTransition";

const ServiceCategoryCard: React.FC<ServiceCategoryType> = ({
  title,
  shortDes,
  icon,
}) => {
  return (
    <InitialTransition>
      <BorderGlowCard>
        <div className="bg-secondary border dark:border-muted-foreground/10 p-5 rounded-[13px] sm:flex space-x-3 items-center sm:max-h-[110px] max-w-[540px] mx-auto  hover:scale-[1.05] duration-300">
          <div className="bg-custom-yellow w-16 h-16 rounded-full flex items-center justify-center  mb-3 sm:mb-0">
            {icon}
          </div>
          <div className="flex-1">
            <h2 className="text-xl">{title}</h2>
            <p className="text-sm text-foreground/70">{shortDes}</p>
          </div>
        </div>
      </BorderGlowCard>
    </InitialTransition>
  );
};

export default ServiceCategoryCard;
