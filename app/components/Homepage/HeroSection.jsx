"use client";
import { gsap } from "@/app/lib/gsapConfig";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function HeroSection() {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power4.out",
      },
    });

    tl.from(".lines .line-y", {
      yPercent: -100,
      opacity: 0,
      duration: 2.5,
      stagger: 0.25,
    });
    tl.from(
      ".lines .line-x",
      {
        xPercent: -100,
        opacity: 0,
        duration: 2.5,
        stagger: 0.15,
      },
      "="
    );
    tl.from(
      ".display-image",
      {
        opacity: 0,
        xPercent: -25,
        duration: 2,
      },
      "-=3"
    );
    tl.from(
      ".hero-section .text-slideup",
      {
        yPercent: 100,
        duration: 1,
        stagger: 0.15,
      },
      "-=3"
    );
  }, []);

  return (
    <div className="hero-section overflow-hidden w-full min-h-[94svh] h-fit flex items-center justify-center gap-16 pb-38 max-lg:flex-col  max-md:gap-7 ">
      <div className="relative ">
        <img
          src="/homepage/displayimage.jpg"
          className="display-image rounded-2xl shadow-profile-image relative z-[2] max-md:max-h-[30vh]"
          alt=""
        />

        <div className="lines absolute top-0 left-0 w-full h-full pointer-events-none z-[1]">
          <div className="line line-y absolute w-[1px] h-[150%] bg-line -translate-y-20 -translate-x-0 max-md:h-[100%]"></div>
          <div className="line line-y absolute right-0 w-[1px] h-[150%] bg-line -translate-y-20 translate-x-0 max-md:h-[100%]"></div>
          <div className="line line-y absolute left-[50%] w-[1px] h-[150%] bg-line  -translate-y-20 translate-x-0 max-md:h-[100%]"></div>
          <div className="line line-x absolute w-[150%] h-[1px] bg-line -translate-y-0 -translate-x-18"></div>
          <div className="line line-x absolute top-[50%] w-[100%] h-[1px] bg-line -translate-y-0 -translate-x-18 max-md:w-[150%]"></div>
          <div className="line line-x absolute bottom-0 w-[150%] h-[1px] bg-line translate-y-0 -translate-x-18"></div>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-start max-lg:items-center max-md:gap-2">
        <span className="overflow-hidden">
          <h1
            className={`text-slideup font-inter text-6xl font-bold tracking-[-2px] text-primary will-change-transform max-md:text-4xl max-md:tracking-tight`}
          >
            Jeison Joe
          </h1>
        </span>
        <span className="overflow-hidden">
          <h2 className="text-slideup text-xl flex items-center gap-2 text-zinc-500 max-md:text-[16px]">
            <span className=" border-r border-r-zinc-300 pr-3 text-accent will-change-transform">
              Frontend Engineer
            </span>
            <span>UI/UX Designer</span>
          </h2>
        </span>
        <span className="overflow-hidden max-w-md max-md:px-8 max-md:text-sm">
          <span className="text-slideup block text-sec mt-2 max-lg:text-center">
            I am a Frontend Engineer/Web Developer based in India, creating
            digital experiences for the web.
          </span>
        </span>
        <span className="overflow-hidden max-w-md max-md:px-8 max-md:text-sm">
          <span className="text-slideup block text-sec mt-2 max-lg:text-center">
            <Link
              href="/RESUME.pdf"
              target="_blank"
              className="flex gap-4 items-center py-2 px-4 border border-footer-light-2/30 rounded-md max-md:text-sm"
            >
              Resume
              <GoArrowRight size={18} className="max-md:size-4" />
            </Link>
          </span>
        </span>
      </div>

      {/* <div className="overflow-hidden absolute bottom-12 left-[50%] -translate-x-[50%] z-10  text-sec text-sm max-md:bottom-8 max-md:text-xs ">
        <span className="flex items-center gap-2 max-md:gap-1 text-slideup">
          Scroll Down <BiChevronDown size={18} className="max-md:size-4" />
        </span>
      </div> */}
    </div>
  );
}
