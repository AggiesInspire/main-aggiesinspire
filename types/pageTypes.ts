export enum SelectedPage {
  Home = "/",
  /* About drop down menu*/
  About = "/about/", // aka Overview
  Governance = "/governance",
  Philosophy = "/philosophy", // aka Our Philosphy

  Operations = "/operations",
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
