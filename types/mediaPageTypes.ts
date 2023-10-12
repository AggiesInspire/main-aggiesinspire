import type { StaticImageData } from "next/image";
export interface MediaType {
  name: string;
  description?: string;
  selectedpage: any;
  url: string;
  image: StaticImageData;
}
