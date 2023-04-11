import { StaticImageData } from 'next/image';

export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus'
}

export interface BenefitType {
  icon: JSX.Element,
  description: string,
  title: string,
}

export interface ClassesType {
  image: StaticImageData,
  name: string,
  description?: string
}
