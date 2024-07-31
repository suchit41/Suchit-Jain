import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Suchit Jain",
  initials: "SJ",
  url: "https://github.com/suchit41",
  location: "Thane, India",
  locationLink: "https://www.google.com/maps/place/thane+india",
  description:
    "AI Engineer with a strong background in computer engineering and machine learning. Passionate about developing AI solutions for healthcare and optimizing web applications.",
  summary:
    "Graduated with a Bachelor's degree in Computer Engineering from A.P.Shah Institute of Technology. Experienced in AI and ML for healthcare, web development, and data analytics. Interned at SmartTeck as an AI Engineer and at floxus as a Web Developer. Competed in various hackathons, earning top positions.",
  avatarUrl: "/photo.png",
  skills: [
    "Java",
    "Python",
    "C",
    "SQL",
    "Firebase",
    "React",
    "JavaScript",
    "Bootstrap",
    "CSS",
    "HTML",
    "Git",
    "GitHub",
    "React Native",
    "AZURE"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Home" },
 
  ],
  contact: {
    email: "jainsuchit12@gmail.com",
    tel: "+91 9552103272",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/suchit41",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/suchit-jain-1b9757210",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "jainsuchit12@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Smart Tech LLC ",
      href: "",
      badges: [],
      location: "Remote",
      title: "AI Engineer Intern",
      logoUrl: "/smartteck.png",
      start: "april 2024",
      end: "Present",
      description:
      "Improved healthcare prediction accuracy by 15% through machine learning model development. Enhanced system efficiency by 20% with AI integration. Cleaned data and applied NLP for insights from unstructured text, using Git and GitHub for collaborative development."    },
    {
      company: "floxus",
      badges: [],
      href: "https://floxus.com",
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/floxus.png",
      start: "January 2024",
      end: "april 2024",
      description:
      "Created a custom HTML5 template for AI applications, featuring an Owl Carousel Slider for enhanced engagement. Optimized for SEO and cross-browser performance, with detailed documentation and support. Skilled in HTML5, CSS3, Bootstrap, and JavaScript, ensuring consistent visual appeal."
    },
  ],
  hackathons: [
    {
      title: "MachineKnight Hackathon",
      achievement: "First Runner-Up",
      description: "Earned the First Runner-Up spot in the MachineKnight Hackathon.",
      links: [],
    },
    {
      title: "Smartest and Impactful AI Solutions",
      achievement: "Champion",
      description: "Secured the top position as the champion in the Smartest and Impactful AI Solutions competition.",
      links: [],
    },
    {
      title: "ReactJS Competition by Webvarad Solutions",
      achievement: "Champion",
      description: "Emerged victorious in the ReactJS Competition hosted by Webvarad Solutions, showcasing prowess in ReactJS development.",
      links: [],
    },
    {
      title: "I2C2 Hackathon",
      achievement: "Runner-Up",
      description: "Secured the Runner-Up position in the I2C2 Hackathon by devising and implementing an innovative solution that solved a critical business problem, resulting in significant cost savings and improved efficiency.",
      links: [],
    },
    {
      title: "Campus Executive at IIT Bombay",
      achievement: "",
      description: "Served as the Campus Executive at IIT Bombay, contributing to strategic initiatives and fostering collaborative relationships within the campus community.",
      links: [],
    },
  ],
  education: [
    {
      school: "A.P.Shah Institute of Technology",
      href: "https://www.apsit.edu.in",
      degree: "Bachelor of Computer Engineering",
      logoUrl: "/apshah.png",
      start: "2020",
      end: "2024",
    },
    {
      school: "University of Mumbai",
      href: "https://mu.ac.in",
      degree: "Artificial Intelligence And Machine Learning",
      logoUrl: "/mumbai.png",
      start: "2022",
      end: "2024",
    },
  ],

  projects: [
    {
      title: "Lab Master: Lab Management System (LMS)",
      href: "#",
      dates: "2023",
      active: true,
      description:
      "Streamlined system setup, reducing time by 30%. Improved issue resolution speed by 40% and enhanced user authentication, cutting unauthorized access by 50%. Deployed real-time monitoring, reducing response times by 40%, and designed a user-friendly interface, boosting satisfaction by 20%.",      technologies: ["React", "JavaScript", "Node.js", "SQL"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Notebook Junction: E-Stationery",
      href: "#",
      dates: "2022",
      active: true,
      description:
      "Optimized stationery ordering, boosting efficiency by 60%. Reduced order processing time by 40% with FCFS and Timer features. Enhanced security with Google OAuth, cutting unauthorized access by 30%. Improved system interoperability by 25% and automated tasks, reducing operational overhead by 20%.",
      technologies: ["React", "JavaScript", "Firebase"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "NOTES APP | AN - Android Notes Taking App",
      href: "#",
      dates: "2021",
      active: true,
      description:
      "Developed an Android app that boosted note creation and editing efficiency by 25%. Added offline access, increasing user engagement by 20%. Designed a user-friendly interface, improving usability by 15%, and created a scalable architecture for future growth."   ,
      technologies: ["Java", "Android", "Firebase"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
  title: "Spam Detection System",
  href: "#",
  dates: "2024",
  active: true,
  description:
    "Developed an AI-powered spam detection system using AIML and advanced NLP. Improved email filtering accuracy by 75%, effectively categorizing spam with high precision. Integrated machine learning for continuous performance enhancement and established robust data pipelines for seamless email data processing.",
  technologies: ["AIML", "NLP", "Machine Learning"],
  links: [
    {
      type: "Website",
      href: "#",
      icon: <Icons.globe className="size-3" />,
    },
  ],
  image: "",
  video: "",
},
  ],

};

