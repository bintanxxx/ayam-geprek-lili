"use client";

import { useState, useEffect } from "react";
import { Flame, Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Menu", href: "#menu" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Lokasi", href: "#lokasi" },
];

const WA_NUMBER = "6281290414208";
const WA_MESSAGE = encodeURIComponent(
  "Halo Kak, saya mau pesan Ayam Geprek Lili!",
);

function NavLogo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
        <Flame className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-foreground">
        Geprek <span className="text-primary">Lili</span>
      </span>
    </a>
  );
}

function DesktopNav() {
  return (
    <nav
      className="hidden items-center gap-1 lg:flex"
      aria-label="Navigasi utama"
    >
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

function DesktopCta() {
  return (
    <div className="hidden lg:block">
      <Button
        size="default"
        className="gap-2 rounded-full bg-primary px-5 text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
        asChild
      >
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-4 w-4" />
          Pesan Sekarang
        </a>
      </Button>
    </div>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground"
            aria-label="Buka menu navigasi"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-72 border-border/50 bg-background/95 backdrop-blur-xl"
        >
          <SheetHeader className="border-b border-border/50 pb-4">
            <SheetTitle asChild>
              <NavLogo />
            </SheetTitle>
          </SheetHeader>

          <nav
            className="flex flex-col gap-1 px-4 pt-4"
            aria-label="Navigasi mobile"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto border-t border-border/50 p-4">
            <Button
              className="w-full gap-2 rounded-full bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90"
              asChild
            >
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="h-4 w-4" />
                Pesan Sekarang
              </a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 16);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-background/80 shadow-sm backdrop-blur-xl"
          : "bg-background/0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLogo />
        <DesktopNav />
        <div className="flex items-center gap-3">
          <DesktopCta />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
