import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import { PortfolioType } from "@/types";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TooltipContent } from "./ui/tooltip";

const ProjectGallery: React.FC<PortfolioType> = ({
  categoryName,
  projects,
}) => {
  return (
    <div className="">
      <h3 className="my-5 text-lg font-semibold text-custom-yellow">
        {categoryName}
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-start gap-3 items-start">
        {projects.map(
          ({
            name,
            description,
            technologyUsed,
            thumbnailUrl,
            liveLinkUrl,
          }) => (
            <div
              key={`${name}-${Date.now().toLocaleString()}`}
              className="bg-secondary p-3 border border-muted-foreground/10 rounded-lg shadow lg:max-w-[340px]"
            >
              <div className="relative block group">
                <figure className="rounded-lg overflow-hidden">
                  <Image
                    src={thumbnailUrl}
                    alt="Project Img"
                    width={360}
                    height={360}
                    className="w-full"
                  />
                </figure>
                <div className="absolute bottom-0 w-full h-0 bg-custom-yellow rounded-lg opacity-50 group-hover:opacity-75 group-hover:h-full transition-all duration-300"></div>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      className="absolute top-[50%] left-[50%] translate-middle-x translate-middle-y inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-45"
                      href={liveLinkUrl}
                    >
                      <Link2 />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live Link</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <h3 className="text-xl font-medium">{name}</h3>
                <p className="text-muted-foreground text-sm">{description}</p>
                <div className="flex gap-2 flex-wrap justify-start items-center mt-3">
                  {technologyUsed.map((value, index) => (
                    <span
                      key={index}
                      className="bg-custom-yellow py-1 px-2 text-xs text-background rounded-full"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;
