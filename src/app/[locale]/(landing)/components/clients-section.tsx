"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";
import { getLangDir } from "rtl-detect";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

export default function ClientsSection() {
  const t = useTranslations("IndexPage.clients");
  const locale = useLocale();
  const dir = getLangDir(locale);
  const autoScrollRef = useRef<any>(null);

  const clients = [
    { src: "/images/clients/1.jpeg", width: 80, height: 80 },
    { src: "/images/clients/2.png", width: 300, height: 100 },
    { src: "/images/clients/3.png", width: 70, height: 70 },
    { src: "/images/clients/4.png", width: 70, height: 80 },
    { src: "/images/clients/5.png", width: 70, height: 70 },
    { src: "/images/clients/6.png", width: 80, height: 80 },
    { src: "/images/clients/7.png", width: 120, height: 80 },
    { src: "/images/clients/8.png", width: 160, height: 80 }
  ];

  return (
    <section className="from-background/80 to-background bg-linear-to-b relative overflow-hidden py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary/10 absolute -start-32 top-1/4 h-[600px] w-[600px] rounded-full blur-3xl"
        />
        <m.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="bg-primary/10 absolute -end-32 bottom-1/4 h-[600px] w-[600px] rounded-full blur-3xl"
        />
      </div>

      <div className="relative">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-5 text-4xl font-black md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
        </m.div>

        {/* Clients Marquee */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white py-3"
        >
          <Carousel
            dir={dir === "rtl" ? "rtl" : "ltr"}
            opts={{
              align: "start",
              loop: true,
              watchDrag: false
            }}
            plugins={[
              AutoScroll({
                speed: 1,
                direction: "backward"
              })
            ]}
            ref={autoScrollRef}
            className="max-w-full overflow-hidden"
          >
            <CarouselContent>
              {[...clients, ...clients, ...clients].map((client, index) => (
                <CarouselItem
                  key={index}
                  className="flex basis-auto items-center px-1 ps-3"
                >
                  <ExportedImage
                    src={client.src}
                    alt={`Client ${index + 1}`}
                    width={client.width}
                    height={client.height}
                    placeholder="empty"
                    className="h-auto w-full object-contain transition-all duration-300"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </m.div>
      </div>
    </section>
  );
}
