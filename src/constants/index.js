export const myProjects = [
  {
    id: 1,
    title: "Boys Bank Manager",
    description:
      "App made for my schools Boys Bank, which is used to manage all the transactions made there.",
    subDescription: [
      "The Boys Bank Manager project is a Python 3.13 desktop application built with PyQt5 and SQLite3, packaged using PyInstaller for deployment. It follows an MVC-inspired architecture and integrates features like student database management, withdrawal queue handling, and role-based authentication using SHA-256 hashing. The project leverages ReportLab for PDF generation, PyPDF2 for PDF processing, and CSV import for bulk data handling. With a modern dark-themed UI, animations, and robust database design, it delivers a complete solution for managing a school’s student banking system."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/boysBank.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python-logo.svg",
      },
      {
        id: 2,
        name: "PyQt5",
        path: "/assets/logos/PyQt.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Password Management System",
    description:
      "Since most password management systems are either paid or I don't like the features they have, I made one for myself.",
    subDescription: [
      "The Password Manager project is a security-focused desktop application built with Python 3.x and PyQt5, featuring a modular architecture and robust cryptographic practices. It uses SQLite3 for local storage, PBKDF2 and Fernet for encryption, and supports 2FA with TOTP and QR codes. With features like password generation, strength analysis, clipboard auto-clear, and auto-lock, it ensures both usability and protection. Additional tools like zxcvbn, pyotp, and qtawesome enhance the overall security and user experience.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/image.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python-logo.svg",
      },
      {
        id: 2,
        name: "PyQt5",
        path: "/assets/logos/PyQt.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "Cryptography",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "DS90 Web App",
    description:
      "A modern, interactive web application built for the schools 90th Founders Day (DS90).",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated SQLite for efficient client-side database storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      {
        id: 1,
        name: "NextJs",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    title: "C++ Game Engine",
    description:
      "A lightweight C++ game engine designed for 2D and 3D game development.",
    subDescription: [
      "Built a powerful rendering engine using OpenGL and C++.",
      "Developed a physics engine with collision detection and particle effects.",
      "Implemented a scripting system for easy game customization.",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      {
        id: 1,
        name: "C++",
        path: "/assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "Microsoft",
        path: "/assets/logos/microsoft.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/samarth-pundeer-37ab0a2b1/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/pyro-oxide",
    icon: "/assets/socials/github-mark-c791e9551fe4/github-mark/github-mark-white.svg",
  },
];

export const experiences = [
  {
    title: "Internship",
    job: "Intern at Eisenvault, India",
    date: "July 09, 2025 to July 31, 2025",
    contents: [
      "During my internship at EisenVault, a leading Document Management System provider in India, I gained hands-on experience in full-stack web development. The internship provided a strong foundation in front-end and back-end technologies crucial for modern web applications. I learned the core principles of HTML, CSS, and JavaScript, enabling me to design responsive and user-friendly web interfaces. On the backend, I was introduced to MySQL, where I worked on setting up and managing databases essential for storing and retrieving document metadata securely and efficiently. As part of the practical training, I participated in building a basic web application, which included structuring content with HTML, styling with CSS, adding interactivity using JavaScript, and connecting it to a MySQL database to simulate real-world document storage and retrieval operations. The experience deepened my understanding of how secure document management systems function and gave me valuable insight into professional software development workflows.",
    ],
  },
  {
    title: "Internship",
    job: "Intern at Avrij, Canada",
    date: "May 13, 2025 to July 5, 2025",
    contents: [
      " During my internship at Avrij, I had the opportunity to learn about the implementation of AI using JavaScript.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2024-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Created an app using Python, PyQt5 and SQLite for the school Boys Bank.",
      "Created a WebApp for the schools 90th Founders Day (DS90) using NextJs, React, TailwindCSS, Cloudflare and Supabase.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];

// export const reviews = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://robohash.org/jack",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://robohash.org/jill",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://robohash.org/john",
//   },
//   {
//     name: "Alice",
//     username: "@alice",
//     body: "This is hands down the best thing I've experienced. Highly recommend!",
//     img: "https://robohash.org/alice",
//   },
//   {
//     name: "Bob",
//     username: "@bob",
//     body: "Incredible work! The attention to detail is phenomenal.",
//     img: "https://robohash.org/bob",
//   },
//   {
//     name: "Charlie",
//     username: "@charlie",
//     body: "This exceeded all my expectations. Absolutely stunning!",
//     img: "https://robohash.org/charlie",
//   },
//   {
//     name: "Dave",
//     username: "@dave",
//     body: "Simply breathtaking. The best decision I've made in a while.",
//     img: "https://robohash.org/dave",
//   },
//   {
//     name: "Eve",
//     username: "@eve",
//     body: "So glad I found this. It has changed the game for me.",
//     img: "https://robohash.org/eve",
//   },
// ];