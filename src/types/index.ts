import { JSX } from "react";

type StateType = {
  successful: boolean;
  error: boolean;
  errorMsg: string;
};

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
  icon: JSX.Element;
  skills: SkillType[];
}

interface AcademicEducationType {
  id: number | string;
  instituteName: string;
  duration?: string;
  session?: string;
  department?: string;
  subject_group: string;
  certificateName: string;
  description: string;
}

// Professional Course type
interface ProfessionalCourseType {
  id: number | string;
  provider: string;
  duration: string;
  courseName: string;
  description: string;
}

interface EducationType {
  academicEducation: AcademicEducationType[];
  professionalCourse: ProfessionalCourseType[];
}

interface ProjectType {
  name: string;
  description: string;
  technologyUsed: string[];
  thumbnailUrl: string;
  liveLinkUrl: string;
}

interface PortfolioType {
  categoryName: string;
  projects: ProjectType[];
}

interface BlogType {
  id: number | string;
  title: string;
  shortDes: string;
  thumbnail: string;
  description?: string;
  publishedDate: Date;
  tags: string[];
  category: string[];
  authorName: string;
}

export type {
  AcademicEducationType,
  BlogType,
  EducationType,
  PortfolioType,
  ProfessionalCourseType,
  ProjectType,
  ServiceCategoryType,
  ServiceType,
  SkillsType,
  StateType,
};
