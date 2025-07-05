import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "About Us", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const testimonials = [
  {
    user: "Sarah Chen",
    company: "TechFlow Solutions",
    image: user1,
    text: "Praxox Technologies transformed our business operations with their innovative software solutions. Their team's expertise and dedication exceeded our expectations.",
  },
  {
    user: "Marcus Rodriguez",
    company: "Global Retail Corp",
    image: user2,
    text: "The e-commerce platform developed by Praxox Technologies increased our online sales by 300%. Their attention to detail and user experience design is outstanding.",
  },
  {
    user: "Dr. Emily Watson",
    company: "HealthTech Innovations",
    image: user3,
    text: "Praxox Technologies delivered a cutting-edge healthcare management system that streamlined our operations and improved patient care significantly.",
  },
  {
    user: "James Thompson",
    company: "FinServ Solutions",
    image: user4,
    text: "Their cybersecurity implementation and compliance framework helped us achieve regulatory standards while protecting our sensitive financial data.",
  },
  {
    user: "Lisa Park",
    company: "EduTech Pro",
    image: user5,
    text: "The AI-powered learning platform developed by Praxox Technologies revolutionized our educational content delivery and student engagement.",
  },
  {
    user: "Robert Kim",
    company: "Manufacturing Plus",
    image: user6,
    text: "Praxox Technologies' IoT solution optimized our manufacturing processes, reducing costs by 25% and improving efficiency across all facilities.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Custom Software Development",
    description:
      "Tailored software solutions designed to meet your specific business needs and drive digital transformation.",
  },
  {
    icon: <Fingerprint />,
    text: "Web & Mobile Applications",
    description:
      "Responsive web applications and native mobile apps that deliver exceptional user experiences across all devices.",
  },
  {
    icon: <ShieldHalf />,
    text: "Cloud Solutions & DevOps",
    description:
      "Scalable cloud infrastructure and automated deployment pipelines to optimize your development workflow.",
  },
  {
    icon: <BatteryCharging />,
    text: "AI & Machine Learning",
    description:
      "Intelligent solutions powered by cutting-edge AI and ML technologies to automate and enhance your business processes.",
  },
  {
    icon: <PlugZap />,
    text: "Digital Transformation",
    description:
      "End-to-end digital transformation services to modernize your business operations and improve efficiency.",
  },
  {
    icon: <GlobeLock />,
    text: "Cybersecurity & Compliance",
    description:
      "Robust security solutions and compliance frameworks to protect your data and ensure regulatory adherence.",
  },
  {
    icon: <BatteryCharging />,
    text: "IoT & Embedded Systems",
    description:
      "Connect, monitor, and control devices with smart IoT solutions for industrial and consumer applications.",
  },
  {
    icon: <PlugZap />,
    text: "API Integration & Automation",
    description:
      "Seamlessly integrate third-party services and automate workflows to boost productivity and connectivity.",
  },
  {
    icon: <ShieldHalf />,
    text: "IT Consulting & Strategy",
    description:
      "Expert guidance to align your technology investments with your business goals for maximum ROI.",
  },
  {
    icon: <GlobeLock />,
    text: "Blockchain Solutions",
    description:
      "Leverage blockchain for secure, transparent, and decentralized business processes and transactions.",
  },
  {
    icon: <BotMessageSquare />,
    text: "UI/UX Design Services",
    description:
      "Create intuitive, engaging, and accessible digital experiences for your users across all platforms.",
  },
];

export const checklistItems = [
  {
    title: "Strategic Planning & Analysis",
    description:
      "We begin with a comprehensive analysis of your business requirements and create a strategic roadmap for your digital transformation journey.",
  },
  {
    title: "Agile Development Process",
    description:
      "Our iterative development approach ensures rapid delivery, continuous feedback, and the ability to adapt to changing requirements.",
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "Rigorous testing protocols and quality assurance processes ensure your solutions are robust, secure, and perform flawlessly.",
  },
  {
    title: "Deployment & Support",
    description:
      "Seamless deployment with ongoing support, maintenance, and optimization to ensure your solutions continue to deliver value.",
  },
];

export const pricingOptions = [
  {
    title: "Starter",
    price: "Custom",
    features: [
      "Basic web application",
      "Responsive design",
      "Basic SEO optimization",
      "3 months support",
    ],
  },
  {
    title: "Professional",
    price: "Custom",
    features: [
      "Full-stack development",
      "Database integration",
      "API development",
      "6 months support",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Custom enterprise solution",
      "Scalable architecture",
      "24/7 support",
      "Ongoing maintenance",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Case Studies" },
  { href: "#", text: "White Papers" },
  { href: "#", text: "Blog" },
  { href: "#", text: "Webinars" },
  { href: "#", text: "Knowledge Base" },
];

export const platformLinks = [
  { href: "#", text: "Services" },
  { href: "#", text: "Technologies" },
  { href: "#", text: "Industries" },
  { href: "#", text: "Portfolio" },
  { href: "#", text: "Careers" },
];

export const communityLinks = [
  { href: "#", text: "About Us" },
  { href: "#", text: "Team" },
  { href: "#", text: "Contact" },
  { href: "#", text: "Partners" },
  { href: "#", text: "News" },
];
