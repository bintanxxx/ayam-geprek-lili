import { Flame, MessageCircle, MapPin, Clock, Instagram } from "lucide-react";

const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Menu", href: "#menu" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Lokasi", href: "#lokasi" },
];

const WA_NUMBER = "62812990414208";
const WA_MESSAGE = encodeURIComponent(
  "Halo Kak, saya mau pesan Ayam Geprek Lili!",
);

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.16_0.015_30)] text-[oklch(0.88_0.005_85)]">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-5">
            <a href="#beranda" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <Flame className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-[oklch(0.98_0.005_85)]">
                Ayam Geprek <span className="text-primary">Lili</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-[oklch(0.62_0.01_30)]">
              Pilihan utama mahasiswa UIN Raden Fatah untuk ayam geprek pedas,
              krispi, dan bersahabat di kantong.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[oklch(0.22_0.02_30)] px-3 py-1 text-xs font-medium text-primary">
                <Clock className="h-3 w-3" />
                Buka 10:00 - 21:00
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-widest text-[oklch(0.98_0.005_85)]">
              Tautan Cepat
            </h3>
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigasi">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-[oklch(0.62_0.01_30)] transition-colors duration-200 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="flex flex-col gap-5">
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-widest text-[oklch(0.98_0.005_85)]">
              Hubungi Kami
            </h3>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm text-[oklch(0.62_0.01_30)] transition-colors duration-200 hover:text-primary"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.22_0.02_30)] transition-colors group-hover:bg-primary/15">
                <MessageCircle className="h-4 w-4 text-primary" />
              </span>
              <span>
                <span className="block text-xs text-[oklch(0.50_0.01_30)]">
                  WhatsApp
                </span>
                +62 812-9041-4208
              </span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3 text-sm text-[oklch(0.62_0.01_30)]">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.22_0.02_30)]">
                <MapPin className="h-4 w-4 text-primary" />
              </span>
              <span>
                <span className="block text-xs text-[oklch(0.50_0.01_30)]">
                  Alamat
                </span>
                Jl. Prof. K.H.Z. Abidin Fikri, Palembang
              </span>
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-3 pt-1">
              <p className="text-xs font-medium uppercase tracking-wider text-[oklch(0.50_0.01_30)]">
                Ikuti Kami
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="https://instagram.com/ayamgepreklili"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Ayam Geprek Lili"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[oklch(0.22_0.02_30)] text-[oklch(0.62_0.01_30)] transition-all duration-200 hover:bg-primary/15 hover:text-primary"
                >
                  <Instagram className="h-[18px] w-[18px]" />
                </a>
                <a
                  href="https://tiktok.com/@ayamgepreklili"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok Ayam Geprek Lili"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[oklch(0.22_0.02_30)] text-[oklch(0.62_0.01_30)] transition-all duration-200 hover:bg-primary/15 hover:text-primary"
                >
                  <TikTokIcon className="h-[18px] w-[18px]" />
                </a>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Ayam Geprek Lili"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[oklch(0.22_0.02_30)] text-[oklch(0.62_0.01_30)] transition-all duration-200 hover:bg-primary/15 hover:text-primary"
                >
                  <MessageCircle className="h-[18px] w-[18px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[oklch(0.25_0.015_30)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-[oklch(0.45_0.01_30)]">
            &copy; 2026 Ayam Geprek Lili. All rights reserved.
          </p>
          <p className="text-xs text-[oklch(0.45_0.01_30)]">
            Dibuat dengan <Flame className="inline h-3 w-3 text-primary" /> di
            Palembang
          </p>
        </div>
      </div>
    </footer>
  );
}
