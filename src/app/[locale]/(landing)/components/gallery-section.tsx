"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useState } from "react";

const images = [
  "/images/DJI_20240227172813_0259_D.jpg",
  "/images/DJI_20240227182720_0289_D-Enhanced-NR.jpg",
  "/images/_DSC0011 copy.jpg",
  "/images/_DSC1064 copy.jpg",
  "/images/_DSC6780-Enhanced-NR copy.jpeg",
  "/images/_DSC7506.jpg",
  "/images/_DSC9004-Enhanced-NR-Edit-2-Edit.jpg",
  "/images/_DSC9705-Edit copy.jpg",
  "/images/khaleej.jpg",
  "/images/WhatsApp Image 2025-11-21 at 17.08.43.jpeg",
  "/images/WhatsApp Image 2025-11-21 at 17.08.43 (5).jpeg",
  "/images/WhatsApp Image 2025-11-21 at 17.08.44.jpeg"
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section
        id="portfolio"
        className="from-muted to-background bg-linear-to-b relative py-32"
      >
        {/* Enhanced background pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: "32px 32px"
            }}
          />
        </div>

        {/* Animated gradient orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <m.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.15, 0.08]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="bg-primary absolute start-1/4 top-1/4 h-[500px] w-[500px] rounded-full blur-3xl"
          />
          <m.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.08, 0.15, 0.08]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="bg-primary absolute bottom-1/4 end-1/4 h-[500px] w-[500px] rounded-full blur-3xl"
          />
        </div>

        <div className="container relative mx-auto px-4">
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
              className="border-primary/20 bg-primary/5 mb-4 inline-block rounded-full border px-5 py-2"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Portfolio
              </span>
            </m.div>
            <h2 className="mb-5 text-4xl font-black md:text-5xl lg:text-6xl">
              Our Work in Action
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
              Capturing moments from the sky with precision and artistry
            </p>
          </m.div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <m.div
                key={image}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="rounded-4xl group relative h-80 cursor-pointer overflow-hidden shadow-2xl transition-all hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                onClick={() => setSelectedImage(image)}
              >
                <ExportedImage
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  fill
                  className="group-hover:scale-115 object-cover transition-all duration-700 group-hover:brightness-110"
                />
                {/* Enhanced gradient overlay */}
                <div className="bg-linear-to-t absolute inset-0 from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {/* Gold accent border on hover with glow */}
                <div className="border-primary/0 group-hover:border-primary/70 absolute inset-0 rounded-3xl border-[5px] transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]" />
                {/* View icon with enhanced styling */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <m.div
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.15, rotate: 90 }}
                    className="bg-primary/95 flex h-20 w-20 items-center justify-center rounded-full shadow-2xl backdrop-blur-sm"
                  >
                    <svg
                      className="text-primary-foreground h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </m.div>
                </div>
                {/* Image number badge */}
                <div className="absolute start-5 top-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="bg-primary/95 rounded-xl px-4 py-2 shadow-xl backdrop-blur-sm">
                    <span className="text-primary-foreground text-base font-black">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <m.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative h-full max-h-[90vh] w-full max-w-7xl"
          >
            <ExportedImage
              src={selectedImage}
              alt="Selected"
              fill
              className="object-contain"
            />
          </m.div>
        </m.div>
      )}
    </>
  );
}
