export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Whole Home Renovations",
    description: "Complete transformations tailored to your lifestyle.",
    icon: "home",
  },
  {
    title: "Kitchen Remodeling",
    description: "Beautiful, functional kitchens built to inspire.",
    icon: "kitchen",
  },
  {
    title: "Bathroom Remodeling",
    description: "Spa-like bathrooms with quality and style.",
    icon: "bathroom",
  },
  // Patricia asks me to remove this because they are not licensed.
  // As I am not sure what exactly she means, commenting out for now.
  // {
  //   title: "Design & Build",
  //   description: "Seamless planning and expert project management.",
  //   icon: "design",
  // },
];
