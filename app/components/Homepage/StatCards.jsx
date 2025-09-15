"use client";
import { gsap } from "@/app/lib/gsapConfig";
import { useGSAP } from "@gsap/react";

export default function StatCards() {
  const statCards = [
    {
      count: "2+",
      title: "years experience",
      content:
        "Professional experience in creating websites that blend design excellence with smooth functionality.",
    },
    {
      count: "10+",
      title: "projects worked",
      content:
        "Consistently completed diverse projects with accuracy, efficiency, and dedication.",
    },
    {
      count: "99%",
      title: "satisfaction",
      content:
        "Delivering unmatched quality, ensuring customer happiness with every project.",
    },
  ];

  useGSAP(() => {
    gsap.utils
      .toArray(".stat-cards-wrapper .stat-card-item")
      .forEach((card) => {
        gsap.from(card, {
          yPercent: 100,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        });

        gsap.from(card.querySelectorAll(".text-reveal"), {
          yPercent: 100,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        });
      });
  });

  return (
    <section className="stat-cards-wrapper px-16 pb-20 pt-2 max-xl:pb-16 max-md:px-8">
      <div className="flex gap-8 max-xl:gap-4 max-lg:flex-col">
        {statCards.map((card, i) => {
          return (
            <div key={card.title + i} className="overflow-hidden">
              <div className="stat-card-item p-8 bg-white shadow-card rounded-lg flex-1 max-md:p-4">
                <div className="flex justify-between items-baseline font-inter border-b border-b-zinc-100 pb-5 mb-6 pr-1 max-md:pb-3 ">
                  <div className="overflow-hidden">
                    <div className="text-reveal text-5xl text-zinc-800 font-bold tracking-tight max-md:text-3xl">
                      {card.count}
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-reveal text-sm text-sec">
                      {card.title}
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <p className="text-reveal text-sec max-md:text-sm">
                    {card.content}
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
