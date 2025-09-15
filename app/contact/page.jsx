"use client";
import Link from "next/link";
import { socialLinks } from "../util";
import { gsap } from "../lib/gsapConfig";
import { useGSAP } from "@gsap/react";
export default function Page() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".contact-me-wrap .text-reveal", {
      yPercent: 100,
      opacity: 0,
      ease: "power4.out",
      duration: 1,
      stagger: 0.15,
    });
    tl.from(
      ".contact-me-wrap .social-links .social-link",
      {
        yPercent: 100,
        opacity: 0,
        ease: "power4.out",
        duration: 1,
        stagger: 0.15,
      },
      "-=1"
    );

    gsap.from(
      ".contact-me-form input, .contact-me-form button, .contact-me-form textarea",
      {
        yPercent: 100,
        opacity: 0,
        ease: "power4.out",
        duration: 1.5,
        clearProps: "transform",
        scrollTrigger: {
          trigger: ".contact-me-form",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <main className="pt-[92px] w-full  min-h-screen bg-[#f9fafc] pb-16 flex items-center justify-center">
      <div className="contact-me-wrap flex items-center justify-center w-full h-fit p-16 gap-16 overflow-hidden max-2xl:flex-col max-2xl:items-start max-md:p-8">
        {/* Text */}
        <div className="left-container flex flex-col gap-6 max-w-[36rem] max-md:gap-5">
          <span className="overflow-hidden bg-[#E9E9E9] px-4 py-2 rounded-md w-fit max-md:text-xs">
            <div className="text-reveal">Contact Now</div>
          </span>
          <span className="overflow-hidden text-primary font-extrabold text-6xl font-inter tracking-tight max-md:text-4xl">
            <div className="text-reveal">Let's connect</div>
          </span>
          <span className="overflow-hidden">
            <p className="text-reveal text-sec ">
              I'd love to hear from you! Whether you're looking to collaborate,
              discuss an idea, or simply connect, feel free to reach out.
            </p>
          </span>
          <div className="flex gap-3 overflow-hidden social-links">
            {socialLinks.map((i, index) => {
              return (
                <Link key={index} href={i.url} className="social-link">
                  <i.icon size={32} className="text-sec-light max-md:size-8" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Contact Pane */}
        <div className="flex flex-col gap-4 w-[50rem] relative contact-me-form max-lg:w-full">
          <span className="overflow-hidden">
            <input
              type="text"
              placeholder="Name"
              className="bg-input w-full px-8 py-6 rounded-md focus:outline-zinc-200 max-md:py-5 max-md:px-6 max-md:text-sm"
            />
          </span>
          <span className="overflow-hidden">
            <input
              type="text"
              placeholder="Email"
              className="bg-input w-full px-8 py-6 rounded-md  focus:outline-zinc-200 max-md:py-5 max-md:px-6 max-md:text-sm"
            />
          </span>
          <span className="overflow-hidden">
            <textarea
              name="message"
              id="message"
              className="resize-none bg-input w-full h-[200px] px-8 py-6 rounded-md  focus:outline-zinc-200 max-md:py-5 max-md:px-6 max-md:text-sm"
              placeholder="Message"
            ></textarea>
          </span>
          <span className="overflow-hidden">
            <button
              type="submit"
              className="contact-form-submit-button bg-btn text-white py-4 w-full text-lg rounded-md cursor-pointer hover:bg-btn-hover active:scale-[0.97] max-md:py-4 max-md:px-6 max-md:text-base"
            >
              Submit
            </button>
          </span>

          <div className="lines absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="line absolute w-[1px] h-[125%] bg-zinc-100 -translate-y-12 -translate-x-4"></div>
            <div className="line absolute right-0 w-[1px] h-[125%] bg-zinc-100 -translate-y-12 translate-x-4"></div>
            <div className="line absolute w-[120%] h-[1px] bg-zinc-100 -translate-y-4 -translate-x-18"></div>
            <div className="line absolute bottom-0 w-[120%] h-[1px] bg-zinc-100 translate-y-4 -translate-x-18"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
