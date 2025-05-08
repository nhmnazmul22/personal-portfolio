import InitialScale from "@/components/animation/InitialScale";
import PageHeading from "@/components/PageHeading";
import ServiceCategoryCard from "@/components/ServiceCategoryCard";
import SvgAnimationIcons from "@/components/SvgAnimationIcons";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container py-5 max-md:py-10">
      <div className="relative">
        <SvgAnimationIcons />
        <div className="w-full mx-auto mt-7 md:mt-5">
          <div className="relative z-[1]">
            <InitialScale>
              <h1 className="text-4xl md:text-[46px] lg:text-6xl font-bold lg:mb-4">
                {"I'm Nhm Nazmul"}
              </h1>
            </InitialScale>
            <InitialScale>
              <p className="text-3xl md:tex-[42px] lg:text-5xl font-semibold">
                <span className="text-custom-yellow">MERN Stack</span> Developer
              </p>
            </InitialScale>
            <InitialScale>
              <p className="text-muted-foreground max-sm:text-sm text-base mt-4">
                Hi there! I’m a MERN Stack Developer with a passion for creating
                dynamic, scalable, and user-friendly web applications. My
                expertise lies in React.js, Next.js, Node.js, Express.js, and
                MongoDB, alongside a strong foundation in REST API development
                and integration. With solid experience in front-end and back-end
                technologies, I specialize in delivering high-quality websites
                that exceed client expectations.
              </p>
            </InitialScale>
            <div className="flex items-center justify-start space-x-4 mt-7">
              <InitialScale>
                <Link
                  href="https://www.upwork.com/freelancers/~01e4bb6efdd3ecb887"
                  target="_blank"
                >
                  <Button className="bg-custom-yellow text-sm md:text-base group rounded hover:bg-custom-yellow w-[150px] h-[40px] hover:scale-[1.02]">
                    Hire Me
                    <ArrowRight
                      size={16}
                      className="transition-translate group-hover:translate-x-1 duration-200"
                    />
                  </Button>
                </Link>
              </InitialScale>
              <InitialScale>
                <Link href="/cv.pdf" download="cv.pdf" target="_blank">
                  <Button className="text-sm md:text-base group rounded  w-[150px] h-[40px] hover:scale-[1.02]">
                    Download CV
                    <ArrowRight
                      size={16}
                      className="transition-translate group-hover:translate-x-1 duration-200"
                    />
                  </Button>
                </Link>
              </InitialScale>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <PageHeading
          title="Services"
          subTitle="Empowering your business with innovative, reliable, and tailored digital solutions. From web development to strategy, we’re here to help you grow with confidence"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
          {serviceCategories.map(({ title, shortDes, icon }, index) => (
            <ServiceCategoryCard
              key={index}
              title={title}
              shortDes={shortDes}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
