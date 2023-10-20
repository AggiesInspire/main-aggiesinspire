export type NavbarTypes = {
  title: string;
  isDropDown: boolean;
  dropDown?: Array<{
    title: string;
    link: any;
  }>;
};
