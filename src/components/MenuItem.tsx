"use client";

import { LucideProps } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ForwardRefExoticComponent,
  RefAttributes,
  useEffect,
  useState,
} from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type MenuItemProps = {
  text: string;
  link: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

const MenuItem: React.FC<MenuItemProps> = ({ text, link, Icon }) => {
  const pathName = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (pathName === link) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [pathName, link]);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={link}
          className={`${
            isActive ? "bg-custom-yellow" : "bg-primary"
          } flex items-center justify-center p-2 rounded-full w-8 h-8 sm:w-10 sm:h-10`}
        >
          {
            <Icon
              className={`${
                !isActive && "text-white"
              } dark:stroke-black w-[24px]`}
            />
          }
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-sm">{text}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default MenuItem;
