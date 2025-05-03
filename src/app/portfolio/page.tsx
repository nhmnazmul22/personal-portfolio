import CategoryButton from "@/components/CategoryButton";
import PageHeading from "@/components/PageHeading";
import ProjectGallery from "@/components/ProjectGallery";
import { portfolio } from "@/constants";

const PortfolioPage = () => {
  
  
  
  return (
    <section className="container my-5">
      <PageHeading
        title="My Portfolio"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officia dignissimos neque totam repudiandae laudantium quam in molestias enim aliquam?"
      />
      <div className="mt-5">
        <CategoryButton />
        <div className="mt-5 grid grid-cols-1 gap-5">
          {portfolio.map(({ categoryName, projects }) => (
            <ProjectGallery
              key={categoryName}
              categoryName={categoryName}
              projects={projects}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
