import PageHeading from "@/components/PageHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/constants";

const page = () => {
  return (
    <section className="container py-5">
      <PageHeading
        title="My Services"
        subTitle="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
      />
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 space-y-5 lg:space-x-4">
        {services.map(({ title, shortDes, longDes, icon, category }, index) => (
          <ServiceCard
            key={index}
            title={title}
            shortDes={shortDes}
            longDes={longDes}
            icon={icon}
            category={category}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
