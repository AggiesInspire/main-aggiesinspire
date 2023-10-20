import { SelectedPage } from "@/types/pageTypes";
import { NavbarTypes } from "@/types/navbarTypes";

const navbarLinks: Array<NavbarTypes> = [
  {
    title: "About",
    isDropDown: true,
    dropDown: [
      {
        title: "Overview",
        link: SelectedPage.About,
      },
      {
        title: "Our Philosophy",
        link: SelectedPage.Philosophy,
      },
      {
        title: "Governance",
        link: SelectedPage.Governance,
      },
    ],
  },
];

export default navbarLinks;
