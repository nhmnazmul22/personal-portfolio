import CategoryButton from "@/components/CategoryButton";
import PageHeading from "@/components/PageHeading";
import ProjectGallery from "@/components/ProjectGallery";
import { PortfolioProvider } from "@/context/PortfolioContext";

const PortfolioPage = () => {
  return (
    <section className="container my-5">
      <PageHeading
        title="My Portfolio"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officia dignissimos neque totam repudiandae laudantium quam in molestias enim aliquam?"
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
