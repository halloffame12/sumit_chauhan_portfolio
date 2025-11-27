import type { Skill, Project, TimelineEvent, BlogPost, Achievement, Testimonial } from '../types';
import { ReactIcon, NodeIcon, PythonIcon, FigmaIcon } from '../assets/icons';

export const personalInfo = {
  name: "Sumit Chauhan",
  title: "Full-Stack Developer | AI/ML Enthusiast",
  bio: `I am a passionate Full-Stack Developer and AI/ML student currently pursuing a BS in Computer Science from IIT Patna. I focus on modern web technologies, backend systems, and real-time applications, building scalable, user-friendly, and feature-rich projects.
  I enjoy solving complex problems, experimenting with emerging technologies, and creating innovative systems such as AI chatbots, real-time chat applications, gesture-recognition projects, and interactive web platforms. My goal is to achieve elite-level coding skills within the next three years and contribute to breakthroughs in AI, space technology, and software engineering.
  Outside of coding, I love exploring science, reading impactful books, and developing creative ideas that push my knowledge forward.`,
  profilePicture: "https://i.postimg.cc/rwjfhvrk/sumitc.png",
  resumeUrl: "https://drive.google.com/file/d/12xk1uw6MQJVp7S0rQkaB_ab5NPd0G-c0/view?usp=sharing", // Replace with your resume link
};

export const skills: Skill[] = [
  { name: 'React', level: 90, category: 'Frontend', icon: ReactIcon },
  { name: 'TypeScript', level: 85, category: 'Frontend', icon: ReactIcon },
  { name: 'Node.js', level: 88, category: 'Backend', icon: NodeIcon },
  { name: 'Python', level: 92, category: 'Backend', icon: PythonIcon },
  { name: 'SQL/MySQL', level: 85, category: 'Data', icon: NodeIcon },
  { name: 'PHP', level: 80, category: 'Backend', icon: NodeIcon },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend', icon: ReactIcon },
  { name: 'Bootstrap', level: 90, category: 'Frontend', icon: ReactIcon },
  { name: 'Flask', level: 85, category: 'Backend', icon: PythonIcon },
  { name: 'Socket.IO', level: 85, category: 'Realtime', icon: NodeIcon },
  { name: 'Figma', level: 80, category: 'Design', icon: FigmaIcon },
  { name: 'FastAPI', level: 75, category: 'AI', icon: PythonIcon },
  { name: 'Next.js', level: 80, category: 'Frontend', icon: ReactIcon },
  { name: 'Express.js', level: 88, category: 'Backend', icon: NodeIcon },
  { name: 'MongoDB', level: 82, category: 'Database', icon: NodeIcon },
  { name: 'PostgreSQL', level: 80, category: 'Database', icon: NodeIcon },
  { name: 'Docker', level: 70, category: 'DevOps', icon: NodeIcon },
  { name: 'Git/GitHub', level: 90, category: 'Tools', icon: NodeIcon },
  { name: 'Linux/Command Line', level: 85, category: 'Tools', icon: NodeIcon },
  { name: 'OpenCV', level: 78, category: 'AI/Computer Vision', icon: PythonIcon },
  { name: 'TensorFlow', level: 75, category: 'AI/ML', icon: PythonIcon },
  { name: 'Pandas/Numpy', level: 88, category: 'Data Science', icon: PythonIcon },
  { name: 'Matplotlib', level: 82, category: 'Data Science', icon: PythonIcon },
  { name: 'WebRTC', level: 70, category: 'Realtime', icon: NodeIcon },
  { name: 'C/C++', level: 72, category: 'Programming', icon: NodeIcon },
  { name: 'Java', level: 70, category: 'Programming', icon: NodeIcon },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    slug: 'anonchat-live',
    title: 'AnonChat Live – Anonymous Real-Time Chat Platform',
    category: 'Web Development',
    imageUrl: 'https://i.postimg.cc/HWyk9mDZ/anonchatweb.png',
    description: 'AnonChat Live is a production-ready anonymous real-time chat platform designed for instant, private communication without any registration.',
    problem: 'Most chat platforms require sign-ups, track user data, or introduce delays that reduce real-time interaction quality.',
    solution: 'Implemented a low-latency WebSocket architecture using Node.js, Express, and Socket.IO. Built a fast React (Vite) + Tailwind UI with anonymous identities, random matchmaking, and public rooms with live participant tracking.',
    role: 'Full-Stack Developer',
    techStack: ['Node.js', 'Express', 'Socket.IO', 'React (Vite)', 'Tailwind CSS'],
    repoUrl: 'https://anonchatweb.netlify.app/'
  },
  {
    id: 'project-2',
    slug: 'real-time-chat-app',
    title: 'Real-Time Chat Application',
    category: 'Web Development',
    imageUrl: 'https://i.postimg.cc/W1F05qLm/nexus-cha.png',
    description: 'A feature-rich real-time chat application with global and private messaging, emoji support, and an admin panel.',
    problem: 'Most chat apps lacked customizable admin controls and lightweight real-time communication features for web users.',
    solution: 'Built using Flask, Socket.IO, and MySQL with a responsive UI (Bootstrap + Tailwind). Added global/private chat, typing indicators, dark mode, and an admin panel.',
    role: 'Full-Stack Developer',
    techStack: ['Flask', 'Socket.IO', 'MySQL', 'Bootstrap', 'Tailwind CSS', 'React', 'JavaScript'],
    repoUrl: 'https://nexuschatweb.netlify.app/',
  },
  {
    id: 'project-3',
    slug: 'Techsavvy-Personal-Blog',
    title: 'AI-Powered-Blog',
    category: 'Full-Stack',
    imageUrl: 'https://i.postimg.cc/fWStnngZ/techsavvy.png',
    description: 'A modern personal blog platform enhanced with AI features, designed to share tech content and provide real-time assistance to readers. The application goes beyond traditional blogs by integrating an AI chatbot that answers coding questions, explains complex concepts, and guides users while they explore articles.',
    problem: 'Traditional blogs are static — readers can learn passively but can’t easily ask questions or get clarification in real time. This limits engagement and makes it harder for learners to apply new knowledge on the spot.',
    solution: 'Developed an AI chatbot using Python and integrated it with Google Colab/web for fast query responses.',
    role: 'AI Engineer',
    techStack: ['Python', 'Flask', 'FastAPI', 'LLM API', 'React'],
    repoUrl: 'https://techsavvy-insights-personal-blog.netlify.app/#/',
  },
  {
    id: 'project-4',
    slug: 'CodeCraftGames',
    title: 'Ai Powered Game Dev',
    category: 'AI/Computer Vision',
    imageUrl: 'https://i.postimg.cc/k4bZhTCv/codecraft.png',
    description: 'CodeCraftGames is a Python-based gesture recognition platform that lets users control applications — and even 3D games — using just their hand movements. By combining computer vision with machine learning, it creates a futuristic, controller-free experience.',
    problem: 'Traditional input devices like keyboards and controllers limit natural interaction. For immersive applications and games, a hands-free control system was needed to improve creativity and accessibility.',
    solution: 'Built using Python OpenCV and ML models, extended to interactive OpenGL-based 3D games controlled by gestures.',
    role: 'ML Developer',
    techStack: ['Python', 'OpenCV', 'TensorFlow', 'OpenGL'],
    repoUrl: 'https://codecraftgames.netlify.app/',
  },
  {
    id: 'project-5',
    slug: 'flysyk-tour',
    title: 'FlySyk Tour Website',
    category: 'Web Development',
    imageUrl: 'https://i.postimg.cc/8PFb00Lr/Screenshot-2.png',
    description: 'A modern, responsive travel website designed for booking and exploring tours.',
    problem: 'Tour websites lacked responsive, interactive UIs for mobile and desktop users.',
    solution: 'Created using HTML, CSS, JS, and Bootstrap with dynamic booking sections and responsive layouts.',
    role: 'Frontend Developer',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    repoUrl: '', // Add GitHub link or demo URL when available
  },
];

export const timeline: TimelineEvent[] = [
  {
    date: '2025 - Present',
    title: 'BS in Computer Science',
    institution: 'IIT Patna',
    description: 'Pursuing a degree in Computer Science with a strong focus on full-stack development, AI/ML, and building innovative real-world projects.',
  },
  {
    date: 'Dec 2024 - Jan 2025',
    title: 'Internship - Web Developer',
    institution: 'Cothon Solutions',
    description: 'Worked as a web development intern, contributing to front-end and back-end features, debugging, and UI improvements.',
  },
  {
    date: '2023 - 2024',
    title: 'Certifications in Full Stack & Data Analysis',
    institution: 'Intellus Design, Delhi',
    description: 'Completed professional certifications in Full-Stack Development and Data Analytics.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'journey-into-ai',
    title: 'My Journey Into AI and Web Development',
    excerpt: 'How I started building projects in AI/ML and web development as a student.',
    imageUrl: 'https://picsum.photos/seed/blogsumit1/400/250',
    date: 'August 10, 2025',
    tags: ['AI', 'Web Development', 'Student Life'],
    content: 'From creating small Python projects to building real-time chat apps and AI chatbots, my journey in tech has been about curiosity, persistence, and creativity. In this post, I share how I learned, failed, and grew step by step.',
  },
  {
    slug: 'mastering-fullstack',
    title: 'Mastering Full-Stack Development as a Student',
    excerpt: 'A breakdown of how I built real projects in full-stack development while studying AI/ML.',
    imageUrl: 'https://picsum.photos/seed/blogsumit2/400/250',
    date: 'July 20, 2025',
    tags: ['Full-Stack', 'Learning', 'Projects'],
    content: 'Full-stack development is more than just coding frontend and backend—it’s about solving problems end-to-end. In this article, I share how I approached projects like my real-time chat app and portfolio site, and the tools I mastered along the way.',
  },
];

export const achievements: Achievement[] = [
  {
    title: 'Internship at Cothon Solutions',
    issuer: 'Cothon Solutions',
    date: 'Jan 2025',
    imageUrl: 'https://picsum.photos/seed/cothon/400/250',
  },
  {
    title: 'NASA International Space Apps Challenge – Certificate of Participation',
    issuer: 'Innogeeks',
    date: '2025',
    imageUrl: 'https://i.postimg.cc/fy0sBSwy/certificate-cecdf.png',
  },
  {
    title: 'Data Analyst Certification',
    issuer: 'Intellus Design',
    date: '2024',
    imageUrl: 'https://picsum.photos/seed/data/400/250',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Sumit is a highly dedicated and passionate developer with a sharp problem-solving mindset. His ability to build real-world applications at such an early stage of his career is inspiring.',
    author: 'Mentor',
    company: 'Intellus Design',
  },
  {
    quote: 'Working with Sumit was a great experience. His real-time chat app project showcased both his technical skills and his attention to detail.',
    author: 'Manager',
    company: 'Cothon Solutions',
  },
  {
    quote: 'Sumit brings creativity and persistence to every project. His AI and full-stack projects are a glimpse into his potential as a future innovator.',
    author: 'Peer',
    company: 'IITM Group of Institutions',
  },
];
