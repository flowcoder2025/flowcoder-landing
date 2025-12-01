"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Landmark, GraduationCap, ArrowRight, Sparkles, Bot, Server, Users } from "lucide-react";
import { BUTTON_TEXT, LABEL_TEXT } from "@/lib/text-config";

export function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-cta" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            NOW
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            이제 당신의 비즈니스에<br />
            <span className="text-gradient">AI를 흐르게</span> 할 차례입니다
          </h2>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {/* B2B - 기업 문의 */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 card-hover group text-center">
            <CardHeader className="pb-4">
              <div className="icon-circle icon-circle-lg bg-primary-gradient mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-xl">{LABEL_TEXT.enterprise}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  {LABEL_TEXT.aiSolution}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Bot className="w-4 h-4 text-primary" />
                  {LABEL_TEXT.automation}
                </div>
              </div>

              <Button variant="teal" className="w-full">
                {BUTTON_TEXT.consultRequest}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* B2G - 공공기관 */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 card-hover group text-center">
            <CardHeader className="pb-4">
              <div className="icon-circle icon-circle-lg bg-primary-gradient mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Landmark className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-xl">{LABEL_TEXT.government}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <Server className="w-4 h-4 text-primary" />
                  {LABEL_TEXT.governmentProject}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  {LABEL_TEXT.systemBuild}
                </div>
              </div>

              <Button variant="teal" className="w-full">
                {BUTTON_TEXT.proposalRequest}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Education - 바이브코딩 */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 card-hover group text-center">
            <CardHeader className="pb-4">
              <div className="icon-circle icon-circle-lg bg-primary-gradient mx-auto mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-xl">{LABEL_TEXT.education}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  {LABEL_TEXT.lecture}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  {LABEL_TEXT.community}
                </div>
              </div>

              <Button variant="teal" className="w-full">
                {BUTTON_TEXT.participate}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}
