import aiImg from "@/assets/project-ai-assistant.jpg";
import pumaImg from "@/assets/project-puma.jpg";
import retailImg from "@/assets/project-retail.jpg";

export const contact = {
  name: "Pranav Kakde",
  phone: "+91-9373454224",
  phoneHref: "tel:+919373454224",
  email: "pranavkakdedeofficial@gmail.com",
  emailHref: "mailto:pranavkakdeofficial@gmail.com",
  linkedin: "https://www.linkedin.com/in/pranav-kakde",
  github: "https://github.com/Pranav-kakde/",
  resume: "#",
};

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const roles = [
  "Data Analyst",
  "ML Engineer",
  "Power BI Developer",
  "Python Enthusiast",
  "AI Automation Builder",
];

export const skillGroups = [
  {
    title: "Data Analysis",
    icon: "search",
    level: 92,
    items: ["Data Cleaning", "Exploratory Data Analysis (EDA)", "Trend Analysis", "KPI Tracking","Story Telling"],
  },
  {
    title: "Programming",
    icon: "code",
    level: 85,
    items: ["Python", "SQL", "Java", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Visualization Tools",
    icon: "chart",
    level: 90,
    items: ["Power BI", "Advanced Excel", "Google Looker Studio"],
  },
  {
    title: "Power BI",
    icon: "layers",
    level: 88,
    items: ["DAX", "Power Query", "Data Modeling"],
  },
  {
    title: "Reporting & Insights",
    icon: "report",
    level: 87,
    items: [
      "Dashboard Automation",
      "Insight Generation",
      "Report Building",
      "Business Reports",
    ],
  },
  {
    title: "AI Automation & ML",
    icon: "bot",
    level: 80,
    items: ["Scikit-learn", "CrewAI", "n8n", "LangChain", "GenAI", "RAG"],
  },
] as const;

export const projects = [
  {
    title: "Retail Customer Behavior & Revenue Analytics Dashboard",
    image: retailImg,
    stack: ["Python", "SQL", "Power BI"],
    summary:
      "End-to-end retail analytics identifying revenue-driving customer segments and category performance.",
    details: [
      "Analyzed customer purchasing behavior across product categories and demographics to identify revenue-driving segments",
      "Identified top-performing categories contributing 38% of total revenue",
      "Evaluated the impact of customer subscriptions on revenue growth and buying patterns",
      "Performed age-group-wise revenue and sales distribution analysis",
      "Built interactive Power BI dashboards with slicers for category, gender, shipping type, and subscription status",
      "Tracked KPIs: Average Purchase Amount, Customer Count, Review Ratings",
    ],
    github: contact.github,
  },
  {
    title: "Puma Sales Analysis Dashboard",
    image: pumaImg,
    stack: ["Looker Studio", "Excel", "Data Modeling"],
    summary:
      "Interactive dashboard over 100,000+ transactions surfacing regional performance and profit drivers.",
    details: [
      "Interactive dashboard analyzing 100,000+ transaction records and 15+ business KPIs",
      "Dynamic visualizations for Sales Amount, Profit, Cost, Quantity Sold, Transactions, and category-wise performance",
      "Interactive maps and charts for sales distribution across states and cities",
      "Slicers and filters for Category, State, Customer Name, Order Number, and City-wise analysis",
      "Surfaced sales trends, regional performance, and profit-driving factors",
    ],
    github: contact.github,
  },
  {
    title: "AI Personal Assistant Workflow",
    image: aiImg,
    stack: ["n8n", "Docker", "Google APIs"],
    summary:
      "Modular AI agent automating email, calendar, notes, and expense tracking in real time.",
    details: [
      "AI-powered personal assistant workflow for task automation and real-time execution",
      "Integrated Google Calendar, Gmail, Google Search, and Notes API for seamless task management",
      "Centralized AI Agent handling user queries and triggering workflows via webhooks",
      "Features: email automation, calendar scheduling, note management, expense tracking",
      "Connected LLMs (Google Gemini) with memory modules for contextual responses",
      "Scalable, modular automation architecture",
    ],
    github: contact.github,
  },
] as const;

export const achievements = [
  {
    emoji: "🏆",
    title: "Smart India Hackathon 2024 Finalist",
    org: "Ministry of Education, Govt of India",
  },
  { emoji: "📊", title: "Data Analytics Certification", org: "Simplilearn" },
  { emoji: "☁️", title: "AWS Cloud Foundation Badge", org: "AWS Academy" },
  { emoji: "🗄️", title: "SQL Certification", org: "Oracle" },
] as const;
