"use client";

import {
  BriefcaseBusiness,
  CodeXml,
  FileCode2,
  GraduationCap,
  House,
  Rss,
  UserRoundSearch,
} from "lucide-react";
import MenuItem from "../MenuItem";
import ToggleTheme from "../ToggleTheme";
import { SidebarTrigger } from "../ui/sidebar";

const RightSidebar = () => {
  return (
    <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-15">
      <div className="flex sm:gap-3 items-center">
        <SidebarTrigger className="block md:hidden" />
        <ToggleTheme classNames="max-sm:hidden" />
      </div>
      <div className="flex flex-row md:flex-col items-center max-sm:space-x-1.5 space-x-3 md:space-y-5 md:space-x-0">
        <MenuItem text="Home" link="/" Icon={House} />
        <MenuItem text="Service" link="/service" Icon={FileCode2} />
        <MenuItem text="Skills" link="/skills" Icon={CodeXml} />
        <MenuItem text="Education" link="/education" Icon={GraduationCap} />
        <MenuItem text="Portfolio" link="/portfolio" Icon={BriefcaseBusiness} />
        <MenuItem text="Blogs" link="/blogs" Icon={Rss} />
        <MenuItem text="Contact" link="/contact" Icon={UserRoundSearch} />
      </div>
    </div>
  );
};

export default RightSidebar;
