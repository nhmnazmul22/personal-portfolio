import PageHeading from "@/components/PageHeading";
import SkillsCard from "@/components/SkillsCard";
import { skills } from "@/constants";
const SkillsPage = () => {
  return (
    <section className="container my-5">
      <PageHeading
        title="My Skills"
        subTitle="As a passionate and detail-oriented MERN Stack Developer, I specialize in building dynamic, responsive, and user-friendly web applications"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        {skills.map(({ category, skills }, index) => (
          <SkillsCard key={index} category={category} skills={skills} />
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
