"use client";

import { gsap } from "@/app/lib/gsapConfig";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useRef } from "react";

export default function ExperienceCards() {
  const experience = [
    {
      title: "AdminDroid",
      designation: "Frontend Engineer",
      desc: (
        <>
          Designed and developed{" "}
          <Link
            href={"https://blog.admindroid.com"}
            target="_blank"
            className="link"
          >
            blog.admindroid.com
          </Link>
          ,{" "}
          <Link
            href={"https://o365reports.com"}
            target="_blank"
            className="link"
          >
            o365reports.com
          </Link>
          ,{" "}
          <Link
            href={
              "https://admindroid.com/how-to-access-power-bi-user-activity-in-microsoft-365"
            }
            target="_blank"
            className="link"
          >
            How-To Guides page template
          </Link>
          , optimizing the sites for SEO, achieved 95+ scores in Google
          Lighthouse, tracking user activities using Google Analytics. Worked on{" "}
          <Link
            href={"https://demo.admindroid.com/"}
            target="_blank"
            className="link"
          >
            product
          </Link>{" "}
          features in Ember.js
        </>
      ),
      duration: "2023 Aug - Present",
    },
    {
      title: "AdminDroid - Intern",
      designation: "Frontend Engineer",
      desc: (
        <>
          Designed and developed{" "}
          <Link href="https:m365scripts.com" target="_blank" className="link">
            m365scripts.com
          </Link>{" "}
          with proper SEO optimization and performance optimization, achieving
          95+ scores in Google Lighthouse. Worked on{" "}
          <Link
            href={"https://demo.admindroid.com/"}
            target="_blank"
            className="link"
          >
            product
          </Link>{" "}
          features in Ember.js
        </>
      ),
      duration: "2023 Jan - 2023 Jul",
    },
  ];
  return (
    <div className="flex w-9/12 flex-col max-2xl:w-full">
      {experience.map((exp, i) => {
        return <ExperienceCard key={i} experience={exp} />;
      })}
    </div>
  );
}

function ExperienceCard({ experience }) {
  const card = useRef(null);
  useGSAP(() => {
    gsap.from(card.current.querySelectorAll(".text-slideup"), {
      yPercent: 100,
      opacity: 0,
      ease: "power4.out",
      duration: 1.5,
      stagger: 0.25,
      scrollTrigger: {
        trigger: card.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div
      className="flex justify-between gap-8 items-center py-8 border-b border-b-zinc-200 last-of-type:border-b-0 max-md:first-of-type:pt-0 max-md:flex-col-reverse max-md:items-start max-md:gap-2"
      ref={card}
    >
      <div className="flex flex-col gap-3 max-md:gap-2">
        <span className="overflow-hidden">
          <h2 className="text-slideup will-change-transform font-inter text-2xl tracking-[-0.5px] font-bold max-md:text-[22px] max-md:tracking-normal">
            {experience.title}
          </h2>
        </span>
        <span className="overflow-hidden">
          <span className="text-slideup block text-accent will-change-transform">
            {experience.designation}
          </span>
        </span>
        <span className="overflow-hidden">
          <p className="text-slideup text-sec will-change-transform leading-[1.75] max-md:text-sm">
            {experience.desc}
          </p>
        </span>
      </div>
      <div className="text-sm font-inter text-footer-light border border-footer-light/20 rounded-full px-4 py-2  w-fit whitespace-nowrap max-md:text-xs max-md:py-1.5">
        <span className="overflow-hidden block">
          <span className="text-slideup block will-change-transform whitespace-nowrap w-fit">
            {experience.duration}
          </span>
        </span>
      </div>
    </div>
  );
}
