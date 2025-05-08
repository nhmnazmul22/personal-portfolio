import CategoryButton from "@/components/CategoryButton";
import PageHeading from "@/components/PageHeading";
import ProjectGallery from "@/components/ProjectGallery";
import { PortfolioProvider } from "@/context/PortfolioContext";

const PortfolioPage = () => {
  return (
    <section className="container my-5">
      <PageHeading
        title="My Portfolio"
        subTitle="Explore a collection of projects that highlight my journey as a developer, from concept to execution."
      />
      <PortfolioProvider>
        <div className="mt-5">
          <CategoryButton />
          <ProjectGallery />
        </div>
      </PortfolioProvider>
    </section>
  );
};

export default PortfolioPage;
