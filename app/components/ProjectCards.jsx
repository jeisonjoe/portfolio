import Link from "next/link";
import { gsap } from "@/app/lib/gsapConfig";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function ProjectCards() {
  const projects = [
    {
      title: "E-Commerce App",
      tags: ["Next.js", "Firebase", "Tailwind", "Scss", "HeroUI"],
      desc: "Designed and developed an Ecommerce app with Admin Dashboard using Nextjs, Firebase and HeroUI.",
      url: "",
      className: "w-2/4",
    },
    {
      title: "Food App Landing Page",
      tags: ["React.js", "Framer Motion", "Scss"],
      desc: "Designed and developed a modern Landing page UI using Figma, React.js.",
      url: "",
      className: "w-2/4",
    },
    {
      title: "OfficeX Landing Page Design",
      tags: ["React.js", "Scss", "HTML", "Javascript", "Figma"],
      desc: "Designed and developed a modern Landing page UI using Figma, React.js.",
      className: "w-7/12",
      url: "",
    },
    {
      title: "Calculator",
      tags: ["HTML", "CSS", "Javascript"],
      desc: "A simple calculator app that makes use of HTML, CSS  and Javascript.",
      url: "https://noobcoderjoe.github.io/JeisonJoe-Portfolio/Projects/Calculator%20Reborn/index.html",
      className: "w-5/12",
    },
    {
      title: "Iphone 11 Website Clone",
      tags: ["HTML", "CSS"],
      desc: "Webpage using HTML and CSS to gain hands on experience on building websites",
      url: "https://noobcoderjoe.github.io/JeisonJoe-Portfolio/Projects/iphone-11clone/index.html",
      className: "w-2/4",
    },
    {
      title: "Iphone 14 Website Clone",
      tags: ["HTML", "CSS"],
      desc: "Webpage using HTML and CSS to gain hands on experience on building websites",
      url: "https://noobcoderjoe.github.io/JeisonJoe-Portfolio/Projects/iphone14/Apple.html",
      className: "w-2/4",
    },
    {
      title: "Modern Landing Page UI",
      tags: ["HTML", "CSS", "Javascript"],
      desc: "Webpage using HTML and CSS to gain hands on experience on building websites",
      url: "https://noobcoderjoe.github.io/JeisonJoe-Portfolio/Projects/modern/index.html",
      className: "w-full",
    },
  ];

  return (
    <div className="flex w-9/12 flex-wrap max-2xl:w-full">
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  const card = useRef(null);

  useGSAP(() => {
    gsap.utils
      .toArray(card.current.querySelector(".project-card-inner"))
      .forEach((c) => {
        gsap.from(c, {
          yPercent: 150,
          opacity: 0,
          ease: "power4.out",
          duration: 1.5,
          scrollTrigger: {
            trigger: c,
            start: "-100% 100%",
          },
        });
      });
  }, []);

  return (
    <div
      className={`${project.className} project-card px-2 py-2 overflow-hidden max-md:w-full max-md:px-0`}
      ref={card}
    >
      <Link
        href={project.url}
        target="_blank"
        className={`project-card-inner flex flex-col gap-4 h-full bg-white p-8 rounded-lg max-md:p-4`}
      >
        <h2 className="text-xl text-primary font-bold font-inter max-md:text-lg">
          {project.title}
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => {
            return (
              <div key={tag + i} className="chip">
                {tag}
              </div>
            );
          })}
        </div>
        <p className="text-sec max-md:text-sm">{project.desc}</p>
      </Link>
    </div>
  );
}
