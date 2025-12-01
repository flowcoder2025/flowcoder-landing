"use client";

import { Badge } from "@/components/ui/badge";

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
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            HOW
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            최신 기술로 <span className="text-gradient">실제 문제</span>를 해결합니다
          </h2>
        </div>

        {/* Tech Stack Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl border shadow-lg overflow-hidden">
            {techCategories.map((category, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 ${
                  index !== techCategories.length - 1 ? "border-b" : ""
                } hover:bg-muted/50 transition-colors`}
              >
                {/* Category Name */}
                <div className="w-full sm:w-40 shrink-0">
                  <div className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-gradient text-white font-semibold text-sm">
                    {category.name}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="px-3 py-1.5 text-sm font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            프로덕션 레벨의 검증된 기술 스택으로 안정적인 서비스를 구축합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
