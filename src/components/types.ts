export enum SelectedPage {
  /* Home */
  Home = "/",
  /* About Parent */
  About = "/about/",
  Mission = "/about/",
  // Mission = "/about/mission",
  Operations = "/operations",
  Governance = "/governance",

  /* Media  */
  Media = "/media",

  /* Link to youtube initially  */
  // InspiringSeries = "/media/inspiring-series",
  InspiringSeries = "https://www.youtube.com/watch?v=5dzKGo8DMkg&list=PLws4wxg02B74Ux98f7g8LSnL__V-EZkZY",
  // ProfessionalInsightsSeries = "/media/professional-insights-series",
  ProfessionalInsightsSeries = "https://www.youtube.com/watch?v=w7MMKakAOiM&list=PLws4wxg02B77u0uOoyyxQ5DusOiV82vAB",
  // CollegeAdviceSeries = "/media/college-advice-series",
  CollegeAdviceSeries = "https://www.youtube.com/@aggiesinspire",

  /* Programs */
  Programs = "/programs",
  AggiesAssist = "/aggiesassist",
  // AggiesInspireMedia = "/aggiesinspiremedia",
  /* For the time begining before we get the subdomain media.aggiesinspire.org */
  AggiesInspireMedia = "/media",
  Scholarships = "/scholarships",

  /* Donor Relations */
  DonorRelations = "/donorrelations",
  Donate = "https://givebutter.com/aggies-inspire",
  // Donate = "/donorrelations/donate",

  /* Contact Us */
  Contact = "/contact",
}

/* For MEDIA section */
export enum MediaSelectedPage {
  Informational = "informational",
  Inspiring = "inspiring",
  ProfessionalInsights = "professionalinsights",
  CollegeAdvice = "collegeadvice",
}

/* For ABOUT section */
export enum AboutSelectedPage {
  Informational = "informational",
  Mission = "mission",
  Governance = "governance",
  Operations = "operations",
}

export interface AboutSectionsType {
  icon: JSX.Element;
  title: string;
  description: string;
  selectedpage: SelectedPage;
}
import type { StaticImageData } from "next/image";
export interface MediaSectionsType {
  name: string;
  description?: string;
  selectedpage: SelectedPage;
  url: string;
  image: StaticImageData;
}
export interface HomeSectionsType {
  name: string;
  selectedpage: SelectedPage;
}

export type SideNavbarType = {
  name: string;
  selectedPage: any;
  setSelectedPage: (value: any) => void;
};
