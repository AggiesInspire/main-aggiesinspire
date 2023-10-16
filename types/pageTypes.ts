export enum SelectedPage {
  Home = "/",
  About = "/about/",
  Operations = "/operations",
  Governance = "/governance",
  Media = "/media",
  Contact = "/contact",
  Youtube = "www.youtube.com/aggiesinspire",
}

export interface HomeType {
  name: string;
  selectedpage: SelectedPage;
}

export type PartnerType = {
  name: string;
  websiteUrl: string;
  image: string;
  mission: string;
  description?: string;
  url?: string;
};
