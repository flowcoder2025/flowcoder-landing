"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const TOUCH_QUERY = "(hover: none)";

function subscribeTouchChange(callback: () => void) {
  const mql = window.matchMedia(TOUCH_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getIsTouchDevice() {
  return window.matchMedia(TOUCH_QUERY).matches;
}

function getIsTouchDeviceServer() {
  return true; // SSR-safe default: assume touch → hide cursor
}

function useIsTouchDevice() {
  return useSyncExternalStore(subscribeTouchChange, getIsTouchDevice, getIsTouchDeviceServer);
}

export function CustomCursor() {
  const isTouchDevice = useIsTouchDevice();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const showCursor = useCallback(() => {
    if (!isVisibleRef.current) {
      isVisibleRef.current = true;
      setIsVisible(true);
    }
  }, []);

  const hideCursor = useCallback(() => {
    isVisibleRef.current = false;
    setIsVisible(false);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      showCursor();
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]")) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", showCursor);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", showCursor);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isTouchDevice, cursorX, cursorY, showCursor, hideCursor]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
      }}
    >
      <motion.div
        className="rounded-full bg-white -translate-x-1/2 -translate-y-1/2"
        animate={{
          width: isHovering ? 60 : 20,
          height: isHovering ? 60 : 20,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}
