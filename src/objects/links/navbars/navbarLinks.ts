import { SelectedPage } from "@/types/pageTypes";
import { NavbarTypes } from "@/types/navbarTypes";

const navbarLinks: Array<NavbarTypes> = [
  {
    title: "About",
    dropDown: [
      {
        title: "Overview",
        link: SelectedPage.About,
      },
      {
        title: "Our Philosophy",
        link: SelectedPage.About,
      },
      {
        title: "Governance",
        link: SelectedPage.Governance,
      },
    ],
  },
];

export default navbarLinks;
