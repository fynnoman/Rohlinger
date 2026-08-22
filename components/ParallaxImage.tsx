"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function ParallaxImage({
  src,
  alt,
  priority,
  intensity = 120,
  className,
  aspect = "aspect-[16/10]",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  intensity?: number;
  className?: string;
  aspect?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-intensity, intensity]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${aspect} ${className ?? ""}`}>
      <motion.div style={{ y, scale }} className="absolute inset-[-10%]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 1400px"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
