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
    title: "Intern",
    job: "Intern at Eissenvault, India",
    date: "July 09, 2025 to July 31, 2025",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Intern",
    job: "Intern at Avrij, Canada",
    date: "May 13, 2025 to July 5, 2025",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2024-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Created an App in Python for the school Boys Bank",
      "Created a Web App for the schools 90th Founders Day (DS90)",
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