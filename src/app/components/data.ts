import { Project } from "./types/data";

export const projectData = (): Project[] => [
    {
      id: 0,
      image: "/project-1.jpg",
      name: "UI/UX Design",
      title: "Modern E-Commerce Mobile App UI/UX Design",
      subtitle: "Technology / Design",
      date: "March 2023 - August 2023",
      client: "Luxe Retail Group",
      location: "New York, USA",
      description: "Designed a premium mobile shopping experience for Luxe Retail Group's e-commerce platform, combining luxury aesthetics with intuitive navigation to boost engagement and conversions.",
      keyObjectives: [
        "Create a UI aligning with Luxe's premium brand identity",
        "Optimize UX for browsing, checkout, and personalization",
        "Ensure mobile responsiveness and accessibility"
      ],
      scopeOfWork: [
        "User research & competitive analysis",
        "Wireframing & interactive prototyping",
        "Visual design & brand integration",
        "UX optimization & usability testing"
      ],
      tools: ["Figma", "Adobe XD", "Maze", "After Effects"],
      outcome: "30% increase in engagement, 20% reduction in checkout abandonment",
      testimonial: {
        name: "Sarah Mitchell",
        position: "Digital Director, Luxe Retail Group",
        feedback: "The app perfectly captures our brand's sophistication while delivering an effortless shopping experience."
      }
    },
    {
      id: 1,
      image: "/project-2.jpg",
      name: "Analytic Solution",
      title: "Sales Performance Dashboard & Predictive Analytics",
      subtitle: "Data / Analytics",
      date: "September 2023 - February 2024",
      client: "UrbanMart Retail Chain",
      location: "Chicago, USA",
      description: "Developed an interactive analytics platform with predictive capabilities to optimize inventory management and sales strategies across 50+ retail locations.",
      keyObjectives: [
        "Centralize multi-source sales data",
        "Deliver real-time KPI visualization",
        "Implement demand forecasting models",
        "Enable self-service reporting"
      ],
      scopeOfWork: [
        "ETL pipeline development",
        "Power BI dashboard design",
        "Predictive modeling",
        "Cloud deployment & training"
      ],
      tools: ["Python", "Power BI", "Azure", "Snowflake", "Prophet"],
      outcome: "15% inventory cost reduction, 12% sales increase in underperforming stores",
      testimonial: {
        name: "Lisa Wong",
        position: "VP of Operations, UrbanMart",
        feedback: "The dashboard transformed our decision-making, helping cut waste and optimize staffing."
      }
    },
    {
      id: 2,
      image: "/project-3.jpg",
      name: "Tech Solution",
      title: "Corporate Website Redesign & Development",
      subtitle: "Technology / Web",
      date: "January 2024 - June 2024",
      client: "TechNova Solutions",
      location: "San Francisco, USA",
      description: "Complete website overhaul for an IT consulting firm to modernize their digital presence, improve lead generation, and showcase services effectively.",
      keyObjectives: [
        "Enhance brand perception through design",
        "Improve UX and mobile performance",
        "Increase conversions and SEO visibility"
      ],
      scopeOfWork: [
        "Discovery & strategy development",
        "UI/UX design system creation",
        "WordPress development",
        "SEO optimization"
      ],
      tools: ["Figma", "WordPress", "Elementor", "Yoast SEO"],
      outcome: "40% organic traffic growth, 25% more contact submissions",
      testimonial: {
        name: "Michael Carter",
        position: "Marketing Director, TechNova Solutions",
        feedback: "The new website represents our cutting-edge approach and has driven significant client inquiries."
      }
    }
  ];