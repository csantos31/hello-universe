import { StackKey } from "../consts/StackItems";

export interface Project {
  name: string;
  github_url: string;
  image: string;
  description: string;
  stack: StackKey[];
}
