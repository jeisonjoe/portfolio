"use client";

import { gsap, ScrollTrigger } from "../lib/gsapConfig";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useGSAP } from "@gsap/react";

export default function Page() {
  const [images, setImages] = useState([]);

  const heroImagesRef = useRef([]);
  const heroOverlayRef = useRef([]);
  const heroTextRef = useRef([]);
  const galleryRef = useRef(null);

  useEffect(() => {
    fetch("/api/galleryImages")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(heroImagesRef.current, {
      y: (i) => (i % 2 == 0 ? "-100%" : "100%"),
      opacity: 1,
      duration: 1,
      ease: "expo.out",
      stagger: 0.1,
    });
    tl.from(
      heroOverlayRef.current,
      {
        opacity: 0,
        duration: 1,
        delay: 0.1,
      },
      "-=1"
    );
    tl.from(
      heroTextRef.current.querySelectorAll(".text-reveal"),
      {
        yPercent: 100,
        opacity: 0,
        ease: "power4.out",
        duration: 1,
      },
      "-=1"
    );
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const imgs = galleryRef.current.querySelectorAll(".gallery-image");
      imgs.forEach((img) => {
        gsap.from(img, {
          yPercent: 50,
          opacity: 0,
          ease: "power4.out",
          duration: 1.5,
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
          },
        });
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ctx.revert();
    };
  }, [images]);

  return (
    <div className={`font-inter w-full`}>
      <div className="w-full h-[100svh] overflow-hidden flex items-center justify-center ">
        {/* Text */}
        <div
          className="flex flex-col gap-2 items-center justify-center text-white "
          ref={heroTextRef}
        >
          <span className="overflow-hidden">
            <span className="text-reveal block uppercase font-light max-md:text-sm">
              Photographs By
            </span>
          </span>
          <span className="overflow-hidden">
            <h1 className="text-reveal text-8xl font-bold uppercase tracking-tighter max-md:text-5xl max-md:tracking-tight">
              Jeison Joe
            </h1>
          </span>
          <span className="overflow-hidden text-center">
            <span className="text-reveal block font-normal text-gray-300 leading-[1.65] max-md:text-sm max-md:px-8">
              One of my primary hobby is photography and videography.
              <br className="max-md:hidden" /> I take photographs and
              edit/color-grade them. This is my artistic kind of side.
            </span>
          </span>
        </div>

        {/* Images */}
        <div className="flex gap-0 w-full max-h-full absolute top-0 left-0 -z-[1] overflow-hidden ">
          <div
            className="absolute w-full h-full left-0 top-0 z-[1] bg-black/25 max-md:bg-black/35"
            ref={heroOverlayRef}
          ></div>
          {[...Array(4).keys()].map((i) => {
            return (
              <img
                key={i}
                ref={(el) => (heroImagesRef.current[i] = el)}
                src={`photographs/${i + 1}.jpg`}
                alt=""
                className="object-cover h-screen overflow-hidden"
              />
            );
          })}
        </div>
      </div>

      <div
        className="gallery m-auto px-12 py-12 gallery-images-wrapper max-md:px-4 max-md:py-4"
        ref={galleryRef}
      >
        {/* <div className=" columns-3 gap-4 gap-y-2"> */}

        {images && (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 750: 3, 1200: 4 }}
            gutterBreakpoints={{ 350: "12px", 750: "16px", 1200: "32px" }}
          >
            <Masonry columnsCount={3} gutter="16px">
              {images.map((image, i) => {
                return (
                  <div
                    key={image.url + i}
                    className="max-h-[90vh] will-change-transform overflow-hidden"
                  >
                    <img
                      src={image.url}
                      width={image.width}
                      height={image.height}
                      alt=""
                      className="gallery-image will-change-transform object-cover"
                      loading="lazy"
                      // ref={(el) => (galleryImagesRef.current[i] = el)}
                    />
                  </div>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        )}
        {/* </div> */}
      </div>
    </div>
  );
}
