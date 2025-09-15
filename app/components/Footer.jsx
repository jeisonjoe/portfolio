"use client";

import Link from "next/link";
import { navLinks, socialLinks } from "../util";
import { GoArrowRight, GoArrowUp } from "react-icons/go";
import { BiCopyright } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsapConfig";
import { useRef } from "react";

export default function Footer() {
  const footerImages = [
    {
      url: "banan2.jpg",
      alt: "minions hanging from a plantain leaf",
      transforms: "z-4 rotate-4 translate-y-2 -mr-[5rem] max-md:-mr-[5rem]",
    },
    {
      url: "surreal.jpg",
      alt: "man with leaves above the waist",
      transforms: "z-3 -rotate-4 translate-y-16 -mr-[7rem] max-md:-mr-[4rem]",
    },
    {
      url: "flowers.jpg",
      alt: "flowers of a plant",
      transforms: "z-2 -rotate-4 -translate-y-12 -mr-[6rem] max-md:-mr-[5rem]",
    },
    {
      url: "handleaf.jpg",
      alt: "leaf in hand",
      transforms: "z-1 rotate-8 translate-y-16",
    },
  ];

  const footerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".gallery-link-btn", {
        yPercent: 100,
        duration: 2,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".gallery-link-btn",
          start: "top bottom",
        },
      });
      gsap.from(".gallery-link-btn span, .gallery-link-btn svg", {
        xPercent: -100,
        duration: 2,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".gallery-link-btn",
          start: "top bottom",
        },
      });

      gsap.from(".gallery-cta-section .text-reveal", {
        yPercent: 100,
        duration: 2,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".gallery-link-btn",
          start: "top bottom",
        },
      });

      gsap.from(".footer-gallery-images-wrap .footer-gallery-image", {
        xPercent: -25,
        yPercent: 25,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.7,
        ease: "expo.inOut",
        clearProps: "transform,scale",
        scrollTrigger: {
          trigger: ".footer-gallery-images-wrap",
          start: "top bottom",
        },
        onStart: function () {
          this.targets().forEach((el) => (el.style.pointerEvents = "none"));
        },
        onComplete: function () {
          const targets = this.targets();
          targets.forEach((target) => {
            target.style.pointerEvents = "all";
            target.style.transition =
              "translate 0.3s ease-in-out ,scale 0.3s ease-in-out";
          });
        },
      });
    },
    { scope: footerRef }
  );

  return (
    <footer
      className="bg-footer-primary pt-[30rem] relative bottom-0 max-2xl:pt-[38rem] max-xl:overflow-hidden max-md:pt-[30rem]"
      ref={footerRef}
    >
      <div className="bg-footer-sec relative w-full z-[2] px-16 py-16 flex flex-col shadow-footer-layer max-md:p-6">
        {/* 1 */}
        <div className="w-full flex justify-between gap-16 max-[1200px]:flex-col max-md:gap-12">
          <div className="flex flex-col gap-12 max-[1200px]:flex-row justify-between max-[1200px]:items-center max-md:gap-8 max-md:flex-col max-md:items-start">
            <div className="flex flex-col gap-2 max-md:gap-1">
              <span className="text-4xl font-inter font-bold tracking-tight text-footer-light max-md:text-xl">
                Let's get in touch
              </span>
              <Link
                className="text-2xl underline font-bold text-footer-light-2"
                href="mailto:jeisonjoe67@gmail.com"
              >
                jeisonjoe67@gmail.com
              </Link>
            </div>
            <div className="flex gap-5">
              {socialLinks.map((i, index) => {
                return (
                  <Link key={index} href={i.url}>
                    <i.icon
                      size={32}
                      className="text-sec-light max-md:size-8"
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          <nav className="flex flex-col h-fit w-lg max-[1200px]:w-full">
            <Link
              href="/RESUME.pdf"
              target="_blank"
              className="flex justify-between items-center py-3 px-1 text-footer-light-2 border-b border-footer-light-2/20 first-of-type:border-t max-md:text-sm"
            >
              Resume
              <GoArrowRight size={18} className="max-md:size-4" />
            </Link>
            {navLinks.map((item) => {
              return (
                <Link
                  key={item.name}
                  href={item.link}
                  className="flex justify-between items-center py-3 px-1 text-footer-light-2 border-b border-footer-light-2/20 first-of-type:border-t max-md:text-sm"
                >
                  {item.name}
                  <GoArrowRight size={18} className="max-md:size-4" />
                </Link>
              );
            })}
          </nav>
        </div>
        {/* 2 */}
        <div className="flex justify-between items-center pt-24 pb-4 max-md:pt-14 max-md:flex-col max-md:gap-8 max-md:pb-8">
          <h2 className="font-inter font-extrabold text-5xl text-white">
            jeisonjoe.
          </h2>

          <div className="uppercase flex items-center font-inter gap-2 text-footer-light text-nowrap max-md:text-xs">
            <span>Copyright</span>
            <BiCopyright />
            <span>Jeison Joe . 2025</span>
          </div>

          <button
            className="text-white flex gap-3 items-baseline text-lg max-md:text-sm cursor-pointer"
            onClick={() => {
              window.scrollTo({ behavior: "smooth", top: 0 });
            }}
          >
            back to top <GoArrowUp size={14} className="max-md:size-3" />
          </button>
        </div>
      </div>

      <div className="gallery-cta-section absolute left-16 top-48 flex flex-col gap-6 z-10 max-2xl:top-28 max-xl:top-16 max-md:left-8 max-md:right-8">
        <span className="overflow-hidden">
          <Link
            href={"/gallery"}
            className="gallery-link-btn overflow-hidden flex items-center gap-4 text-2xl text-white font-extralight font-inter p-4 px-8 bg-[#34423a] rounded-full w-fit max-md:text-lg"
          >
            <span>Check Out My Gallery</span>
            <GoArrowRight className="block" />
          </Link>
        </span>

        <span className="overflow-hidden">
          <p className="text-reveal text-footer-light max-w-lg leading-[1.65]">
            One of my primary hobby is photography. I have made a gallery using
            my photographs. Why not have a look at it!
          </p>
        </span>
      </div>

      <div className="absolute right-20 top-42 flex z-[1] footer-gallery-images-wrap overflow-visible max-2xl:top-85 max-xl:right-8 max-md:-right-8 max-md:top-80">
        {footerImages.map((img, i) => {
          return (
            <div
              key={i}
              className={`footer-gallery-image px-2 pt-2 pb-16 bg-white ${img.transforms} shadow-footer-card cursor-pointer select-none  hover:-translate-y-38 active:scale-[0.95] active:z-10`}
            >
              <img
                src={`footer/${img.url}`}
                alt={img.alt}
                className="w-[330px] min-w-[280px] h-[420px] object-cover  object-bottom max-md:h-[200px] max-md:w-[200px] max-md:min-w-[150px]"
              />
            </div>
          );
        })}
      </div>
    </footer>
  );
}
