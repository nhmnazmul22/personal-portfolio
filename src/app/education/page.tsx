import InitialTransition from "@/components/animation/InitialTransition";
import EducationCard from "@/components/EducationCard";
import PageHeading from "@/components/PageHeading";
import ProfessionalCourseCard from "@/components/ProfessionalCourseCard";
import { education } from "@/constants";

const EducationPage = () => {
  return (
    <section className="container my-5">
      <PageHeading
        title="Education"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at dignissimos aliquid praesentium, harum mollitia laborum nulla consequatur accusantium natus!"
      />

      <div className="mt-5 grid grid-cols-1 gap-5">
        <InitialTransition>
          <h2 className="text-lg font-semibold">Academic Education:</h2>
        </InitialTransition>
        {education.academicEducation.map(
          ({
            id,
            instituteName,
            session,
            subject_group,
            certificateName,
            description,
            duration,
          }) => (
            <EducationCard
              key={id}
              id={id}
              instituteName={instituteName}
              session={session}
              duration={duration && duration}
              subject_group={subject_group}
              certificateName={certificateName}
              description={description}
            />
          )
        )}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5">
        <InitialTransition>
          <h2 className="text-lg font-semibold">Professional Courses:</h2>
        </InitialTransition>
        {education.professionalCourse.map(
          ({ id, provider, duration, courseName, description }) => (
            <ProfessionalCourseCard
              key={id}
              id={id}
              provider={provider}
              duration={duration}
              courseName={courseName}
              description={description}
            />
          )
        )}
      </div>
    </section>
  );
};

export default EducationPage;
