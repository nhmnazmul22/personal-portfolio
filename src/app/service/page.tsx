import PageHeading from "@/components/PageHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/constants";

const page = () => {
  return (
    <section className="container py-5">
      <PageHeading
        title="My Services"
        subTitle="Empowering your business with innovative, reliable, and tailored digital solutions.
From web development to strategy, we’re here to help you grow with confidence"
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
