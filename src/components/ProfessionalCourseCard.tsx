import { ProfessionalCourseType } from "@/types";

const ProfessionalCourseCard: React.FC<ProfessionalCourseType> = ({
  id,
  provider,
  duration,
  courseName,
  description,
}) => {
  return (
    <div
      id={id.toString()}
      className="bg-secondary p-5 rounded-md border border-muted-foreground/10"
    >
      <div className="flex flex-col lg:flex-row gap-5 justify-between items-start">
        <div className="max-w-[360px] w-full">
          <h2 className="text-lg font-medium border-b border-foreground/20 mb-3 w-fit text-custom-yellow">
            Provider Info:
          </h2>
          <h3 className="text-lg font-medium">{provider}</h3>
          <p className="text-muted-foreground text-sm sm:text-base">
            Duration: {duration}
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-medium border-b border-foreground/20 mb-3 w-fit text-custom-yellow">
            Course Info:
          </h2>
          <h3 className="text-lg font-medium">{courseName}</h3>
          <p className="text-muted-foreground text-sm sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCourseCard;
