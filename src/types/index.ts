import { JSX } from "react";

// Service Types
interface ServiceType {
  title: string;
  shortDes: string;
  longDes: string;
  icon: JSX.Element;
  category: string[];
}

export type { ServiceType };
