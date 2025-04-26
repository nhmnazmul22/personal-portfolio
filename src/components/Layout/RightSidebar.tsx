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

const RightSidebar = () => {
  return (
    <div className="flex flex-col items-center w-full gap-15">
      <ToggleTheme />
      <div className="flex flex-col items-center space-y-5">
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
