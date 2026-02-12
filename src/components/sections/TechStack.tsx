"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";

interface TechCategory {
  name: string;
  technologies: string[];
}

const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
  },
  {
    name: "Backend",
    technologies: ["Supabase", "Prisma", "PostgreSQL", "FastAPI"],
  },
  {
    name: "AI/ML",
    technologies: ["Google Gemini", "OpenAI", "Claude", "LangGraph"],
  },
  {
    name: "Multimodal",
    technologies: ["ElevenLabs", "D-ID", "Veo", "Perplexity"],
  },
  {
    name: "Automation",
    technologies: ["n8n", "RAG", "Vector DB", "Workflow Engine"],
  },
];

export function TechStack() {
  return (
    <section id="techstack" className="py-20 md:py-32 bg-[#050505] scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-medium text-white/50 tracking-[0.3em] uppercase mb-4">
            HOW
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            안정적이고 빠른 AI 구축,<br />
            검증된 Next.js 스택으로 가능합니다
          </h2>
        </ScrollReveal>

        {/* Tech Stack Table */}
        <ScrollReveal className="max-w-4xl mx-auto">
          <StaggerContainer className="bg-transparent border border-white/10 overflow-hidden">
            {techCategories.map((category, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 ${
                    index !== techCategories.length - 1 ? "border-b border-white/10" : ""
                  } hover:bg-white/5 transition-colors`}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  {/* Category Name */}
                  <div className="w-full sm:w-40 shrink-0">
                    <span className="inline-flex items-center px-4 py-2 bg-white text-black font-semibold text-sm">
                      {category.name}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="px-3 py-1.5 text-sm font-medium hover:bg-white/10 transition-colors cursor-default"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>

        {/* Additional Info */}
        <ScrollReveal className="text-center mt-12">
          <p className="text-white/40">
            프로덕션 레벨의 검증된 기술 스택으로 안정적인 서비스를 구축합니다.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
