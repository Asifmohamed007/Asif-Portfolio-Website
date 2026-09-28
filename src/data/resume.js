// Everything shown in the Resume section. Edit text here - the layout updates itself.
// Line breaks inside a description become <br>, **text** becomes bold.

export const tabs = [
  { id: "education", label: "Education", icon: "fas fa-graduation-cap" },
  { id: "professional", label: "Skills", icon: "fas fa-cogs" },
  { id: "certifications", label: "Certifications", icon: "fas fa-trophy" },
  { id: "interests", label: "Interests", icon: "fas fa-book" },
];

export const education = [
  {
    className: "col-lg-6 col-md-12 col-12",
    subtitle: "2020 - 2024",
    title: "Education Quality",
    items: [
      {
        icon: "fas fa-graduation-cap",
        title: "Bachelor of Technology",
        meta: "Jerusalem College of Engineering (2020 - 2024)",
        description: "I have finished my undergraduate studies in information technology at Jerusalem College of Engineering, earning a B.Tech(IT). I am very excited to apply my knowledge and abilities, and I am always looking for ways to get involved in practical projects and contribute significantly to the field of computer science.",
      },
      {
        icon: "fas fa-book-open",
        title: "Schooling",
        meta: "Sri Sankara Vidyalaya Matric Hr Sec School (2007 - 2020)",
        description: `My academic journey from Sri Sankara Vidyalaya Matric Hr Sec School, Pammal, SankarNagar.
where I studied from kindergarten to the 12th grade, was successfully finished. Establishing a solid academic foundation, as well as fostering my personal and professional development, were made possible in large part by this institution.`,
      },
    ],
  },
  {
    className: "col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60",
    subtitle: "2023 - 2024",
    title: "Experience",
    items: [
      {
        icon: "fas fa-user-tie",
        title: "Internship",
        meta: "Login 360 (2023)",
        description: "I completed an internship at Login 360, a renowned training institute, where I learned the basics of Python. This experience broadened my programming skills and provided me with a deeper understanding of backend logic, enhancing my ability to build more robust and efficient applications. My knowledge of version control with Git, along with Agile methodologies, fosters efficient collaboration and continuous improvement in project development.",
      },
      {
        icon: "fas fa-chalkboard-teacher",
        title: "Qspiders Student",
        meta: "QSpiders: Training Institute (2024 - Present)",
        description: "As a student at QSpiders, I am currently pursuing the Java Full Stack and Advanced courses, and I am currently dedicated to furthering my knowledge in the field of development. This program is equipping me with practical skills that are crucial for success in the rapidly evolving world of technology. I am focused on enhancing my expertise and staying abreast of the latest developments to thrive in this fast-paced industry.",
      },
    ],
  },
];

export const skills = [
  {
    className: "col-lg-6 col-md-6 col-12",
    subtitle: "Features",
    title: "Web Development Skills",
    // percent = label shown, width = bar length, duration/delay = reveal animation
    bars: [
      { name: "HTML / CSS", percent: "90%", width: "90%", duration: "0.5s", delay: ".3s" },
      { name: "Bootstrap Framework", percent: "95%", width: "95%", duration: "0.6s", delay: ".4s" },
      { name: "JAVASCRIPT", percent: "70%", width: "70%", duration: "0.8s", delay: ".6s" },
      { name: "React JS", percent: "70%", width: "70%", duration: "0.9s", delay: ".7s" },
      { name: "SQL", percent: "80%", width: "80%", duration: "0.7s", delay: ".5s" },
      { name: "JAVA", percent: "70%", width: "70%", duration: "0.7s", delay: ".5s" },
      { name: "FireBase / Netlify", percent: "95%", width: "95%", duration: "0.9s", delay: ".7s" },
      { name: "Git & GitHub", percent: "90%", width: "90%", duration: "0.9s", delay: ".7s" },
    ],
  },
  {
    className: "col-lg-6 col-md-6 col-12 mt_sm--60",
    subtitle: "Features",
    title: "Designing Skills",
    // percent = label shown, width = bar length, duration/delay = reveal animation
    bars: [
      { name: "Web Designing", percent: "85%", width: "85%", duration: "0.5s", delay: ".3s" },
      { name: "Adobe PhotoShop", percent: "90%", width: "90%", duration: "0.6s", delay: ".4s" },
      { name: "Canva", percent: "90%", width: "90%", duration: "0.7s", delay: ".5s" },
      { name: "Wix Studio", percent: "90%", width: "90%", duration: "0.9s", delay: ".7s" },
      { name: "Figma", percent: "70%", width: "70%", duration: "0.9s", delay: ".7s" },
    ],
  },
];

export const certifications = [
  {
    className: "col-lg-6 col-md-12 col-12",
    subtitle: "2020 - 2024",
    title: "Certifications",
    items: [
      {
        icon: "fas fa-code",
        title: "Basics To Advance Of HTML/CSS for Beginners",
        meta: "OpenWeaver",
        description: "This certification introduced me to the fundamentals of HTML and CSS, providing a strong foundation for web development.",
      },
      {
        icon: "fas fa-bug",
        title: "Software Testing Certification",
        meta: "NPTEL Online Certification",
        description: "This course covered various aspects of software testing, including testing methodologies, tools, and best practices.",
      },
      {
        icon: "fab fa-css3",
        title: "Advance HTML and CSS Certification",
        meta: "UDEMY",
        description: "Completed a comprehensive course on HTML and CSS, covering both basic and advanced topics to enhance web design skills.",
      },
      {
        icon: "fas fa-laptop-code",
        title: "Building Responsive Landing Page",
        meta: "Geekster",
        description: "Learned to create responsive landing pages using HTML and CSS, focusing on best practices for responsive design.",
      },
    ],
  },
  {
    className: "col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60",
    subtitle: "2023 - Present",
    title: "Additional Certifications",
    items: [
      {
        icon: "fab fa-js-square",
        title: "Mastering JavaScript Fundamentals",
        meta: "Geekster",
        description: "Covered advanced JavaScript concepts, including ES6 features and asynchronous programming, to build interactive web applications.",
      },
      {
        icon: "fas fa-server",
        title: "SQL Certification Course",
        meta: "Basic to Advanced",
        description: "Completed a course on SQL, covering essential topics for database management and querying.",
      },
      {
        icon: "fas fa-database",
        title: "MongoDB: The Complete Developers Course",
        meta: "UDEMY",
        description: "Learned to work with MongoDB, focusing on database design, querying, and integration with modern web applications.",
      },
      {
        icon: "fas fa-cogs",
        title: "ReactJS - The Complete Course",
        meta: "UDEMY",
        description: "This course covered all aspects of ReactJS, from basics to advanced concepts, including building a calculator application.",
      },
    ],
  },
];

export const interests = [
  {
    className: "col-lg-6 col-md-12 col-12",
    subtitle: "2018 - Present",
    title: "Interests",
    items: [
      {
        icon: "fas fa-volleyball-ball",
        title: "Handball",
        meta: "State Player and proudly secured 1st place in my college.",
        description: "I have a deep passion for handball, having secured the runner-up position in my third year of college and first place in my final year. I am also proud to have been a State-level player during my school years.",
      },
      {
        icon: "fas fa-motorcycle",
        title: "Riding Bikes",
        meta: "Exploring the World on Two Wheels",
        description: "Riding bikes is more than just a hobby for me; it's a way to explore the world and experience the freedom of the open road. I love discovering new places and adventures on my bike.",
      },
    ],
  },
  {
    className: "col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60",
    items: [
      {
        icon: "fas fa-paint-brush",
        title: "Art and Design",
        meta: "Pencil Drawing and Design Enthusiast",
        description: "Art and design have always been my creative outlets. I have a strong interest in drawing and Designing, particularly with pencils, and spend my free time creating detailed and expressive artwork.",
      },
      {
        icon: "fas fa-gamepad",
        title: "Gaming",
        meta: "Passionate about Multiplayer Games",
        description: "Gaming is a favorite pastime of mine, especially multiplayer games that allow me to connect with friends. I enjoy the teamwork and strategy involved in achieving common goals and leveling up together.",
      },
    ],
  },
];
