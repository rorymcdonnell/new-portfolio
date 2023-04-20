export enum SelectedPage {
  Home = "home",
  Experience = "experience",
  Projects = "projects",
  ContactUs = "contactus",
}

export interface JobExperienceType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ProjectType {
  title: string;
  technologies: string[];
  gitHubUrl: string;
  liveUrl: string;
}
