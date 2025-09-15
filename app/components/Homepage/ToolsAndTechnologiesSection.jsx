"use client";

import { gsap } from "@/app/lib/gsapConfig";
import { useGSAP } from "@gsap/react";
import { toolsAndTech } from "@/app/util";

export default function ToolsAndTechnologiesSection() {
  useGSAP(() => {
    gsap.from(".technologies-section-left .text-slideup", {
      ease: "expo.out",
      duration: 1.5,
      yPercent: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".technologies-section-left",
        start: "top 85%",
      },
    });

    gsap.utils.toArray(".tools-tech-group").forEach((group) => {
      gsap.from(group, {
        ease: "power4.out",
        duration: 2,
        yPercent: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: group,
          start: "-100% 80%",
        },
      });

      gsap.from(group.querySelectorAll(".text-reveal"), {
        ease: "power4.out",
        duration: 2,
        yPercent: 100,
        opacity: 0,
        delay: 0.3,
        scrollTrigger: {
          trigger: group,
          start: "-100% 80%",
        },
      });

      gsap.from(group.querySelectorAll(".skill-image"), {
        ease: "power4.out",
        duration: 1,
        yPercent: 100,
        opacity: 0,
        delay: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: group,
          start: "-100% 80%",
        },
      });
    });
  }, []);

  return (
    <section className="px-16 py-16 pb-16 border-t border-t-zinc-200 flex justify-between gap-32 max-2xl:flex-col max-2xl:gap-8 max-2xl:pt-6 max-2xl:pb-12 max-md:p-6 max-md:pb-12 max-md:gap-6">
      <div className="technologies-section-left flex flex-col gap-3 w-3/12 pt-4 max-2xl:w-full">
        <span className="overflow-hidden">
          <h2 className="text-slideup side-heading h-fit pb-1">
            tools and technologies.
          </h2>
        </span>
        <span className="overflow-hidden">
          <p className="text-slideup text-sec">
            Gained experience with each tool and technology over the years
            through constant learning, practice and implementation
          </p>
        </span>
      </div>

      <div className="tools-and-tech flex flex-wrap w-9/12 max-2xl:w-full max-md:gap-4">
        {toolsAndTech.map((group) => {
          return (
            <div
              key={group.groupName}
              className="p-2 nth-[1]:w-full nth-[2]:w-1/2 nth-[3]:w-1/2 nth-[4]:w-full max-md:nth-[2]:w-full max-md:nth-[3]:w-full max-md:p-0 overflow-hidden"
            >
              <div className="tools-tech-group flex flex-col justify-between gap-8 p-8 rounded-lg bg-white shadow-card h-full max-md:p-4 max-md:gap-4">
                <div className="flex flex-col gap-8">
                  <div className="overflow-hidden">
                    <h2 className="text-reveal text-xl text-card-title font-bold max-md:text-lg">
                      {group.groupName}
                    </h2>
                  </div>
                  <div className="flex gap-8 flex-wrap overflow-hidden">
                    {group.images.map((img) => {
                      return (
                        <img
                          key={img.img}
                          src={`/homepage/toolsandtech${img.img}.png`}
                          alt={img.title}
                          title={img.title}
                          className="skill-image object-contain w-fit max-h-[38px] cursor-pointer max-md:max-h-[28px]"
                          loading="lazy"
                          height={42}
                          width={42}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="overflow-hidden">
                  <p className="text-reveal text-sec text-lg leading-[1.65] max-md:text-base">
                    {group.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
