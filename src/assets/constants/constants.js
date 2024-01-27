// import beesKnees from '../../assets/images/bees-knees.png';
// import studioGhibliApi from '../../assets/images/ghibli-project.png';
// import ducommunicate from "../../assets/images/du-communicate.png";
// import pokeBattle from '../../assets/images/pokebattle.png';
// eslint-disable-next-line
// import loginSignUp from '../../assets/images/login-signup-project.png';

const navContent = [
    {
        key: 1,
        content: "Home",
        link: "#home",
        arialabel: "Click here to go home"
    },
    {
        key: 2,
        content: "About",
        link: "#about",
        arialabel: "Click here to go about me section"
    },
    {
        key: 3,
        content: "Skills",
        link: "#skills",
        arialabel: "Click here to go skills section"
    },
    {
        key: 4,
        content: "Projects",
        link: "#projects",
        arialabel: "Click here to go projects section"
    },
    {
        key: 5,
        content: "Contact Me",
        link: "#contactme",
        arialabel: "Click here to contact me"
    },
];

{/*const projects = [
    {
        projectImage: beesKnees,
        subheader: "Bees Knees",
        deployed: "https://band-bees-knees.netlify.app/index.html",
        code: "https://github.com/jacky-ui/jacky-du-bandsite",
        summary: "Responsive biography website for the band Bees Knees. Can view current shows and post comments.",
        imageAlt: "Bees Knees",
        tools: "#html #css #sass #javascript"
    },
    {
        projectImage: studioGhibliApi,
        subheader: "Studio Ghibli API",
        deployed: "https://github.com/jacky-ui/studio-ghibli-api",
        code: "https://github.com/jacky-ui/studio-ghibli-api",
        summary: "Studio Ghibli API I created. This API contains all Studio Ghibli films. Deployed with Cyclic. Refer to documention for end points.",
        imageAlt: "Studio Ghibli API",
        tools: "#javascript #nodejs #expressjs #express-rate-limit"
    },
    {
        projectImage: studioGhibliApi,
        subheader: "Studio Ghibli Docs",
        deployed: "https://studio-ghibli-documentation.netlify.app/",
        code: "https://github.com/jacky-ui/studio-ghibli-docs",
        summary: "This is the documentation I created for the Studio Ghibli API. Refer to this documention on different end points. Deployed with Netlify.",
        imageAlt: "Studio Ghibli Documentation",
        tools: "#html #css #sass #javascript #axios"
    },
    {
        projectImage: pokeBattle,
        subheader: "Poke Card Battle",
        deployed: "https://card-battles.netlify.app/",
        code: "https://github.com/jacky-ui/PokeBattle",
        summary: "Simple Pokemon game I created with Pokemon API. Random Pokemons are generated and battle to determine the winner. Deployed with Netlify.",
        imageAlt: "Poke Battle",
        tools: "#html #css #sass #javascript #axios"
    },
    {
        projectImage: ducommunicate,
        subheader: "Du-Communicate Client",
        code: "https://github.com/jacky-ui/jacky-du-Du-Communicate-client",
        summary: "Du-Communicate is a social media platform to encourage other users to communicate. Users can post comments, visit profiles and etc. Client side.",
        imageAlt: "Du-Communicate Client",
        tools: "#react #scss #javascript #axios #jwt"
    },
    {
        projectImage: ducommunicate,
        subheader: "Du-Communicate Server",
        code: "https://github.com/jacky-ui/jacky-du-Du-Communicate-server",
        summary: "Du-Communicate is a social media platform to encourage other users to communicate. Users can post comments, visit profiles and etc. Server side.",
        imageAlt: "Du-Communicate Server",
        tools: "#javascript #nodejs #expressjs #bcrypt"
    },
];*/}
const skills = [
    {
        title: "Front-End",
        skillSet: [ "HTML5", "CSS", "SASS", "Bootstrap", "JavaScript", "React" ]
    },
    {
        title: "Back-End",
        skillSet: [ "JavaScript", "Node.js", "Express.js", "mySQL" ]
    },
    {
        title: "Libraries",
        skillSet: [ "React-Router-Dom", "bcrypt", "Axios", "JWT", "express-rate-limit" ]
    },    {
        title: "Tools",
        skillSet: [ "Figma", "Git", "Github", "VSCode", "Postman", "SAP hybris", "SmartEdit", "JIRA" ]
    },
    {
        title: "Others",
        skillSet: [ "AutoCAD", "Arduino" ]
    }
];

export { skills, navContent };