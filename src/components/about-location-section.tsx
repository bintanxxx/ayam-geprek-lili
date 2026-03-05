import {
  Flame,
  CheckCircle,
  MapPin,
  Clock,
  Phone,
  Navigation,
  Utensils,
  Heart,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const STRENGTHS = [
  {
    icon: CheckCircle,
    title: "100% Ayam Segar",
    description: "Ayam potong hari itu juga, bukan frozen",
  },
  {
    icon: Flame,
    title: "Sambal Ulek Dadakan",
    description: "Diulek langsung saat kamu pesan, bukan sambal botolan",
  },
  {
    icon: Heart,
    title: "Harga Mahasiswa",
    description: "Mulai Rp10.000, kantong aman perut kenyang",
  },
  {
    icon: Users,
    title: "Porsi Jujur",
    description: "Porsi nasi dan ayam beneran ngenyangin, tanpa tipuan",
  },
];

const OPERATING_HOURS = [
  { day: "Senin - Jumat", hours: "10.00 - 21.00 WIB" },
  { day: "Sabtu", hours: "10.00 - 22.00 WIB" },
  { day: "Minggu", hours: "11.00 - 21.00 WIB" },
];

const WA_NUMBER = "6281234567890";

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function SectionBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
      <Utensils className="h-3.5 w-3.5" />
      Cerita Kami
    </span>
  );
}

function StrengthItem({ item }: { item: (typeof STRENGTHS)[number] }) {
  const Icon = item.icon;
  return (
    <div className="group flex items-start gap-3.5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex flex-col gap-0.5">
        <h4 className="font-[family-name:var(--font-heading)] text-sm font-bold text-foreground">
          {item.title}
        </h4>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function AboutColumn() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <SectionBadge />
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Lebih Dekat dengan <span className="text-primary">Geprek Lili</span>
        </h2>
        <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
          Berawal dari kecintaan pada makanan pedas dan pemahaman akan kantong
          mahasiswa, Ayam Geprek Lili hadir menyajikan ayam krispi dengan sambal
          korek otentik yang diulek dadakan. Kami percaya bahwa makanan enak
          nggak harus mahal.
        </p>
      </div>

      {/* Strengths grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {STRENGTHS.map((item) => (
          <StrengthItem key={item.title} item={item} />
        ))}
      </div>

      {/* Stats row */}
      <div className="flex flex-wrap items-center gap-6 rounded-xl border border-border bg-card p-5">
        <div className="flex flex-col">
          <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary">
            500+
          </span>
          <span className="text-xs text-muted-foreground">Pelanggan puas</span>
        </div>
        <div className="h-8 w-px bg-border" />
        <div className="flex flex-col">
          <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary">
            4.9
          </span>
          <span className="text-xs text-muted-foreground">Rating Google</span>
        </div>
        <div className="h-8 w-px bg-border" />
        <div className="flex flex-col">
          <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary">
            2+
          </span>
          <span className="text-xs text-muted-foreground">Tahun melayani</span>
        </div>
      </div>
    </div>
  );
}

function MapPlaceholder() {
  return (
    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-muted/60">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" aria-hidden="true">
          <defs>
            <pattern
              id="map-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-border"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#map-grid)" />
        </svg>
      </div>

      {/* Decorative roads */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-[20%] top-0 h-full w-px bg-primary/40" />
        <div className="absolute left-[60%] top-0 h-full w-px bg-primary/40" />
        <div className="absolute left-0 top-[30%] h-px w-full bg-primary/40" />
        <div className="absolute left-0 top-[70%] h-px w-full bg-primary/40" />
        <div className="absolute left-[10%] top-[10%] h-px w-[35%] rotate-45 bg-accent/30" />
      </div>

      {/* Pulse ring behind pin */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="h-24 w-24 animate-ping rounded-full bg-primary/10"
          style={{ animationDuration: "2.5s" }}
        />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-16 w-16 rounded-full bg-primary/15" />
      </div>

      {/* Center pin */}
      <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30">
          <MapPin className="h-6 w-6 text-primary-foreground" />
        </div>
        <div className="h-3 w-3 -translate-y-1 rotate-45 bg-primary" />
      </div>

      {/* Label overlay */}
      <div className="absolute bottom-3 left-3 right-3 z-10">
        <a
          href="https://maps.google.com/?q=UIN+Raden+Fatah+Palembang"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg bg-card/90 px-4 py-2.5 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm transition-colors hover:bg-card"
        >
          <Navigation className="h-4 w-4 text-primary" />
          Buka di Google Maps
        </a>
      </div>
    </div>
  );
}

function LocationColumn() {
  const waMessage = encodeURIComponent(
    "Halo Kak, saya mau tanya lokasi Ayam Geprek Lili!",
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary w-fit">
          <MapPin className="h-3.5 w-3.5" />
          Lokasi
        </span>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Kunjungi <span className="text-primary">Kami</span>
        </h2>
      </div>

      {/* Location card */}
      <div className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6">
        {/* Address */}
        <div className="flex items-start gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Alamat
            </p>
            <p className="text-sm font-medium leading-relaxed text-foreground">
              Jl. Prof. K.H. Zainal Abidin Fikri, dekat kampus UIN Raden Fatah,
              Palembang, Sumatera Selatan
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border" />

        {/* Operating hours */}
        <div className="flex items-start gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/20">
            <Clock className="h-5 w-5 text-accent" />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Jam Operasional
            </p>
            <div className="flex flex-col gap-1.5">
              {OPERATING_HOURS.map((slot) => (
                <div
                  key={slot.day}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-muted-foreground">{slot.day}</span>
                  <span className="font-medium text-foreground">
                    {slot.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border" />

        {/* Phone / WhatsApp */}
        <div className="flex items-start gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Telepon / WhatsApp
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              +62 812-3456-7890
            </a>
          </div>
        </div>
      </div>

      {/* Map placeholder */}
      <MapPlaceholder />

      {/* Direction CTA */}
      <Button
        className="gap-2 rounded-full bg-primary px-6 text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
        asChild
      >
        <a
          href="https://maps.google.com/?q=UIN+Raden+Fatah+Palembang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Navigation className="h-4 w-4" />
          Petunjuk Arah ke Sini
        </a>
      </Button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function AboutLocationSection() {
  return (
    <section id="tentang" className="relative overflow-hidden bg-background">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-secondary/8 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: About */}
          <AboutColumn />

          {/* Right: Location */}
          <LocationColumn />
        </div>
      </div>
    </section>
  );
}
