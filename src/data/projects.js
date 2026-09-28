import { image } from './images.js';

// Project cards (the two boxes in "My Projects") and the pop-up windows they open.
// Line breaks in text become <br>, **text** becomes bold.

export const projectCards = [
  {
    modalId: "gnc",
    aosDelay: "100",
    image: image("projects/card-own-projects.webp"),
    alt: "Own Project",
    category: "Own Projects",
    meta: "Take a Look",
    title: `My Projects !!!

Here, I highlight Web Development projects using HTML, CSS, JavaScript, React, and other modern tools, with experience in MongoDB, Firebase, and Netlify for hosting and databases.`,
  },
  {
    modalId: "coming",
    aosDelay: "200",
    image: image("projects/card-college-projects.webp"),
    alt: "College Project",
    category: "College Projects",
    meta: "Take a Look",
    title: `Mini and Final year projects !!!

Explore my web development project from the third year and my IoT project from the final year, each reflecting my skills and growth in these areas.`,
  },
];

export const projectModals = {
  gnc: [
    {
      date: "20 Jan, 2024",
      title: `1. SPOTSTAR!!!
Created using HTML CSS and JAVASCRIPT.`,
      hero: { ...image("projects/spotstar-login.webp"), alt: "Spotstar Hero", lazy: true },
      link: "https://spotstarresponsive.netlify.app/",
      galleryInsideDetails: true,
      gallery: [
        { ...image("projects/spotstar-3.webp"), alt: "Spotstar Image" },
        { ...image("projects/spotstar-5.webp"), alt: "Spotstar Image" },
      ],
      body: `-> SpotStar is a all-in-one platform for music and movies, represents a significant advancement in digital entertainment, combining the power of HTML, CSS, and JavaScript to deliver a seamless and immersive user experience. This innovative website addresses the growing demand for integrated entertainment solutions by offering users access to their favorite songs and films in a single, convenient location.

-> One of the key advantages of SpotStar is its ability to enhance user engagement through its intuitive and responsive design. By leveraging HTML, CSS, and JavaScript, SpotStar ensures fast loading times and smooth interactions, providing a dynamic and enjoyable browsing experience. The use of HTML provides a robust structure for the website, while CSS adds stylistic elements that make the site visually appealing and user-friendly. JavaScript, on the other hand, brings the site to life with interactive features and functionalities, ensuring users can easily navigate through vast collections of music and movies.

-> Furthermore, SpotStar's unified platform eliminates the need for users to switch between different websites or applications to access varied entertainment content. This consolidation not only saves time but also provides a more cohesive and satisfying user experience. Users can seamlessly transition from listening to their favorite tracks to watching blockbuster movies, all within the same interface.

-> The design of SpotStar is tailored to cater to diverse tastes and preferences, offering personalized recommendations and curated playlists based on user behavior and preferences. This level of customization is achieved through sophisticated algorithms and JavaScript functionalities that track user interactions and suggest content accordingly. As a result, SpotStar not only meets but exceeds user expectations, fostering a loyal user base.

-> Moreover, the website's responsive design ensures compatibility across various devices, including desktops, tablets, and smartphones. This flexibility allows users to enjoy their favorite music and movies anytime, anywhere, enhancing the overall accessibility and convenience of the platform. The use of modern web development practices ensures that SpotStar is both future-proof and scalable, capable of accommodating growing user numbers and expanding content libraries.

-> In summary, SpotStar stands out as a cutting-edge digital entertainment solution, expertly crafted using HTML, CSS, and JavaScript. Its integrated approach to music and movie content offers unparalleled convenience and engagement, making it a versatile and user-friendly platform. By prioritizing performance, personalization, and accessibility, SpotStar sets a new standard in the online entertainment industry, providing users with a holistic and enjoyable digital experience.`,
    },
    {
      date: "28 Mar, 2024",
      title: `2. SHOPSY!!!
Created using REACTJS.`,
      hero: { ...image("projects/shopsy-main.webp"), alt: "Shopsy Hero", lazy: true },
      link: "https://shopsy-ecomm.netlify.app",
      galleryInsideDetails: true,
      gallery: [
        { ...image("projects/shopsy-2.webp"), alt: "Shopsy Image" },
        { ...image("projects/shopsy-3.webp"), alt: "Shopsy Image" },
      ],
      body: `-> SHOPSY, a cutting-edge e-commerce platform created using ReactJS, is one of my main initiatives. Offering a smooth and enjoyable shopping experience, SHOPSY offers a large selection of clothes alternatives for men, women, and children. Several crucial stages were involved in the development of SHOPSY, all of which showcased my technical proficiency and meticulousness.

-> In order to guarantee a user-centric design and easy navigation, the project began with thorough study and planning. I developed a responsive, component-based design with ReactJS that facilitates effective state management and dynamic rendering. In order to handle user interactions and data flow and create a stable and dynamic shopping environment, React's Context API and hooks were essential.

-> In the design stage, I concentrated on creating a cutting-edge, user-friendly interface. To accommodate a range of user requirements, wireframes and mockups were painstakingly created, guaranteeing a visually beautiful and intuitive layout. SHOPSY provides a consistent experience on all devices thanks to the application of mobile-first design principles.

-> Another important consideration was performance optimization, with an emphasis on reducing load times and improving site speed in general.

-> The process of creating SHOPSY was demanding yet gratifying, demonstrating my dedication to creating scalable, high-quality online apps. From ideation to implementation, every phase highlights my enthusiasm for developing significant digital solutions. SHOPSY, which provides consumers with an engaging online platform to explore the lively world of fashion, is a tribute to my proficiency in ReactJS and contemporary web development techniques.`,
    },
    {
      date: "7 May, 2024",
      title: `3. GOCAR HIRE!!!
Created using HTML CSS and JAVASCRIPT.`,
      hero: { ...image("projects/gocar-hire-1.webp"), alt: "GoCar Hire Hero", lazy: true },
      link: "https://gocarhire.netlify.app/",
      galleryInsideDetails: true,
      gallery: [
        { ...image("projects/gocar-hire-2.webp"), alt: "GoCar Hire Image" },
        { ...image("projects/gocar-hire-3.webp"), alt: "GoCar Hire Image" },
      ],
      body: `-> Another notable project is GoCar Hire, a user-friendly car rental website developed using HTML, CSS, and JavaScript. This website is designed to provide a seamless and affordable car booking experience, allowing users to rent cars easily and at low cost.

-> The development process began with a thorough planning phase, where I focused on creating a straightforward and intuitive user interface. Using HTML and CSS, I built a responsive layout that ensures a consistent and attractive appearance across various devices. The design aimed to offer clear navigation and easy access to essential features, making the car rental process as smooth as possible.

-> JavaScript played a crucial role in adding interactivity to the site. I implemented dynamic functionalities such as booking forms, real-time availability checks, and user feedback mechanisms to enhance the overall user experience. These features ensure that users can quickly find and book the car they need with minimal effort.

-> Performance optimization and user experience were key priorities throughout the project. I employed best practices in coding and design to minimize load times and ensure a fast, responsive website. By focusing on these aspects, GoCar Hire provides a reliable and efficient platform for users to book rental cars.

-> The development of GoCar Hire was a rewarding experience that showcased my ability to create functional and engaging web applications using HTML, CSS, and JavaScript. This project reflects my commitment to delivering high-quality digital solutions that meet user needs and exceed expectations. Explore GoCar Hire to see how I bring convenience and affordability to the car rental market through effective web development techniques.`,
    },
    {
      date: "15 July, 2024",
      title: `4. ANUJ TILES!!!
Created using HTML CSS JAVASCRIPT AND BACKEND API's.`,
      hero: { ...image("projects/anuj-tiles-1.webp"), alt: "Anuj Tiles Hero", lazy: true },
      link: "https://anujtiles.netlify.app/",
      galleryInsideDetails: true,
      gallery: [
        { ...image("projects/anuj-tiles-2.webp"), alt: "Anuj Tiles Image" },
        { ...image("projects/anuj-tiles-3.webp"), alt: "Anuj Tiles Image" },
      ],
      body: `-> I developed 'Anuj Tiles,' a comprehensive and dynamic website for a leading tile company, utilizing a range of technologies including HTML, CSS, JavaScript, Bootstrap, and various back-end solutions.

-> The website features several key sections that provide a complete overview of the company's offerings and operations.

-> The 'About' page offers insights into the company's history and values,

-> while the 'Blog' section shares industry news and updates.

-> Users can explore a detailed 'Catalogue' showcasing the wide range of tiles available,

-> And the 'Contact' page includes intuitive forms for inquiries and communication.

-> Additionally, the 'Location' page helps customers find the nearest branch with ease.

-> To enhance the user experience, I incorporated several interactive and stylistic elements, such as a **custom cursor** for a unique browsing experience, **smooth mouse scroll animations** for fluid navigation, and an **elegantly designed footer** for consistent branding.

-> The website also features **top-scrolling buttons** to allow users to easily return to the top of the page.
The use of Bootstrap ensures a responsive and visually appealing design, while Git was employed for version control throughout the development process. The back-end infrastructure supports seamless data management and user interaction, delivering a polished and efficient browsing experience`,
    },
    {
      date: "6 Aug, 2024",
      title: `5. GAMING PORTFOLIO!!!
Created using HTML CSS AND JAVASCRIPT.`,
      hero: { ...image("projects/gaming-portfolio-1.webp"), alt: "Gaming portfolio Hero", lazy: true },
      link: "https://asifgaming-portfolio.netlify.app/",
      galleryInsideDetails: true,
      gallery: [
        { ...image("projects/gaming-portfolio-3.webp"), alt: "Gaming portfolio image" },
        { ...image("projects/gaming-portfolio-4.webp"), alt: "Gaming portfolio image" },
      ],
      body: `-> Welcome to my portfolio featuring a game concept that combines contemporary online design with interactive enjoyment!

-> I made this website with HTML, CSS, and JavaScript to give users a dynamic experience that captures the thrill of the gaming business.

-> Every component, such as the vibrant visuals, distinctive gaming cursor, and dynamic sound effects that play with every click, is meant to immerse you in an enjoyable and captivating world.

-> Explore with ease and observe how my interests for design and gaming combine to create a unique and eye-catching digital experience.

-> From interactive features to creative aesthetics, every element showcases how technology and creativity merge to bring you an unforgettable online adventure.

-> Explore now and see how my skills and interests come together in a truly distinctive way!`,
    },
    {
      date: "15 Jan, 2024",
      title: `6. BIKE-BAZAAR!!!
Created using HTML CSS AND JAVASCRIPT.`,
      hero: { ...image("projects/bike-bazaar-1.webp"), alt: "Bikebazaar Hero", lazy: true },
      link: "https://bike-bazaar.netlify.app/",
      galleryInsideDetails: true,
      gallery: [
        { ...image("projects/bike-bazaar-2.webp"), alt: "Bikebazaar Image" },
        { ...image("projects/bike-bazaar-3.webp"), alt: "Bikebazaar Image" },
      ],
      body: `-> Welcome to BikeBazaar, where cycling passion meets cutting-edge e-commerce! Designed with the latest HTML, CSS, and JavaScript technologies, BikeBazaar delivers a visually stunning and highly functional online shopping experience.

-> Our website offers a diverse selection of bicycles—from sleek road bikes to rugged mountain bikes—catered to every cyclist’s needs and preferences.

-> Each product is showcased with high-resolution images and detailed specifications to help you make informed decisions.

-> BikeBazaar’s user-friendly interface ensures a smooth browsing experience, while our intuitive search and filter options make finding your ideal bike quick and easy.

-> The responsive design guarantees seamless access whether you're shopping on a desktop, tablet, or smartphone. With integrated features like customer reviews, real-time inventory updates, and secure checkout, BikeBazaar is committed to providing a top-notch online shopping experience.

-> Explore our extensive catalog, enjoy personalized recommendations, and embark on your next cycling adventure with confidence at BikeBazaar—your gateway to top-tier bicycles and accessories!`,
    },
  ],
  coming: [
    {
      date: "5 June, 2023",
      title: `1. EMS-Siren Visionary!!!
With real-time traffic signal adjustment based on audio and picture processing.`,
      hero: { ...image("projects/ems-siren-visionary-1.webp"), alt: "EMS-Siren Hero", lazy: true },
      galleryInsideDetails: false,
      gallery: [
        { ...image("projects/ems-siren-visionary-1.webp"), alt: "EMS-Siren Image" },
        { ...image("projects/ems-siren-visionary-2.webp"), alt: "EMS-Siren Image" },
      ],
      body: `As a final year project, I successfully designed and implemented the 'EMS-Siren Visionary' system, which utilizes real-time traffic signal adjustment based on audio and picture processing to enhance emergency vehicle safety and traffic management. This innovative project showcases my ability to integrate multiple technologies, including machine learning and image processing, to create a cost-effective and efficient solution. By leveraging acoustic sensors and low-cost microcontrollers, I was able to develop a system that can accurately detect emergency vehicle sirens and adjust traffic signals accordingly, reducing waiting times and improving overall safety. This project demonstrates my technical expertise and problem-solving skills, and I am proud to have contributed to the development of a system that has the potential to make a positive impact on road safety.
System Architecture
1.Audio Processing:
->Identify the emergency vehicle siren sound using the Doppler effect, which changes the frequency of the siren as it approaches or recedes.
-> Use machine learning (ML) models to recognize the distinct patterns in the siren sounds, such as "hi-lo," "wail," and "yelp," which are modulated by specific waveforms.
-> Synthesize siren sounds programmatically or electronically to create a dataset for training the ML model.

2.Image Processing:
-> Utilize cameras to capture real-time traffic video and analyze it using image processing techniques.
-> Detect the emergency vehicle in the image and track its movement.

3.Traffic Signal Controller:
-> The traffic signal controller (e.g., Arduino Mega) stops the fixed sequence and light length algorithm and executes the emergency vehicle dispatching algorithm upon receiving the alert signal.
-> The controller resumes normal operation after the emergency vehicle has passed.

4.Traffic Management Centre:
-> The Traffic Management Centre (TMC) collects data from all RSUs and forwards it to the Traffic Signal Control Module (TSCM).
-> The TSCM includes a traffic analysis unit and a traffic signal controller.
-> The traffic analysis unit processes raw traffic data, and the traffic controller unit executes the proposed algorithm and sends its decision to traffic lights.

Benefits
1.Enhanced Safety:
-> The system helps drivers navigate intersections safely by alerting them to approaching emergency vehicles.
-> It reduces the risk of accidents and property damage.

2.Efficient Traffic Management:
-> The system optimizes traffic signal control by interrupting the fixed sequence and light length algorithm when an emergency vehicle is approaching.
-> This reduces the waiting time for emergency vehicles at intersections.

The EMS-Siren Visionary system is a testament to the power of innovative thinking and collaboration. By combining cutting-edge technologies and real-world problem-solving, I have created a solution that has the potential to make a lasting impact on road safety. As I move forward, I am excited to continue pushing the boundaries of what is possible and to see the EMS-Siren Visionary system become a standard in emergency response and traffic management`,
    },
    {
      date: "28 Feb, 2022",
      title: `2. School Registration System!!!
Created using HTML CSS as Web and Python and Django as Backend`,
      hero: { ...image("projects/school-registration-1.webp"), alt: "School Registration Hero", lazy: true },
      galleryInsideDetails: false,
      gallery: [
        { ...image("projects/school-registration-2.webp"), alt: "School Registration Image" },
        { ...image("projects/school-registration-3.webp"), alt: "School Registration Image" },
      ],
      body: `I have done a college project on a School Registration System, which I developed using a combination of HTML and CSS for the Web, and Python along with the Django framework for the backend. The project aimed to streamline the student registration process, making it more efficient and user-friendly. The Web interface, designed with HTML and CSS, provides an intuitive and responsive user experience, ensuring that users can easily navigate through the registration forms and other features. On the backend, Django's robust capabilities facilitated secure data handling and efficient management of user information. Python's simplicity and versatility played a crucial role in implementing various functionalities, such as form validation, database interactions, and user authentication. Overall, this project not only enhanced my technical skills but also provided valuable insights into the development of comprehensive web applications.
The School Registration System project involves several key components and steps, ensuring a seamless and efficient registration process. These include:

1.Web Development:
-> HTML: Structuring the web pages with semantic elements to create forms, tables, and navigation menus for easy user interaction.
-> CSS: Styling the web pages to ensure a visually appealing and responsive design that works well across different devices and screen sizes.

2.Backend Development:
-> Python: Writing server-side logic to handle data processing, user authentication, and form validations.
-> Django Framework: Leveraging Django's powerful features to manage the database, create models, and implement the MVC (Model-View-Controller) architecture.

3.Database Management:
-> Setting up and managing a database using Django's ORM (Object-Relational Mapping) to store and retrieve student information, course details, and registration data.

4.User Authentication:
-> Implementing a secure user authentication system to ensure that only authorized users can access specific features of the application, such as administrative tasks and sensitive information.
5.Testing and Debugging:
-> Performing thorough testing to identify and fix any bugs or issues in the system, ensuring a smooth and reliable user experience.
6.Deployment:
-> Deploying the application on a web server, making it accessible to users over the internet.
Each component plays a crucial role in the overall functionality and success of the School Registration System, providing a robust platform for managing student registrations efficiently.`,
    },
  ],
};
