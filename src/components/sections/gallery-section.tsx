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
        className="from-muted to-background relative bg-gradient-to-b py-20"
      >
        {/* Background pattern */}
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-5" />

        <div className="container relative mx-auto px-4">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-primary/20 bg-primary/5 mb-4 inline-block rounded-full border px-4 py-1"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Portfolio
              </span>
            </m.div>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              Our Work in Action
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Capturing moments from the sky with precision and artistry
            </p>
          </m.div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <m.div
                key={image}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl shadow-xl transition-shadow hover:shadow-2xl"
                onClick={() => setSelectedImage(image)}
              >
                <ExportedImage
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {/* Gold accent border on hover */}
                <div className="border-primary/0 group-hover:border-primary/50 absolute inset-0 border-2 transition-all duration-300" />
                {/* View icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="bg-primary/90 rounded-full p-4 backdrop-blur-sm">
                    <svg
                      className="text-primary-foreground h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
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
