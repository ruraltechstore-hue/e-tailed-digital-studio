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
  { number: "01", name: "Brand Strategy", short: "Positioning that earns attention.", description: "A focused brand system with one clear point of view.", bullets: ["Audience research", "Positioning", "Voice and messaging"], image: brandImage, alt: "Brand strategy moodboards and colour studies" },
  { number: "02", name: "Visual Identity", short: "Systems built to be remembered.", description: "Distinctive identities designed to stay coherent at scale.", bullets: ["Art direction", "Logo and type", "Brand toolkits"], image: identityImage, alt: "Refined identity system applied to packaging" },
  { number: "03", name: "Websites", short: "Fast, clear experiences built for action.", description: "Editorial websites that feel effortless and perform." , bullets: ["UX and interface design", "Responsive development", "Performance and access"], image: webImage, alt: "Website interface and wireframes on a studio desk" },
  { number: "04", name: "E-commerce", short: "Story meets conversion.", description: "Shopping journeys that let products lead and remove friction.", bullets: ["Store strategy", "Product and checkout", "Launch optimisation"], image: commerceImage, alt: "Online shop beside a product photography setup" },
  { number: "05", name: "Content & Campaigns", short: "Clear ideas, crafted to travel.", description: "Campaigns and content systems built for relevance.", bullets: ["Campaign concepts", "Content systems", "Copy and production"], image: contentImage, alt: "Campaign storyboard, camera and mobile content layout" },
  { number: "06", name: "Performance Marketing", short: "Measured, sustainable growth.", description: "Disciplined testing that turns attention into momentum.", bullets: ["Paid media", "Creative testing", "Reporting"], image: marketingImage, alt: "Performance marketing analytics on a monitor" },
  { number: "07", name: "CRM & Automation", short: "Smarter journeys. Less manual work.", description: "Connected customer systems that simplify work and improve service.", bullets: ["CRM setup", "Journey automation", "Reporting"], image: crmImage, alt: "Team reviewing a CRM customer journey" },
  { number: "08", name: "SaaS Products", short: "Useful software, built to scale.", description: "Focused products that turn complex workflows into simple tools.", bullets: ["Product strategy", "UX and prototyping", "SaaS development"], image: saasImage, alt: "SaaS workflow and analytics across laptop and tablet" },
];
