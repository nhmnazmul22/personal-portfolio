import { JSX } from "react";

// Service Types
interface ServiceType {
  title: string;
  shortDes: string;
  longDes: string;
  icon: JSX.Element;
  category: string[];
}

// Service Category Types
interface ServiceCategoryType {
  title: string;
  shortDes: string;
  icon: JSX.Element;
}

// Single Skills Type
type SkillType = {
  name: string;
  percent: number;
};

// Skills Types
interface SkillsType {
  category: string;
  skills: SkillType[];
}

export type { ServiceCategoryType, ServiceType, SkillsType };
