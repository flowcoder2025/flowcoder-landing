"use client";

import { motion } from "framer-motion";

const marqueeItems = ["Build", "Automate", "Grow"];

export function Marquee() {
  return (
    <section className="border-y border-white/10 overflow-hidden py-6 bg-[#050505]">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {/* Duplicate content for seamless loop */}
        {[...Array(8)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center">
            {marqueeItems.map((item, i) => (
              <span key={`${setIndex}-${i}`} className="flex items-center">
                <span
                  className={`text-6xl md:text-8xl tracking-tighter uppercase font-bold mx-8 ${
                    (setIndex * 3 + i) % 2 === 0
                      ? "text-white"
                      : "text-transparent"
                  }`}
                  style={
                    (setIndex * 3 + i) % 2 !== 0
                      ? { WebkitTextStroke: "2px var(--neon-dim)" }
                      : undefined
                  }
                >
                  {item}
                </span>
                <span className="text-[var(--neon)] text-4xl md:text-6xl mx-4">·</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
