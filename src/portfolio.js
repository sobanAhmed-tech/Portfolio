/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Soban Ahmed | AI Developer & Backend Engineer",
  description:
    "Computer Science student at ITU with a strong passion for AI Development and Backend Engineering. Experienced in building scalable app architectures, multi-agent systems, LLM orchestration, and data pipelines using Python, FastAPI, and Django.",
  og: {
    title: "Soban Ahmed Portfolio",
    type: "website",
    url: "https://sobanahmed.dev/",
  },
};

//Home Page
const greeting = {
  title: "Soban Ahmed",
  logo_name: "SobanAhmed",
  nickname: "soban_ai",
  subTitle:
    "A passionate AI Developer and Backend Engineer with hands-on experience in building multi-agent systems, LLM orchestration pipelines, scalable backends, and computer vision applications. Currently pursuing BS Computer Science at ITU, Lahore.",
  resumeLink:
    "https://drive.google.com/file/d/1xtZ9sx9qOavFFWqjUBhcDUYgfGWZTmLk/view?usp=sharing",
  portfolio_repository: "https://github.com/sobanAhmed-tech",
  githubProfile: "https://github.com/sobanAhmed-tech",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/sobanAhmed-tech",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/soban-ahmed-46217a3a9/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:sobanahmed023@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "AI & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building and orchestrating multi-agent systems using LangChain and Google ADK",
        "⚡ Developing production-ready RAG pipelines with FAISS, Qdrant, and Pinecone vector stores",
        "⚡ Fine-tuning and deploying LLMs including LLaMA and Stable Diffusion for domain-specific tasks",
        "⚡ Computer Vision experience with OpenCV and PyTorch — image classification, generation, and 3D rendering",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            backgroundColor: "transparent",
            color: "#5C3EE8",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            backgroundColor: "transparent",
            color: "#013243",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#150458",
          },
        },
      ],
    },
    {
      title: "Backend & API Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building scalable REST APIs with FastAPI and Django for production environments",
        "⚡ Async task processing using Celery and Redis for distributed pipelines",
        "⚡ Designing chatbot backends with Streamlit and dynamic data visualization",
        "⚡ Real-time systems and multithreaded C++ applications with socket-based communication",
      ],
      softwareSkills: [
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
            backgroundColor: "white",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#FF4B4B",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "Databases, DevOps & Tools",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Managing relational data with PostgreSQL and Supabase",
        "⚡ Working with vector databases — Pinecone, Qdrant, and FAISS — for semantic search at scale",
        "⚡ Containerizing and deploying applications with Docker for production-readiness",
        "⚡ Version control and collaboration using Git and GitHub; comfortable in Linux environments",
      ],
      softwareSkills: [
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: {
            color: "#3ECF8E",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
            backgroundColor: "black",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "fa-github",
          style: {
            color: "#181717",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Information Technology University (ITU)",
      subtitle: "BS Computer Science",
      logo_path: "itu_logo.png",
      alt_name: "ITU Lahore",
      duration: "2023 – Present",
      descriptions: [
        "⚡ Studying core CS subjects including Data Structures, Algorithms, OOP, DBMS, and Operating Systems.",
        "⚡ Hands-on coursework and projects in AI, Deep Learning, Computer Vision, and Backend Engineering.",
        "⚡ Serving as OOP Teaching Assistant — supporting students in concepts, debugging, and best practices.",
      ],
      website_link: "https://itu.edu.pk",
    },
    {
      title: "Punjab Group of Colleges",
      subtitle: "Faculty of Science (Pre-Medical)",
      logo_path: "pgc_logo.png",
      alt_name: "Punjab Group of Colleges",
      duration: "2021 – 2023",
      descriptions: [
        "⚡ Completed FSc Pre-Medical with strong analytical and scientific foundation.",
        "⚡ Developed problem-solving skills that carry over into software and AI engineering.",
      ],
      website_link: "https://pgc.edu/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internships & Teaching",
  description:
    "I have worked as an AI/ML Intern building automated medical billing solutions, a Python intern architecting autonomous AI agents, and as an OOP Teaching Assistant at ITU. I thrive at the intersection of AI research and engineering, transforming ideas into scalable production systems.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work & Internships",
      work: true,
      experiences: [
        {
          title: "AI/ML Intern (Full-Time)",
          company: "MedcareMSO Global",
          company_url: "https://medcaremso.com/",
          logo_path: "medcare_logo.png",
          duration: "March 2026 – May 2026",
          location: "Onsite",
          description:
            "Developed AI solutions for automated medical billing and denial management to improve Revenue Cycle Management (RCM) efficiency. Optimized chatbot prompts to ensure accurate medical coding and context-aware responses, reducing manual intervention in complex billing workflows.",
          color: "#0879bf",
        },
        {
          title: "Python Intern (Part-Time)",
          company: "Orzeh Technologies",
          company_url: "https://orzeh.com/",
          logo_path: "orzeh_logo.png",
          duration: "April 2025 – August 2025",
          location: "Remote",
          description:
            "Architected an Autonomous Outreach Agent using Google ADK — automating end-to-end pipelines from lead identification to personalized email generation and scheduling. Also built a Python & Streamlit chatbot backend with dynamic data visualization and real-time query-based graph generation.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Teaching & Mentoring",
      experiences: [
        {
          title: "OOP Teaching Assistant",
          company: "Information Technology University (ITU)",
          company_url: "https://itu.edu.pk",
          logo_path: "itu_logo.png",
          duration: "January 2026 – Present",
          location: "Lahore, Pakistan",
          description:
            "Support students in understanding Object-Oriented Programming concepts, debugging code, and improving programming practices. Bridge the gap between theory and practical implementation for junior students.",
          color: "#4CAF50",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I build AI-first, production-grade systems — from enterprise RAG platforms and autonomous agents to fine-tuned diffusion models and distributed scrapers. Each project reflects my passion for solving real problems with cutting-edge technology.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.png",
    description:
      "I'm available via email and LinkedIn. Feel free to reach out — I can help with AI/ML projects, LLM integration, backend development, RAG systems, or general software engineering. I typically reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I occasionally write about AI engineering, backend systems, and my experiences in the field.",
    link: "https://github.com/sobanahmed023",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Lahore, Punjab, Pakistan",
    locality: "Lahore",
    country: "PK",
    region: "Punjab",
    postalCode: "54000",
    streetAddress: "Lahore",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/2GikhPkK2S8HsG2X7",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+92 328 4200607",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
