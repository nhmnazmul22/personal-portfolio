import SvgAnimationIcons from "@/components/SvgAnimationIcons";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-5">
      <div className="container relative">
        <SvgAnimationIcons />
        <div className="max-w-[900px] w-full mx-auto  mt-5">
          <div className="relative z-[1]">
            <h1 className="text-4xl md:text-[46px] lg:text-6xl font-bold lg:mb-4">
              {"I'm Nhm Nazmul"}
            </h1>
            <p className="text-3xl md:tex-[42px] lg:text-5xl font-semibold">
              <span className="text-custom-yellow">MERN Stack</span> Developer
            </p>
            <p className="text-muted-foreground text-base mt-4">
              Hi there! I’m a MERN Stack Developer with a passion for creating
              dynamic, scalable, and user-friendly web applications. My
              expertise lies in React.js, Next.js, Node.js, Express.js, and
              MongoDB, alongside a strong foundation in REST API development and
              integration. With solid experience in front-end and back-end
              technologies, I specialize in delivering high-quality websites
              that exceed client expectations.
            </p>
            <div className="flex items-center justify-start space-x-4 mt-7">
              <Button className="bg-custom-yellow text-sm md:text-base group rounded hover:bg-custom-yellow w-[150px] h-[40px]">
                Hire Me
                <ArrowRight
                  size={16}
                  className="transition-translate group-hover:translate-x-1 duration-200"
                />
              </Button>
              <Button className="text-sm md:text-base group rounded  w-[150px] h-[40px]">
                Download CV
                <ArrowRight
                  size={16}
                  className="transition-translate group-hover:translate-x-1 duration-200"
                />
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
