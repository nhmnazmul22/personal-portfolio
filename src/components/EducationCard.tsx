import { AcademicEducationType } from "@/types";

const EducationCard: React.FC<AcademicEducationType> = ({
  id,
  instituteName,
  session,
  duration,
  subject_group,
  certificateName,
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
            Basic Info:
          </h2>
          <h3 className="text-lg font-medium">{instituteName}</h3>
          <p className="text-muted-foreground text-sm sm:text-base">
            Subject/Group: {subject_group}
          </p>
          <p className="text-muted-foreground text-sm sm:text-base">
            Session: {session}
          </p>
          {duration && (
            <p className="text-muted-foreground text-sm sm:text-base">
              Duration: {duration}
            </p>
          )}
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-medium border-b border-foreground/20 mb-3 w-fit text-custom-yellow">
            Certificate Info:
          </h2>
          <h3 className="text-lg font-medium">{certificateName}</h3>
          <p className="text-muted-foreground text-sm sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
