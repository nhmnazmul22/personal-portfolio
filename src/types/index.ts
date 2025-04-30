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

export type { ServiceCategoryType, ServiceType };
