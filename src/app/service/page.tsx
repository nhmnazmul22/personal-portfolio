import PageHeading from "@/components/PageHeading";
import ServiceCard from "@/components/ServiceCard";

const page = () => {
  return (
    <div className="container">
      <PageHeading
        title="My Services"
        subTitle="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
      />
      <div className="mt-5">
        <ServiceCard />
      </div>
    </div>
  );
};

export default page;
