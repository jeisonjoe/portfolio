// import { useEffect } from "react";
"use client";
import { gsap } from "@/app/lib/gsapConfig";
import { useGSAP } from "@gsap/react";
import MoveInProjectCard from "../projects/MoveInProjectCard";

export default function FeaturedWorks() {
  useGSAP(() => {
    gsap.from(".featured-works-left .text-slideup", {
      ease: "expo.out",
      duration: 1.5,
      yPercent: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".featured-works",
        start: "top 85%",
      },
    });
  });

  return (
    <section className="featured-works px-16 py-16 pb-24 border-t border-t-zinc-200 max-md:p-6 max-md:pt-12">
      <div className="featured-works-left flex flex-col gap-3 max-w-lg">
        <span className="overflow-hidden">
          <h2 className="text-slideup side-heading max-md:text-2xl">
            featured works.
          </h2>
        </span>
        <span className="overflow-hidden">
          <p className="text-slideup text-sec">
            I have worked with clients and tailored experiences according to
            their goals and requirements
          </p>
        </span>
      </div>
      <MoveInProjectCard />
    </section>
  );
}
