"use client";

import Image from "next/image";
import {
  Flame,
  MapPin,
  MessageCircle,
  ChevronRight,
  Star,
  Clock,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function SpicyBadge() {
  return (
    <Badge className="bg-primary/10 text-primary border-primary/20 gap-1.5 px-3 py-1.5 text-sm font-semibold">
      <Flame className="h-3.5 w-3.5" />
      Level Pedas Bisa Diatur!
    </Badge>
  );
}

function FeatureChips() {
  const features = [
    { icon: Clock, label: "Siap 5 Menit" },
    { icon: Wallet, label: "Mulai 10K" },
    { icon: MapPin, label: "Dekat Kampus" },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {features.map((feat) => (
        <div
          key={feat.label}
          className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground"
        >
          <feat.icon className="h-3.5 w-3.5 text-accent" />
          {feat.label}
        </div>
      ))}
    </div>
  );
}

function StarRating() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
        ))}
      </div>
      <span className="text-sm font-medium text-muted-foreground">
        4.9/5 dari 500+ mahasiswa
      </span>
    </div>
  );
}

function HeroContent() {
  const waNumber = "6281290414208";
  const waMessage = encodeURIComponent(
    "Halo Kak, saya mau pesan Ayam Geprek Lili!",
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <SpicyBadge />
        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
          Pedasnya Bikin Melek,{" "}
          <span className="text-primary">Harganya Bikin Tenang!</span>
        </h1>
        <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
          Ayam geprek sambal korek favorit mahasiswa UIN Raden Fatah. Crispy di
          luar, juicy di dalam, dan level pedasnya bisa kamu atur sendiri.
        </p>
      </div>

      <FeatureChips />
      <StarRating />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
        >
          Lihat Menu
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-2 border-primary/30 text-primary hover:bg-primary/5 gap-2 rounded-full px-8 text-base font-semibold transition-all"
          asChild
        >
          <a
            href={`https://wa.me/${waNumber}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            Pesan via WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Decorative ring behind the image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-72 w-72 rounded-full border-2 border-dashed border-primary/20 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-80 w-80 rounded-full border-2 border-dashed border-secondary/20 md:h-[26rem] md:w-[26rem] lg:h-[32rem] lg:w-[32rem]" />
      </div>

      {/* Main food image */}
      <div className="relative z-10 h-64 w-64 overflow-hidden rounded-full border-4 border-card shadow-2xl shadow-primary/20 md:h-80 md:w-80 lg:h-96 lg:w-96">
        <Image
          src="/images/ayam-geprek.jpg"
          alt="Ayam Geprek Lili - ayam geprek sambal korek pedas dengan nasi"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
          priority
        />
      </div>

      {/* Floating badge: price */}
      <div className="absolute -bottom-2 left-1/2 z-20 -translate-x-1/2 md:bottom-2">
        <div className="flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 shadow-lg">
          <Flame className="h-4 w-4 text-primary" />
          <span className="text-sm font-bold text-foreground">
            Mulai Rp10.000
          </span>
        </div>
      </div>

      {/* Floating badge: top-right */}
      <div className="absolute -right-2 top-6 z-20 md:right-0 md:top-10">
        <div className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 shadow-lg">
          <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
          <span className="text-xs font-bold text-foreground">Best Seller</span>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content - shows first on mobile (order-2 on lg for desktop right image) */}
          <div className="order-2 lg:order-1">
            <HeroContent />
          </div>

          {/* Image - shows second on mobile */}
          <div className="order-1 lg:order-2">
            <HeroImage />
          </div>
        </div>
      </div>

      {/* Bottom decorative bar */}
      <div className="relative h-1.5 w-full bg-primary/10">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-primary" />
        <div className="absolute inset-y-0 left-1/3 w-1/3 bg-accent" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-secondary" />
      </div>
    </section>
  );
}
