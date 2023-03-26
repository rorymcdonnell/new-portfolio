export enum SelectedPage {
  Home = "home",
  Experience = "experience",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface JobExperienceType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
