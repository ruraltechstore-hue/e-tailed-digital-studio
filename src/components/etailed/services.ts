export type Service = {
  number: string;
  name: string;
  short: string;
  description: string;
  bullets: string[];
  image: string;
  alt: string;
};

import brandImage from "@/assets/service-brand.jpg";
import identityImage from "@/assets/service-identity.jpg";
import webImage from "@/assets/service-web.jpg";
import commerceImage from "@/assets/service-commerce.jpg";
import contentImage from "@/assets/service-content.jpg";
import marketingImage from "@/assets/service-marketing.jpg";
import crmImage from "@/assets/service-crm.jpg";
import saasImage from "@/assets/service-saas.jpg";

export const services: Service[] = [
  { number: "01", name: "Brand Strategy", short: "Clear position and purpose.", description: "A focused direction for your brand.", bullets: ["Research", "Positioning"], image: brandImage, alt: "Brand strategy moodboards and colour studies" },
  { number: "02", name: "Visual Identity", short: "Distinct and consistent.", description: "An identity built to work everywhere.", bullets: ["Art direction", "Identity systems"], image: identityImage, alt: "Refined identity system applied to packaging" },
  { number: "03", name: "Websites", short: "Clear, fast, effective.", description: "Digital experiences designed for action.", bullets: ["UX and design", "Development"], image: webImage, alt: "Website interface and wireframes on a studio desk" },
  { number: "04", name: "E-commerce", short: "Less friction. More growth.", description: "Simple shopping journeys that convert.", bullets: ["Store strategy", "Checkout experience"], image: commerceImage, alt: "Online shop beside a product photography setup" },
  { number: "05", name: "Content & Campaigns", short: "Ideas with reach.", description: "Focused campaigns and useful content.", bullets: ["Campaign concepts", "Production"], image: contentImage, alt: "Campaign storyboard, camera and mobile content layout" },
  { number: "06", name: "Performance Marketing", short: "Growth you can measure.", description: "Testing and media built around results.", bullets: ["Paid media", "Optimisation"], image: marketingImage, alt: "Performance marketing analytics on a monitor" },
  { number: "07", name: "CRM & Automation", short: "Smarter customer journeys.", description: "Connected systems with less manual work.", bullets: ["CRM setup", "Automation"], image: crmImage, alt: "Team reviewing a CRM customer journey" },
  { number: "08", name: "SaaS Products", short: "Useful tools that scale.", description: "Simple products for complex workflows.", bullets: ["Product strategy", "SaaS development"], image: saasImage, alt: "SaaS workflow and analytics across laptop and tablet" },
];
