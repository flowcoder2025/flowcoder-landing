"use client";

import { useEffect, useState } from "react";

interface MetricProps {
  value: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

function MetricCard({ value, suffix = "", label, sublabel }: MetricProps) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [numericValue]);

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
  const metrics: MetricProps[] = [
    {
      value: "9",
      suffix: "+",
      label: "AI 솔루션",
      sublabel: "구축 완료",
    },
    {
      value: "98",
      suffix: "%",
      label: "비용 절감",
      sublabel: "실측 달성",
    },
    {
      value: "10",
      suffix: "K+",
      label: "스케일 검증",
      sublabel: "아키텍처",
    },
    {
      value: "95",
      suffix: "%",
      label: "개발시간 단축",
      sublabel: "프레임워크",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
