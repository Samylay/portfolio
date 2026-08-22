export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Samy Layaida",
  title: "Samy Layaida — Software Engineer",
  description:
    "Software engineer in Paris. I ship web apps by day and spend the rest of my time on agents, MCP servers and self-hosted tools. Projects, writing, and how to reach me.",
  url: "https://samylayaida.com",
  navItems: [
    { label: "Work", href: "/#work" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/#contact" },
  ],
  links: {
    github: "https://github.com/Samylay",
    linkedin: "https://www.linkedin.com/in/samy-layaida",
    email: "mailto:layaida.samy@gmail.com",
    contact: "/#contact",
  },
};
