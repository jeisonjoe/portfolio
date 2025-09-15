"use client";

import { gsap } from "@/app/lib/gsapConfig";
import { useGSAP } from "@gsap/react";
import { services, toolsAndTech } from "@/app/util";

export default function ServicesSection() {
  useGSAP(() => {
    gsap.from(".services-section-left .text-slideup", {
      ease: "expo.out",
      duration: 1.5,
      yPercent: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".services-section-left",
        start: "-100% 85%",
      },
    });
    gsap.utils.toArray(".services-wrap .services-item").forEach((service) => {
      gsap.from(service, {
        ease: "power4.out",
        duration: 1,
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: service,
        },
      });
      gsap.from(service.querySelectorAll(".text-reveal"), {
        ease: "power4.out",
        duration: 1,
        yPercent: 100,
        opacity: 0,
        delay: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: service,
        },
      });
    });
  }, []);

  return (
    <section className="px-16 py-16 pb-18 border-t border-t-zinc-200 flex justify-between gap-32 max-2xl:flex-col max-2xl:gap-8 max-2xl:pt-6 max-2xl:pb-12 max-md:p-6 max-md:pb-12 max-md:gap-6">
      <div className="services-section-left flex flex-col gap-3 w-3/12 pt-4 max-2xl:w-full">
        <span className="overflow-hidden">
          <h2 className="text-slideup side-heading h-fit pb-1">services.</h2>
        </span>
        <span className="overflow-hidden">
          <p className="text-slideup text-sec">
            Solutions to elevate your online presence and drive success in the
            digital landscape
          </p>
        </span>
      </div>

      <div className="services-wrap flex gap-6 w-9/12 max-2xl:w-full max-lg:flex-col">
        {services.map((service) => {
          return (
            <div key={service.name} className="overflow-hidden">
              <div className="services-item flex flex-col justify-between gap-8 p-8 rounded-lg bg-white shadow-card h-full max-md:p-4 overflow-hidden">
                <div className=" flex flex-col gap-16 max-md:gap-8">
                  <div className="flex flex-col gap-4 max-md:gap-1">
                    <div className="overflow-hidden">
                      <h2 className="text-reveal text-2xl text-service-title font-semibold max-md:text-xl">
                        {service.name}
                      </h2>
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-reveal text-sec text-lg leading-[1.65] max-md:text-base">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap overflow-hidden">
                    {service.tags.map((tag) => {
                      return (
                        <div key={tag} className="chip text-reveal">
                          {tag}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
