// import beesKnees from '../../assets/images/bees-knees.png';
// import studioGhibliApi from '../../assets/images/ghibli-project.png';
// import ducommunicate from "../../assets/images/du-communicate.png";
// import pokeBattle from '../../assets/images/pokebattle.png';
// eslint-disable-next-line
// import loginSignUp from '../../assets/images/login-signup-project.png';
import educationIcon from '../images/education-icon.png';
import workIcon from '../images/work-icon.png';

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

const aboutMe = [
    "I've always had a natural curiosity for how things are made. As a child, I enjoyed taking things apart and putting them back together. This curiosity and passion has led me to the Electrical Engineering field, and now into Web Development. I am always interested in learning new things and being challenged!"
];

const education = [
    {
        program: "Electrical Engineering Technician",
        school: "Centennial College",
        description: "2-year Electrical Engineering Technician program, developing skills in design, installtion, maintenance and repair of electrical/electronic systems. OACETT recognized program.",
        icon: educationIcon
    },
    {
        program: "Web Development",
        school: "BrainStation",
        description: "Extensive 12-week immersive Web Development program in Full-Stack Engineering through completion of multiple projects, cross-disciplinary collaboration and pair-programming.",
        icon: educationIcon
    }
]

const work = [
    {
        position: "Meter Technician",
        company: "QMC (Quadlogic Meters Canada)",
        summary: "something here",
        duration: "Jun 2019 - Nov 2019",
        icon: workIcon
    },
    {
        position: "Meter Lab Technician",
        company: "QMC (Quadlogic Meters Canada)",
        summary: "something here",
        duration: "Nov 2019 - Dec 2021",
        icon: workIcon
    },
    {
        position: "Lead Lab Technician",
        company: "QMC (Quadlogic Meters Canada)",
        summary: "something here",
        duration: "Dec 2021 - Feb 2022",
        icon: workIcon
    },
    {
        position: "Website Operations",
        company: "The Source (Bell) Electronics Inc",
        summary: "something here",
        duration: "Jun 2022 - Present",
        icon: workIcon
    },
]

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
        skillSet: [
            {
                skillName: "HTML",
                skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                altText: ""
            }, {

            },
            {
                skillName: "CSS",
                skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                altText: ""
            }, {

            },            
            {
                skillName: "SASS",
                skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
                altText: ""
            }, {

            },  
            {
                skillName: "BootStrap",
                skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
                altText: ""
            }, {

            },  
            {
                skillName: "JavaScript",
                skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                altText: ""
            }, {

            },  
            {
                skillName: "React",
                skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                altText: ""
            }, {

            },  
               
        ]
    },
    {
        title: "Back-End",
        skillSet: [
            {
                skillName: "JavaScript",
                skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                altText: "",
            },
            {
                skillName: "Node.js",
                skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                altText: "",
            },
            {
                skillName: "Express.js",
                skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                altText: "",
            },
            {
                skillName: "mySQL",
                skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                altText: "",
            },                        
        ],
    },
    {
        title: "Libraries, Tools, and Others",
        skillSet: [
            {
                skillName: "React-Router-Dom"
            },
            {
                skillName: "bcrypt"
            },
            {
                skillName: "Axios"
            },
            {
                skillName: "JWY"
            },
            {
                skillName: "express-rate-limit"
            },
            {
                skillName: "VSCoded"
            },
            {
                skillName: "Figma"
            },
            {
                skillName: "JIRA"
            },
            {
                skillName: "Git"
            },
            {
                skillName: "Github"
            },
            {
                skillName: "Postman"
            },
            {
                skillName: "SAP hybris"
            },
            {
                skillName: "SmartEdit"
            },
            {
                skillName: "AutoCAD"
            },
            {
                skillName: "Arduino"
            },
        ],
        listClass: "column"
    },
];

export { navContent, aboutMe, education, work, skills };