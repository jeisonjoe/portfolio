import { BiLogoFacebookSquare, BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";

export const socialLinks = [
    {
        icon: BiLogoInstagram,
        url: "",
    },
    {
        icon: BiLogoLinkedin,
        url: "",
    },
    {
        icon: BiLogoGithub,
        url: "",
    },
    {
        icon: BiLogoFacebookSquare,
        url: "",
    },
];

export const navLinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Gallery",
        link: "/gallery",
    },
    {
        name: "Contact",
        link: "/contact",
    },
];

export const toolsAndTech = [
    {
        groupName: "Frontend development",
        desc: "Expertise in frontend technologies over the years of building various user centric websites.",
        images: [
            {
                title: "HTML",
                img: "/frontend/html"
            },
            {
                title: "CSS",
                img: "/frontend/css"
            },
            {
                title: "Javascript",
                img: "/frontend/js"
            },
            {
                title: "GSAP",
                img: "/frontend/gsap"
            },
            {
                title: "Next.js",
                img: "/frontend/nextjs"
            },

            {
                title: "React.js",
                img: "/frontend/react"
            },
            {
                title: "Sass",
                img: "/frontend/sass"
            },
            {
                title: "Tailwind",
                img: "/frontend/tailwind"
            },
            {
                title: "Ember.js",
                img: "/frontend/ember"
            },

        ]
    },
    {
        groupName: "Design tools",
        desc: "Skilled in visual storytelling using Figma, Photoshop, Premiere Pro, After Effects ",
        images: [
            {
                title: "Figma",
                img: "/design/figma",
            },
            {
                title: "Photoshop",
                img: "/design/photoshop",
            },
            {
                title: "Premiere Pro",
                img: "/design/premierepro",
            },
            {
                title: "After Effects",
                img: "/design/aftereffects",
            }
        ]
    },
    {
        groupName: "Backend / CMS",
        desc: "Worked with cms like wordpress and backend technologies like php, nodejs, C#.",
        images: [
            {
                title: "Wordpress",
                img: "/backend/wordpress",
            },
            {
                title: "PHP",
                img: "/backend/php",
            },
        ]
    },
    {
        groupName: "Also worked with",
        desc: "Also worked with the above technologies for different purposes and have a good understanding of them.",
        images: [
            {
                title: "MySql",
                img: "/other/mysql",
            },
            {
                title: "XAMPP",
                img: "/other/xampp",
            },
            {
                title: "Firebase",
                img: "/other/firebase",
            },
            {
                title: "Google Analytics",
                img: "/other/googleanalaytics",
            }
        ]
    }
]


export const services = [
    {
        name: "Web Development",
        desc: "Craft bespoke websites with seamless functionality and captivating design.",
        tags: ["Website Development", "CMS Integration", "GSAP Animations", "Accessibility", "SEO Friendly", "Responsiveness"]
    },
    {
        name: "UI/UX Design",
        desc: "Deliver eye-catching visuals and intuitive experiences that engage audiences.",
        tags: ["UI Design", "UX Design", "UX Research", "Responsive Design", "Web Desing", "Prototyping", "Visual Storytelling"]
    }
]