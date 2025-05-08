"use client";
import {
  FacebookIcon,
  Github,
  Hash,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ToggleTheme from "../ToggleTheme";
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
      <SidebarContent className="p-5 bg-secondary border-e border-foreground/10 relative">
        <ToggleTheme classNames="sm:hidden" />
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
              <Link
                href="https://www.facebook.com/nhmnazmul22/"
                target="_blank"
                className="bg-custom-yellow p-2 rounded-full cursor-pointer hover:scale-[1.2] duration-200"
              >
                <FacebookIcon size={16} className="stroke-background" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/nhm-nazmul/"
                target="_blank"
                className="bg-custom-yellow p-2 rounded-full cursor-pointer hover:scale-[1.2] duration-200"
              >
                <Linkedin size={16} className="stroke-background" />
              </Link>
              <Link
                href="https://github.com/nhmnazmul22"
                target="_blank"
                className="bg-custom-yellow p-2 rounded-full cursor-pointer hover:scale-[1.2] duration-200"
              >
                <Github size={16} className="stroke-background" />
              </Link>
              <Link
                href="https://www.instagram.com/nhmnazmul40/"
                target="_blank"
                className="bg-custom-yellow p-2 rounded-full cursor-pointer hover:scale-[1.2] duration-200"
              >
                <Instagram size={16} className="stroke-background" />
              </Link>
              <Link
                href="https://x.com/nhm_nazmul22"
                target="_blank"
                className="bg-custom-yellow p-2 rounded-full cursor-pointer hover:scale-[1.2] duration-200"
              >
                <Twitter size={16} className="stroke-background" />
              </Link>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator className="bg-primary" />
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col space-y-2 text-sm">
            <div className="flex justify-between">
              <Badge className="bg-custom-yellow text-background   font-medium">
                Age:
              </Badge>
              <p className="text-primary">20</p>
            </div>
            <div className="flex justify-between">
              <Badge className="bg-custom-yellow text-background  font-medium">
                Residence:
              </Badge>
              <p className="text-primary">Bangladesh</p>
            </div>
            <div className="flex justify-between">
              <Badge className="bg-custom-yellow text-background  font-medium">
                Freelance:
              </Badge>
              <p className=" text-success">Available</p>
            </div>
            <div className="flex justify-between">
              <Badge className="bg-custom-yellow text-background  font-medium">
                Religion:
              </Badge>
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
                AppWrite, Firebase
              </p>
              <p className="flex gap-2 items-center">
                <Hash className="w-5 text-custom-yellow" />
                Postman, Thunder Client
              </p>
              <p className="flex gap-2 items-center">
                <Hash className="w-5 text-custom-yellow" />
                VS Code, WebStorm
              </p>
              <p className="flex gap-2 items-center">
                <Hash className="w-5 text-custom-yellow" />
                Vercel, Netlify
              </p>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator className="bg-primary" />
        <Link
          href="https://www.upwork.com/freelancers/~01e4bb6efdd3ecb887"
          target="_blank"
          className="w-full"
        >
          <Button className="bg-custom-yellow text-md text-background hover:bg-custom-yellow hover:scale-[1.02] duration-200 w-full">
            Hire Me
          </Button>
        </Link>
        <Link
          href="/cv.pdf"
          download="cv.pdf"
          target="_blank"
          className="w-full"
        >
          <Button className=" text-md text-background  hover:scale-[1.02] duration-200 w-full">
            Download CV
          </Button>
        </Link>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
