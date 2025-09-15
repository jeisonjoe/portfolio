"use client";

import ProjectCards from "../ProjectCards";
import { gsap } from "@/app/lib/gsapConfig";
import { useGSAP } from "@gsap/react";

export default function ProjectsSection() {
  useGSAP(() => {
    gsap.from(".projects-section-left .text-slideup", {
      ease: "expo.out",
      duration: 1.5,
      yPercent: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".projects-section-left",
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section className="px-16 py-16 pb-24 border-t border-t-zinc-200 flex justify-between gap-32 max-2xl:flex-col max-2xl:gap-8 max-2xl:pt-6 max-2xl:pb-12 max-md:p-6 max-md:gap-6">
      <div className="projects-section-left flex flex-col gap-3 w-3/12 pt-4 max-2xl:w-full">
        <span className="overflow-hidden">
          <h2 className="text-slideup side-heading">projects.</h2>
        </span>
        <span className="overflow-hidden">
          <p className="text-slideup text-sec">
            I have worked with clients and tailored experiences according to
            their goals and requirements
          </p>
        </span>
      </div>
      <ProjectCards />
    </section>
  );
}
