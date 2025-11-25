"use client";

import { Expand, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const images = Array.from(
  { length: 32 },
  (_, i) => `/images/portfolio/${i + 1}.jpg`
);

export default function GallerySection() {
  const t = useTranslations("IndexPage.gallery");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="portfolio" className="bg-muted relative overflow-hidden py-24">
      {/* Enhanced decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary/20 absolute -start-32 top-1/4 h-[700px] w-[700px] rounded-full blur-3xl"
        />
        <m.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -90, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="bg-primary/20 absolute -end-32 bottom-1/4 h-[700px] w-[700px] rounded-full blur-3xl"
        />
        {/* Additional accent orbs */}
        <m.div
          animate={{
            y: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary/30 absolute start-1/3 top-1/2 h-64 w-64 rounded-full blur-2xl"
        />
        <m.div
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="bg-primary/30 absolute end-1/4 top-1/3 h-64 w-64 rounded-full blur-2xl"
        />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-primary/30 bg-primary/10 mb-6 inline-flex items-center gap-2 rounded-full border px-6 py-2.5 shadow-lg backdrop-blur-sm"
          >
            <Sparkles className="text-primary h-4 w-4" />
            <span className="text-primary text-sm font-bold uppercase tracking-wider">
              {t("badge")}
            </span>
          </m.div>
          <h2 className="mb-5 text-4xl font-black md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="text-primary mx-auto max-w-2xl text-xl font-bold md:text-2xl">
            {t("subtitle")}
          </p>
        </m.div>

        {/* Gallery Grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.slice(0, 9).map((image, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.02 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="hover:border-primary/20 group relative aspect-square cursor-pointer overflow-hidden rounded-3xl border border-transparent shadow-lg transition-all hover:shadow-2xl"
              onClick={() => openLightbox(index)}
            >
              <ExportedImage
                src={image}
                alt={`Portfolio ${index + 1}`}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Gradient overlay */}
              <div className="bg-linear-to-t absolute inset-0 from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              {/* Primary border on hover */}
              <div className="border-primary/0 group-hover:border-primary/60 absolute inset-0 rounded-3xl border-[3px] transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]" />
              {/* Expand icon */}
              <div className="bg-primary/20 absolute end-4 top-4 flex h-10 w-10 items-center justify-center rounded-full opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                <Expand className="text-primary h-5 w-5" />
              </div>
            </m.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={images.map((image, index) => ({
          src: image,
          alt: `Portfolio ${index + 1}`
        }))}
        plugins={[Counter, Fullscreen, Zoom, Slideshow, Thumbnails]}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true
        }}
        slideshow={{
          autoplay: false,
          delay: 3000
        }}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
          border: 1,
          borderRadius: 4,
          padding: 4,
          gap: 16
        }}
        counter={{
          container: { style: { top: "16px", insetInlineStart: "16px" } }
        }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.6)" }
        }}
      />
    </section>
  );
}
