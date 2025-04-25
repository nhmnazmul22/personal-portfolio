import {
  Dribbble,
  FacebookIcon,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
} from "../ui/sidebar";

const LeftSideBar = () => {
  return (
    <Sidebar>
      <SidebarContent className="p-5 bg-secondary">
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col items-center space-y-4">
            <Image
              src="/nazmul-profile-pic.png"
              width={150}
              height={150}
              alt="Nhm Nazmul"
            />
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-primary">
                Nhm Nazmul
              </h1>
              <p className="text-sm text-foreground/65">MERN Stack Developer</p>
            </div>
            <div className="flex justify-between gap-3">
              <span className="bg-custom-yellow p-2 rounded-full cursor-pointer hover:scale-[1.2] duration-200">
                <FacebookIcon
                  size={16}
                  className="stroke-background fill-background"
                />
              </span>
              <span className="bg-custom-yellow p-2 rounded-full cursor-pointer hover:scale-[1.2] duration-200">
                <Instagram size={16} className="stroke-background" />
              </span>
              <span className="bg-custom-yellow p-2 rounded-full cursor-pointer hover:scale-[1.2] duration-200">
                <Twitter
                  size={16}
                  className="stroke-background fill-background"
                />
              </span>
              <span className="bg-custom-yellow p-2 rounded-full cursor-pointer hover:scale-[1.2] duration-200">
                <Linkedin
                  size={16}
                  className="stroke-background fill-background"
                />
              </span>
              <span className="bg-custom-yellow p-2 rounded-full cursor-pointer hover:scale-[1.2] duration-200">
                <Dribbble size={16} className="stroke-background" />
              </span>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator className="bg-custom-white" />
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col space-y-3 text-md">
            <div className="flex justify-between">
              <Badge className="bg-custom-yellow">Age:</Badge>
              <p className="text-custom-white">24</p>
            </div>
            <div className="flex justify-between">
              <Badge className="bg-custom-yellow">Residence:</Badge>
              <p className="text-custom-white">Bangladesh</p>
            </div>
            <div className="flex justify-between">
              <Badge className="bg-custom-yellow">Freelance:</Badge>
              <p className=" text-success">Available</p>
            </div>
            <div className="flex justify-between">
              <Badge className="bg-custom-yellow">Religion:</Badge>
              <p className="text-custom-white">Muslim</p>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        
      </SidebarContent>
    </Sidebar>
  );
};

export default LeftSideBar;
