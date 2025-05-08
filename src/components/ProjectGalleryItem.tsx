import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import { PortfolioType } from "@/types";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import InitialScale from "./animation/InitialScale";
import InitialTransition from "./animation/InitialTransition";
import { TooltipContent } from "./ui/tooltip";

const ProjectGalleryItem: React.FC<PortfolioType> = ({
  categoryName,
  projects,
}) => {
  return (
    <div className="">
      <InitialTransition>
        <h3 className="my-5 text-lg font-semibold text-custom-yellow">
          {projects.length > 0 && categoryName}
        </h3>
      </InitialTransition>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-start gap-3 items-start">
        {projects.length > 0 &&
          projects.map(
            (
              { thumbnailUrl, liveLinkUrl, name, description, technologyUsed },
              index
            ) => (
              <InitialScale key={index}>
                <div className="bg-secondary p-3 border dark:border-muted-foreground/10 rounded-lg shadow lg:max-w-[340px] hover:scale-[1.05] duration-300 min-h-[380px]">
                  <div className="relative block group">
                    <figure className="rounded-lg overflow-hidden">
                      <Image
                        src={thumbnailUrl}
                        alt="Project Img"
                        width={360}
                        height={360}
                        className="w-full h-[190px] object-fit-fill"
                      />
                    </figure>
                    <div className="absolute bottom-0 w-full h-0 bg-custom-yellow rounded-lg opacity-50 group-hover:opacity-75 group-hover:h-full transition-all duration-300"></div>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          className="absolute top-[50%] left-[50%] translate-middle-x translate-middle-y inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-45"
                          href={liveLinkUrl}
                          target="_blank"
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
                    <p className="text-muted-foreground text-sm">
                      {description}
                    </p>
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
              </InitialScale>
            )
          )}
      </div>
    </div>
  );
};

export default ProjectGalleryItem;
