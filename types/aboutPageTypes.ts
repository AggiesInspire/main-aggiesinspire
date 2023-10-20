export enum SelectedPage {
  Rationale = "rationale",
  Mission = "mission",
  Governance = "governance",
  Operations = "operations",
}

export interface AboutType {
  icon: JSX.Element;
  title: string;
  description: string;
  selectedpage: SelectedPage;
}
