import { ServiceData } from '@/app/components/types/data';

export const servicesData: ServiceData[] = [
  {
    id: 1,
    slug: "product-development",
    title: "Product Development",
    tagline: "From concept to market-ready solutions",
    heroImage: "/meeting.jpeg",
    overview: {
      description: "End-to-end product development services that transform your ideas into scalable, market-ready solutions. We combine technical expertise with user-centric design to build products that deliver real business value.",
      highlights: [
        "Full-cycle development from MVP to launch",
        "Cross-platform compatibility",
        "Scalable architecture design"
      ]
    },
    process: [
      {
        phase: "Discovery",
        description: "Requirement analysis and project scoping",
        tools: ["Figma", "Jira", "User Stories"]
      },
      {
        phase: "Prototyping",
        description: "Interactive mockups and user flows",
        tools: ["Figma", "Adobe XD"]
      },
      {
        phase: "Development",
        description: "Agile development with continuous integration",
        tools: ["React", "Node.js", "AWS"]
      }
    ],
    benefits: [
      {
        title: "Faster Time-to-Market",
        description: "Rapid prototyping and iterative development",
        icon: "⏱️"
      },
      {
        title: "Technical Excellence",
        description: "Clean code and scalable architecture",
        icon: "💻"
      },
      {
        title: "User-Centric Design",
        description: "Products built with real user needs in mind",
        icon: "👥"
      }
    ],
    useCases: [
      "Startups needing MVP development",
      "Enterprises modernizing legacy systems",
      "Businesses expanding to digital platforms"
    ],
    faqs: [
      {
        question: "What's your typical project timeline?",
        answer: "8-12 weeks for MVP depending on complexity"
      },
      {
        question: "Do you provide post-launch support?",
        answer: "Yes, we offer ongoing maintenance and feature enhancement packages"
      }
    ]
  },
  {
    id: 2,
    slug: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Beautiful interfaces with exceptional user experiences",
    heroImage: "/meeting.jpeg",
    overview: {
      description: "We create intuitive, visually stunning digital experiences that engage users and drive conversions. Our human-centered design approach ensures your product is both beautiful and functional.",
      highlights: [
        "User research and persona development",
        "Interactive prototypes",
        "Accessibility-compliant designs"
      ]
    },
    process: [
      {
        phase: "Research",
        description: "User interviews and market analysis",
        tools: ["Hotjar", "Google Analytics", "UserTesting"]
      },
      {
        phase: "Wireframing",
        description: "Low-fidelity structure and flow",
        tools: ["Figma", "Balsamiq"]
      },
      {
        phase: "Visual Design",
        description: "High-fidelity mockups and design systems",
        tools: ["Figma", "Adobe Creative Suite"]
      }
    ],
    benefits: [
      {
        title: "Increased Engagement",
        description: "Designs that keep users coming back",
        icon: "📈"
      },
      {
        title: "Higher Conversions",
        description: "Optimized user flows that drive actions",
        icon: "💰"
      },
      {
        title: "Brand Consistency",
        description: "Cohesive visual language across platforms",
        icon: "🎨"
      }
    ],
    useCases: [
      "Redesigning outdated interfaces",
      "Building design systems from scratch",
      "Improving conversion rates"
    ],
    faqs: [
      {
        question: "Do you provide design assets for development?",
        answer: "Yes, we deliver fully annotated designs with assets and style guides"
      },
      {
        question: "How many design iterations do you include?",
        answer: "We include 3 rounds of revisions in our standard package"
      }
    ]
  },
  {
    id: 3,
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Data-driven strategies for measurable growth",
    heroImage: "/meeting.jpeg",
    overview: {
      description: "Comprehensive digital marketing solutions that increase visibility, generate leads, and drive revenue. We combine creativity with analytics to deliver campaigns that actually work.",
      highlights: [
        "Full-funnel marketing strategies",
        "Performance tracking and optimization",
        "Multi-channel campaign management"
      ]
    },
    process: [
      {
        phase: "Strategy",
        description: "Audience identification and KPI setting",
        tools: ["Google Analytics", "SEMrush", "HubSpot"]
      },
      {
        phase: "Execution",
        description: "Campaign launch across channels",
        tools: ["Google Ads", "Meta Ads", "Mailchimp"]
      },
      {
        phase: "Optimization",
        description: "Continuous performance improvement",
        tools: ["Google Data Studio", "Hotjar"]
      }
    ],
    benefits: [
      {
        title: "Targeted Reach",
        description: "Precision targeting for ideal customers",
        icon: "🎯"
      },
      {
        title: "Transparent Reporting",
        description: "Clear metrics that show real impact",
        icon: "📊"
      },
      {
        title: "Cost Efficiency",
        description: "Maximizing ROI on ad spend",
        icon: "💸"
      }
    ],
    useCases: [
      "Launching new products/services",
      "Increasing brand awareness",
      "Improving lead generation"
    ],
    faqs: [
      {
        question: "How quickly will I see results?",
        answer: "Most campaigns show initial results within 4-6 weeks"
      },
      {
        question: "Do you manage social media accounts?",
        answer: "Yes, we offer full social media management and advertising"
      }
    ]
  },
  {
    id: 4,
    slug: "data-analysis",
    title: "Data Analysis",
    tagline: "Turn raw data into actionable insights",
    heroImage: "/meeting.jpeg",
    overview: {
      description: "Advanced analytics services that uncover hidden patterns, predict trends, and inform strategic decisions. We help you make sense of your data and use it to drive business growth.",
      highlights: [
        "Custom dashboard development",
        "Predictive modeling",
        "Data quality assessment"
      ]
    },
    process: [
      {
        phase: "Data Collection",
        description: "Identifying and aggregating data sources",
        tools: ["SQL", "Python", "Apache Kafka"]
      },
      {
        phase: "Cleaning",
        description: "Ensuring data accuracy and consistency",
        tools: ["Pandas", "OpenRefine"]
      },
      {
        phase: "Analysis",
        description: "Extracting meaningful insights",
        tools: ["R", "Tableau", "Power BI"]
      }
    ],
    benefits: [
      {
        title: "Informed Decisions",
        description: "Remove guesswork from strategic choices",
        icon: "🔍"
      },
      {
        title: "Competitive Edge",
        description: "Identify opportunities before others",
        icon: "🚀"
      },
      {
        title: "Process Optimization",
        description: "Find inefficiencies in your operations",
        icon: "⚙️"
      }
    ],
    useCases: [
      "Customer behavior analysis",
      "Operational efficiency improvements",
      "Financial performance tracking"
    ],
    faqs: [
      {
        question: "What data formats do you work with?",
        answer: "We handle structured and unstructured data including CSV, JSON, SQL databases, and more"
      },
      {
        question: "How do you ensure data security?",
        answer: "We follow GDPR and SOC 2 compliance standards with encrypted data handling"
      }
    ]
  },
  {
    id: 5,
    slug: "data-visualization",
    title: "Data Visualization",
    tagline: "Make complex data understandable at a glance",
    heroImage: "/meeting.jpeg",
    overview: {
      description: "Transform your complex datasets into clear, compelling visual stories. Our interactive dashboards and reports make data accessible to everyone in your organization.",
      highlights: [
        "Interactive business intelligence tools",
        "Real-time data reporting",
        "Executive-level summaries"
      ]
    },
    process: [
      {
        phase: "Requirement Gathering",
        description: "Understanding stakeholder needs",
        tools: ["User Interviews", "Jira"]
      },
      {
        phase: "Design",
        description: "Creating visualization frameworks",
        tools: ["Figma", "Tableau", "D3.js"]
      },
      {
        phase: "Implementation",
        description: "Building interactive dashboards",
        tools: ["Power BI", "Looker", "React"]
      }
    ],
    benefits: [
      {
        title: "Faster Insights",
        description: "Understand trends in seconds, not hours",
        icon: "⏩"
      },
      {
        title: "Better Communication",
        description: "Share findings across teams effectively",
        icon: "🗣️"
      },
      {
        title: "Actionable Reports",
        description: "Clear next steps from every visualization",
        icon: "✅"
      }
    ],
    useCases: [
      "Executive reporting",
      "Operational dashboards",
      "Customer analytics portals"
    ],
    faqs: [
      {
        question: "Can we update visualizations with new data automatically?",
        answer: "Yes, we set up live connections to your data sources for real-time updates"
      },
      {
        question: "Do you provide training on using the dashboards?",
        answer: "We include comprehensive training and documentation with every delivery"
      }
    ]
  }
];