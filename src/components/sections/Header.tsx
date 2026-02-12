"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "솔루션", href: "#solutions" },
  { name: "포트폴리오", href: "#portfolio" },
  { name: "기술스택", href: "#techstack" },
  { name: "서비스", href: "#services" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();

    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Nav bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[#050505]/80 backdrop-blur-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Brand */}
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="FlowCoder Logo"
                className="w-8 h-8 relative z-[10000]"
              />
              <span className="text-xl font-bold text-white tracking-tight">FlowCoder</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs font-medium text-white uppercase tracking-wider hover:line-through transition-all cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <Button
                size="sm"
                variant="outline"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                문의하기
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-b border-white/10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-medium text-white/70 uppercase tracking-wider hover:text-white hover:line-through transition-all cursor-pointer py-2 px-2"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                size="sm"
                variant="outline"
                className="mt-2 w-fit"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                문의하기
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
