"use client";
import { SkillsType } from "@/types";
import { Progress } from "./ui/progress";

const SkillsCard: React.FC<SkillsType> = ({ category, skills }) => {
  return (
    <div className="bg-secondary p-5 rounded-md shadow-custom border border-muted-foreground/10">
      <h3 className="text-lg font-medium w-fit border-b border-foreground/15">
        {category}
      </h3>
      <div className="flex flex-col gap-2 mt-3">
        {skills.map(({ name, percent }, index) => (
          <div key={index}>
            <p className="text-base mb-2">
              {name} -{" "}
              <span className="text-muted-foreground text-sm">{percent}%</span>
            </p>
            <Progress value={percent} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
