"use client";
import { portfolio } from "@/constants";
import { usePortfolioContext } from "@/context/PortfolioContext";
import ProjectGalleryItem from "./ProjectGalleryItem";

const ProjectGallery = () => {
  const { category } = usePortfolioContext();

  const filteredPortfolio = portfolio.filter((item) => {
    if (category === "All Project") {
      return portfolio;
    }
    return item.categoryName === category;
  });

  return (
    <div className="mt-5 grid grid-cols-1 gap-5">
      {filteredPortfolio.map(({ categoryName, projects }) => (
        <ProjectGalleryItem
          key={categoryName}
          categoryName={categoryName}
          projects={projects}
        />
      ))}
    </div>
  );
};

export default ProjectGallery;
