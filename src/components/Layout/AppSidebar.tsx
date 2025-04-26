import {
  Dribbble,
  FacebookIcon,
  Hash,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
} from "../ui/sidebar";

const AppSidebar = () => {
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
        <Separator className="bg-primary" />
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col space-y-2 text-sm">
            <div className="flex justify-between">
              <Badge className="bg-custom-yellow   font-medium">Age:</Badge>
              <p className="text-primary">24</p>
            </div>
            <div className="flex justify-between">
              <Badge className="bg-custom-yellow  font-medium">
                Residence:
              </Badge>
              <p className="text-primary">Bangladesh</p>
            </div>
            <div className="flex justify-between">
              <Badge className="bg-custom-yellow  font-medium">
                Freelance:
              </Badge>
              <p className=" text-success">Available</p>
            </div>
            <div className="flex justify-between">
              <Badge className="bg-custom-yellow  font-medium">Religion:</Badge>
              <p className="text-primary">Muslim</p>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator className="bg-primary" />
        <SidebarGroup>
          <SidebarGroupContent>
            <p className="text-lg">Language</p>
            <div className="flex flex-col space-y-3">
              <div className="text-sm">
                <div className="flex justify-between mb-1 w-full ">
                  <p>Bangla</p>
                  <p>100%</p>
                </div>
                <Progress value={100} className="" />
              </div>
              <div className="text-sm">
                <div className="flex justify-between mb-1 w-full ">
                  <p>English</p>
                  <p>70%</p>
                </div>
                <Progress value={70} className="" />
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator className="bg-primary" />
        <SidebarGroup>
          <SidebarGroupContent>
            <p className="text-lg">Extra Skills</p>
            <div className="flex flex-col space-y-1 mt-2">
              <p className="flex gap-2 items-center">
                <Hash className="w-5 text-custom-yellow" />
                Bootstrap, Materialize
              </p>
              <p className="flex gap-2 items-center">
                <Hash className="w-5 text-custom-yellow" />
                Stylus, Sass, Less
              </p>
              <p className="flex gap-2 items-center">
                <Hash className="w-5 text-custom-yellow" />
                Gulp, Webpack, Grunt
              </p>
              <p className="flex gap-2 items-center">
                <Hash className="w-5 text-custom-yellow" />
                GIT Knowledge
              </p>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator className="bg-primary" />
        <Link href="/" className="w-full">
          <Button className="bg-custom-yellow text-md hover:bg-custom-yellow hover:scale-[1.02] duration-200 w-full">
            Download CV
          </Button>
        </Link>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
