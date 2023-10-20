type Props = {
  children: any;
};

const SideNavbarWrapper = ({ children }: Props) => {
  return (
    <nav className={"bg-gray-20 w-1/4 t-20 flex flex-col"}>{children}</nav>
  );
};

export default SideNavbarWrapper;
