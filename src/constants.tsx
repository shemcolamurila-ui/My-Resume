import { motion } from "motion/react";
import { Briefcase, GraduationCap, MapPin, Target, Database, Globe, Brain, Rocket, Code, Monitor, Users, HeartPulse } from "lucide-react";

export const CONTACT_INFO = {
  location: "Nairobi, Kenya",
  phone: "+254 706 416 947",
  email: "shem.b.cola@gmail.com",
  linkedin: "https://www.linkedin.com/in/shem-cola/",
  github: "https://github.com/shemcolamurila-ui",
  skype: "Shemcola",
  whatsapp: "https://wa.me/254706416947"
};

export const EXPERIENCE_DATA = [
  {
    company: "AI Mashinani",
    role: "AI Trainer – Education & Professional Development",
    period: "Present",
    description: "I deliver Artificial Intelligence training for teachers, students, and professionals, focusing on practical applications in education and work environments.",
    highlights: [
      "Train teachers, students, and professionals on AI literacy",
      "Support adoption of AI tools in education and healthcare sectors",
      "Deliver simplified, practical AI training for real-world use",
      "Train medical practitioners and educators on AI applications",
      "Promote responsible and impactful use of AI in learning systems"
    ],
    icon: <Brain className="w-6 h-6" />
  },
  {
    company: "NovaTech STEM Programs",
    role: "STEM Trainer & Program Facilitator",
    period: "Present",
    description: "I train schools and students in STEM education, innovation, and hands-on technical skills.",
    highlights: [
      "Deliver STEM, coding, and robotics training in schools",
      "Guide students in idea development and prototype creation",
      "Mentor learners in innovation, problem-solving, and programming",
      "Support school STEM competitions and innovation projects",
      "Promote hands-on learning and creativity in education"
    ],
    icon: <Rocket className="w-6 h-6" />
  },
  {
    company: "Mediacent Interactive Ltd",
    role: "Technical Project Manager",
    period: "Past",
    description: "I manage technical teams and oversee software development projects from planning to delivery.",
    highlights: [
      "Lead programmers, designers, and technical support teams",
      "Manage full project lifecycle (planning, execution, deployment)",
      "Coordinate technical requirements and client expectations",
      "Ensure timely delivery of software systems and platforms",
      "Bridge communication between technical and non-technical teams"
    ],
    icon: <Monitor className="w-6 h-6" />
  },
  {
    company: "StudyBuddy Africa",
    role: "Education & Technology Expert",
    period: "2023 – 2025",
    description: "Supported development of EdTech learning platforms and digital learning programs.",
    highlights: [
      "Supported development of EdTech learning platforms",
      "Coordinated digital learning programs across institutions",
      "Provided ICT support and training for schools",
      "Contributed to digital transformation in education systems"
    ],
    icon: <Users className="w-6 h-6" />
  },
  {
    company: "eKitabu LLC",
    role: "Program Associate & Technical Support",
    period: "2020 – 2023",
    description: "Supported digital learning systems and e-learning platforms.",
    highlights: [
      "Supported digital learning systems and e-learning platforms",
      "Provided technical support to schools and institutions",
      "Assisted in teacher training on digital education tools",
      "Supported rollout of EdTech programs"
    ],
    icon: <Database className="w-6 h-6" />
  },
  {
    company: "eLimu Kenya",
    role: "Lead Technical Support",
    period: "2020 – 2021",
    description: "Ensured smooth operation of digital learning systems across schools.",
    highlights: [
      "Led technical support operations for digital learning platforms",
      "Provided troubleshooting and system maintenance support",
      "Assisted in deployment of EdTech solutions in schools",
      "Supported teachers and institutions using digital learning tools",
      "Ensured system stability and user support for education platforms"
    ],
    icon: <Briefcase className="w-6 h-6" />
  }
];

export const REGIONS = [
  "Eldoret", "Kisumu", "Kiambu", "Dadaab", "Kakuma", "Maralal", "Marsabit", "Nyeri", "Nanyuki", "Murang’a", "Thika", "Kerugoya", "Kahuhia", "Tanzania", "Uganda", "Mombasa"
];

export const IMPACT_POINTS = [
  { text: "Transforming education through technology", icon: <Globe className="w-5 h-5" /> },
  { text: "Expanding AI and STEM education across Kenya", icon: <Target className="w-5 h-5" /> },
  { text: "Strengthening ICT integration in schools", icon: <Monitor className="w-5 h-5" /> },
  { text: "Supporting innovation from idea to prototype", icon: <Code className="w-5 h-5" /> },
  { text: "Driving digital transformation in education and professional sectors", icon: <Rocket className="w-5 h-5" /> }
];

export const CERTIFICATIONS = [
  {
    year: "2020",
    institution: "GreyAtom",
    title: "Certificate in Data Science",
    icon: <Database className="w-5 h-5" />
  },
  {
    year: "2022",
    institution: "Skillup",
    title: "Certificate in Python Programming",
    icon: <Code className="w-5 h-5" />
  },
  {
    year: "2023",
    institution: "OpenWeaver",
    title: "Certificate in basic Python Programming",
    icon: <Code className="w-5 h-5" />
  },
  {
    year: "2022",
    institution: "Disaster Ready",
    title: "Project Management Essentials",
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    year: "2024",
    institution: "Zoho",
    title: "Zoho Projects Management Certificate",
    icon: <Briefcase className="w-5 h-5" />
  }
];

export const EDUCATION_DATA = [
  {
    institution: "Kenyatta University",
    degree: "Bachelor of Science in Computer Science",
    year: "2015",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    institution: "Graffin’s College",
    degree: "Diploma in Computer Programming",
    year: "2015",
    icon: <Code className="w-5 h-5" />
  }
];
