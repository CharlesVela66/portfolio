export const navItems = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    lighstaberScale: isSmall ? 0.7 : isMobile ? 0.7 : isTablet ? 1.2 : 1.9,
    lighstaberPosition: isSmall
      ? [-1.1, -1.3, 0]
      : isMobile
      ? [-1.1, -3.7, 0]
      : isTablet
      ? [-1.1, -3.7, 0]
      : [-2, -3.3, 0],
  };
};

export const myProjects = [
  {
    title: 'StoreIt - Modern Storage Mangement Platform',
    desc: 'A modern storage management platform built for simplicity, functionality, and security. With StoreIt you can upload your files effortlessly, preview, edit and share them with your friends. You can stay organized with streamlined dashboard to track storage usage and recent upload. Also, OTP authentication was implemented for ultimate safety. ',
    subdesc:
      'With a focus on efficiency, StoreIt leverages the power of Next.Js 15, ShadCN, Tailwind CSS, Typescript, and Appwrite to create an optimized, cutting-edge experience.',
    href: 'https://storeit-xi.vercel.app/',
    texture: '/textures/project/Store It.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#FA7275',
      background:
        'linear-gradient(0deg, #FA7275, #FA7275), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(255, 100, 100, 0.3)',
      boxShadow: '0px 0px 60px 0px rgba(250, 114, 117, 0.3)',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'ShadCN',
        path: '/assets/shadcn.svg',
      },
    ],
  },
  {
    title: 'CarePulse - Health Management System',
    desc: 'CarePulse is a web application designed to streamline the patient experience, allowing users to gather vital information and schedule appointments at their local hospital in just a few minutes. For hospital administrators, CarePulse provides a seamless admin interface to easily visualize and manage appointments, making the entire process more efficient and stress-free.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://carepulse-ecru.vercel.app/',
    texture: '/textures/project/Carepulse.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'ShadCN',
        path: '/assets/shadcn.svg',
      },
    ],
  },
  {
    title: 'Horizon - Online Banking Platform',
    desc: 'Horizon is a banking platform that allows you to connect your bank accounts, view your transaction history accross accounts and make seamless transfers from one account to another. Also, Horizon also offers insight into your spending habits. Whether its on food or streaming services, you will have a clear visualization of where your money goes.',
    subdesc:
      'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://banking-horizon-ten.vercel.app/',
    texture: '/textures/project/Horizon.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'ShadCN',
        path: '/assets/shadcn.svg',
      },
    ],
  },
  {
    title: 'Mi $egunda Chamba',
    desc: 'Welcome to Mi $egunda Chamba, the captivating podcast hosted by AJ Bauer that delves deep into the world of sports betting. Our mission was to craft a dynamic web application that empowers individuals to share their betting insights within the context of the most pivotal games of the moment.',
    subdesc:
      'For the development, we used Next.js, a powerful React framework for creating comprehensive web apps, allowing for simple development, optimal performance, and effective SEO-friendly rendering. Additionally, we utilized Tailwind CSS to streamline the process.',
    href: 'https://ajbauer.vercel.app/',
    texture: '/textures/project/Mi $egunda Chamba.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#fff233',
      border: '0.2px solid #b9ae00',
      boxShadow: '0px 0px 60px 0px #c4bc33',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'ShadCN',
        path: '/assets/shadcn.svg',
      },
    ],
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const workExperiences = [
  {
    id: 1,
    name: 'Kellanova',
    pos: 'Data Governance & Data Analyst Intern',
    duration: 'Apr 2024 - Dec 2024',
    title:
      "Led the development of a metadata dashboard to enhance the visibility and management of Data Sets, improving resource allocation across teams. Co-led the Data Ownership and Stewardship initiative, defining key roles and providing control tools to empower company leaders in data management. Created politics and processes to define the company's way of working.",
    icon: '/assets/Kellanova.svg',
    animation: 'victory',
  },
];

export const Technologies = [
  {
    id: 1,
    name: 'Next.Js',
    logo: '/assets/nextjs.svg',
  },
  {
    id: 2,
    name: 'React',
    logo: '/assets/react.svg',
  },
  {
    id: 3,
    name: 'TypeScript',
    logo: '/assets/typescript.svg',
  },
  {
    id: 4,
    name: 'JavaScript',
    logo: '/assets/javascript.svg',
  },
  {
    id: 5,
    name: 'Python',
    logo: '/assets/python.svg',
  },
  {
    id: 6,
    name: 'PyTorch',
    logo: '/assets/pytorch.svg',
  },
  {
    id: 7,
    name: 'TensorFlow',
    logo: '/assets/tensorflow.svg',
  },
  {
    id: 8,
    name: 'TailwindCSS',
    logo: '/assets/tailwind-css.svg',
  },
  {
    id: 9,
    name: 'C++',
    logo: '/assets/cpp.svg',
  },
];

export const Words = [
  'Full Stack Developer',
  'Next.js Developer',
  'React Developer',
  'Software Engineer',
  'Machine Learning Engineer',
  'Video Game Developer',
  'Full-Time Nerd',
  'Gym Addict',
  'Book Lover',
];
