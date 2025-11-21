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
        className="bg-linear-to-b from-gray-50 to-white py-20 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="container mx-auto px-4">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">Portfolio</h2>
            <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              Our Work in Action
            </p>
          </m.div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <m.div
                key={image}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                onClick={() => setSelectedImage(image)}
              >
                <ExportedImage
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
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
