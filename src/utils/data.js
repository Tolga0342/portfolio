import CssImage from "../assets/HTML_CSS.webp";
import ReactImage from "../assets/React.jpg";
import FrontEndImage from "../assets/Frontend.png";
import BackEndImage from "../assets/NodeJs.jpg";

export const projects = [
  {
    title: "Fitness subscription",
    description: "Responsive page created with HTML tags and designed with CSS",
    tech: ["HTML", "CSS"],
    image: CssImage,
    type: "Frontend",
    link: "https://github.com/Tolga0342/deploying-project-CSS-advanced",
    demo: "https://project-fitness-page.netlify.app/",
  },
  {
    title: "Recipe app",
    description:
      "Responsive react app includes home page with search -& click function and recipe page with return function styled with chakra-ui",
    image: ReactImage,
    tech: ["HTML", "CSS", "Javasript", "React"],
    type: "Frontend",
    link: "https://github.com/Tolga0342/deploying-project-react-basic",
    demo: "https://project-basic-recipechecker.netlify.app/",
  },
  {
    title: "Event app",
    description:
      "Responsive react app includes home page with navbar, search -& filter function, event page with edit -& delete function and adding page styled with Chakra-ui ",
    image: FrontEndImage,
    tech: ["HTML", "CSS", "Javasript", "React"],
    type: "Frontend",
    link: "https://github.com/Tolga0342/deploy-react-event-app",
    demo: "https://project-event-app.netlify.app/",
  },
  {
    title: "Booking API",
    description:
      "Developing RESTFUL API with NodeJS/Express and Prisma includes route handling, middleware, authentication and error handling",
    image: BackEndImage,
    tech: ["NodeJS", "Express", "Prisma"],
    type: "Backend",
    link: "https://github.com/Tolga0342/Backend-Booking-API-project",
    demo: "https://jouw-live-demo.com",
  },
];

// backend project: check of je live demo moet plaatsen.
// backend project: zo jam check of live demo werkt.
// icoon in aboutme / tekst bij contact formeler/ portfolio tekst terug naar homepage
// teksten aanpassen bij projects
// readme.md voor alle projecten even kort beschrijving geven.
