"use client";

import { useEffect, useState, useRef } from "react";

interface MetricProps {
  value: string;
  suffix?: string;
  label: string;
  sublabel: string;
  isVisible: boolean;
  delay?: number;
}

function MetricCard({ value, suffix = "", label, sublabel, isVisible, delay = 0 }: MetricProps) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing timers
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (isVisible) {
      // Reset count and start animation when visible
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCount(0);

      timerRef.current = setTimeout(() => {
        const duration = 2000;
        const steps = 60;
        const increment = numericValue / steps;
        let current = 0;

        intervalRef.current = setInterval(() => {
          current += increment;
          if (current >= numericValue) {
            setCount(numericValue);
            if (intervalRef.current) clearInterval(intervalRef.current);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }, delay);
    } else {
      // Reset to 0 when not visible
      setCount(0);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isVisible, numericValue, delay]);

  return (
    <div className="text-center p-6 md:p-8">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-lg md:text-xl font-semibold text-foreground mb-1">
        {label}
      </div>
      <div className="text-sm text-muted-foreground">{sublabel}</div>
    </div>
  );
}

export function Metrics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility based on intersection state (bidirectional)
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const metrics: Omit<MetricProps, "isVisible">[] = [
    {
      value: "9",
      suffix: "+",
      label: "AI 솔루션",
      sublabel: "구축 완료",
      delay: 0,
    },
    {
      value: "98",
      suffix: "%",
      label: "비용 절감",
      sublabel: "실측 달성",
      delay: 150,
    },
    {
      value: "10",
      suffix: "K+",
      label: "스케일 검증",
      sublabel: "아키텍처",
      delay: 300,
    },
    {
      value: "95",
      suffix: "%",
      label: "개발시간 단축",
      sublabel: "프레임워크",
      delay: 450,
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
