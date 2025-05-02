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

export type {
  AcademicEducationType,
  EducationType,
  ProfessionalCourseType,
  ServiceCategoryType,
  ServiceType,
  SkillsType,
};
