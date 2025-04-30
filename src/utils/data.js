import CssImage from "../assets/HTML_CSS.webp";
import ReactImage from "../assets/React.jpg";
import ChakraImage from "../assets/chakra.png";
import BackEndImage from "../assets/NodeJs.jpg";

export const projects = [
  {
    title: "Fitness page",
    description: "Single page created with HTML and CSS",
    tech: ["HTML", "CSS"],
    image: CssImage,
    type: "Frontend",
    link: "https://github.com/Tolga0342/deploying-project-CSS-advanced",
    demo: "https://project-fitness-page.netlify.app/",
  },
  {
    title: "Recipe app",
    description: "React app created with HTML, Javascript, React and Chakra-ui",
    image: ReactImage,
    tech: ["HTML", "Javascript", "React", "Chakra-ui"],
    type: "Frontend",
    link: "https://github.com/Tolga0342/deploying-project-react-basic",
    demo: "https://project-basic-recipechecker.netlify.app/",
  },
  {
    title: "Event app",
    description: "React app created with HTML, Javascript, React and Chakra-ui",
    image: ChakraImage,
    tech: ["HTML", "Javascript", "React", "Chakra-ui"],
    type: "Frontend",
    link: "https://github.com/Tolga0342/deploy-react-event-app",
    demo: "https://project-event-app.netlify.app/",
  },
  {
    title: "Booking API",
    description: "RESTful API created with NodeJS, Express and Prisma",
    image: BackEndImage,
    tech: ["NodeJS", "Express", "Prisma"],
    type: "Backend",
    link: "https://github.com/Tolga0342/deploy-booking-API",
    demo: "https://booking-api-567h.onrender.com/",
  },
];
