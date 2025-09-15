"use client";

import { gsap } from "@/app/lib/gsapConfig";
import { useGSAP } from "@gsap/react";

export default function MoveInProjectCard() {
  const projectDetails = {
    title: "Move In Dubai Real Estate",
    desc: "Curated custom UI and developed a Wordpress Website with CRM Integration for Move In Dubai Real Estate.",
    projectUrl: "https://moveindubai.com",
    tags: [
      "UI/UX",
      "Figma",
      "Frontend Development",
      "Backend Development",
      "Wordpress",
    ],
    images: [
      "homepage/projects/mockupmvin.png",
      "homepage/projects/mockupmvinmobile2.png",
    ],
  };

  useGSAP(() => {
    gsap.utils
      .toArray(".featured-project-card .text-slideup")
      .forEach((text) => {
        gsap.from(text, {
          yPercent: 100,
          opacity: 0,
          ease: "power4.out",
          duration: 1.5,
          scrollTrigger: {
            trigger: text,
            start: "top 95%",
          },
        });
      });

    gsap.utils
      .toArray(".featured-project-card .project-image")
      .forEach((img, i) => {
        gsap.from(img, {
          xPercent: () => (i % 2 === 0 ? -100 : 100),
          opacity: 0,
          ease: "power4.out",
          duration: 1.5,
          scrollTrigger: {
            trigger: img,
            start: "top 95%",
          },
        });
      });
  });

  return (
    <div className="featured-project-card mt-8 flex flex-col gap-8">
      <div className="flex gap-8 w-full max-lg:flex-col max-lg:gap-4">
        {projectDetails.images.map((img) => {
          return (
            <div
              key={img}
              className="w-1/2 rounded-xl overflow-hidden h-fit bg-img-bg max-lg:w-full"
            >
              <img
                src={img}
                alt=""
                className="project-image object-contain w-full "
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-5 max-md:gap-3">
          <span className="overflow-hidden">
            <h3 className="text-slideup text-project-title font-inter text-3xl font-bold tracking-tight max-md:text-2xl">
              {projectDetails.title}
            </h3>
          </span>

          <div className="flex flex-wrap gap-3 overflow-hidden max-md:gap-2">
            {projectDetails.tags.map((tag, i) => {
              return (
                <div
                  key={tag + i}
                  className="chip text-slideup will-change-transform"
                >
                  {tag}
                </div>
              );
            })}
          </div>
          <span className="overflow-hidden">
            <p className="text-slideup text-sec will-change-transform max-md:text-sm">
              {projectDetails.desc}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
