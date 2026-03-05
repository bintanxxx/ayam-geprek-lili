"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Flame,
  UtensilsCrossed,
  Coffee,
  Plus,
  ShoppingBag,
  Star,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type MenuItem = {
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
  spicy?: 1 | 2 | 3;
};

type Category = {
  key: string;
  label: string;
  icon: React.ElementType;
  items: MenuItem[];
};

const CATEGORIES: Category[] = [
  {
    key: "makanan",
    label: "Makanan",
    icon: Flame,
    items: [
      {
        name: "Geprek Original",
        description:
          "Ayam crispy digeprek dengan sambal korek khas Lili. Pedasnya nampol!",
        price: 12000,
        image: "/images/menu/geprek-original.jpg",
        badge: "Best Seller",
        spicy: 2,
      },
      {
        name: "Geprek Mozarella",
        description:
          "Geprek favorit plus lelehan keju mozarella yang bikin nagih.",
        price: 18000,
        image: "/images/menu/geprek-mozarella.jpg",
        badge: "Favorit",
        spicy: 2,
      },
      {
        name: "Geprek Sambal Matah",
        description:
          "Perpaduan ayam crispy dengan sambal matah Bali yang segar dan harum.",
        price: 15000,
        image: "/images/menu/geprek-sambal-matah.jpg",
        spicy: 1,
      },
      {
        name: "Geprek Sambal Ijo",
        description:
          "Sambal ijo khas Padang bikin geprek ini beda dan unik rasanya.",
        price: 15000,
        image: "/images/menu/geprek-sambal-ijo.jpg",
        spicy: 2,
      },
      {
        name: "Nasi Goreng Geprek",
        description:
          "Nasi goreng spesial ditoppin ayam geprek dan sambal pilihan.",
        price: 17000,
        image: "/images/menu/nasi-goreng-geprek.jpg",
        badge: "New",
        spicy: 2,
      },
      {
        name: "Mie Geprek",
        description:
          "Mie goreng pedas dengan topping ayam geprek crispy di atasnya.",
        price: 16000,
        image: "/images/menu/mie-geprek.jpg",
        spicy: 3,
      },
    ],
  },
  {
    key: "minuman",
    label: "Minuman",
    icon: Coffee,
    items: [
      {
        name: "Es Teh Jumbo",
        description: "Teh manis dingin porsi jumbo, penawar pedas paling pas.",
        price: 5000,
        image: "/images/menu/es-teh-jumbo.jpg",
        badge: "Best Seller",
      },
      {
        name: "Es Jeruk Segar",
        description: "Jeruk peras asli dengan es batu, segar dan menyejukkan.",
        price: 7000,
        image: "/images/menu/es-jeruk-segar.jpg",
      },
      {
        name: "Es Milo Dinosaur",
        description: "Milo dingin plus taburan Milo bubuk crunchy di atasnya.",
        price: 10000,
        image: "/images/menu/es-milo-dinosaur.jpg",
        badge: "Favorit",
      },
      {
        name: "Lemon Tea",
        description:
          "Perpaduan teh dan lemon yang menyegarkan, cocok buat siang hari.",
        price: 8000,
        image: "/images/menu/lemon-tea.jpg",
      },
    ],
  },
  {
    key: "ekstra",
    label: "Ekstra",
    icon: UtensilsCrossed,
    items: [
      {
        name: "Kerupuk (5 pcs)",
        description: "Kerupuk renyah pelengkap makan. Garing dan gurih.",
        price: 3000,
        image: "/images/menu/kerupuk.jpg",
      },
      {
        name: "Tahu Goreng Crispy",
        description: "Tahu goreng tepung crispy, cocok jadi teman geprek kamu.",
        price: 4000,
        image: "/images/menu/tahu-goreng.jpg",
      },
      {
        name: "Tempe Goreng",
        description: "Tempe goreng tipis renyah, gurih dan bikin kenyang.",
        price: 4000,
        image: "/images/menu/tempe-goreng.jpg",
      },
      {
        name: "Telur Ceplok",
        description: "Telur mata sapi, tambahan protein biar makin mantap.",
        price: 4000,
        image: "/images/menu/telur-ceplok.jpg",
      },
    ],
  },
];

const WA_NUMBER = "6281234567890";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
}

function SpicyLevel({ level }: { level: 1 | 2 | 3 }) {
  return (
    <span
      className="flex items-center gap-0.5"
      aria-label={`Level pedas ${level}`}
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <Flame
          key={i}
          className={`h-3 w-3 ${
            i < level ? "fill-primary text-primary" : "text-border"
          }`}
        />
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function SectionHeader() {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Badge className="gap-1.5 border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
        <UtensilsCrossed className="h-3.5 w-3.5" />
        Menu Kami
      </Badge>
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
        Pilihan Menu <span className="text-primary">Bikin Nagih</span>
      </h2>
      <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
        Dari geprek original sampai geprek mozarella, semua pakai ayam segar dan
        sambal racikan sendiri. Harga bersahabat, rasa juara!
      </p>
    </div>
  );
}

function TabButton({
  category,
  isActive,
  onClick,
}: {
  category: Category;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = category.icon;
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
        isActive
          ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
          : "bg-card text-muted-foreground border border-border hover:border-primary/30 hover:text-primary"
      }`}
      role="tab"
      aria-selected={isActive}
    >
      <Icon className="h-4 w-4" />
      {category.label}
    </button>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  const waMessage = encodeURIComponent(
    `Halo Kak, saya mau pesan *${item.name}* dari Ayam Geprek Lili!`,
  );

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Badge overlay */}
        {item.badge && (
          <div className="absolute left-3 top-3 z-10">
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold shadow-sm ${
                item.badge === "Best Seller"
                  ? "bg-secondary text-secondary-foreground"
                  : item.badge === "New"
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-accent-foreground"
              }`}
            >
              {item.badge === "Best Seller" && (
                <Star className="h-3 w-3 fill-current" />
              )}
              {item.badge}
            </span>
          </div>
        )}

        {/* Quick order button overlay */}
        <div className="absolute bottom-3 right-3 z-10 translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <Button
            size="icon"
            className="h-9 w-9 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90"
            asChild
          >
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Pesan ${item.name} via WhatsApp`}
            >
              <ShoppingBag className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-card-foreground leading-tight">
            {item.name}
          </h3>
          {item.spicy && <SpicyLevel level={item.spicy} />}
        </div>

        <p className="flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between gap-2 pt-1">
          <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-primary">
            {formatRupiah(item.price)}
          </span>
          <Button
            size="sm"
            variant="outline"
            className="gap-1.5 rounded-full border-primary/30 px-3 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Plus className="h-3 w-3" />
              Pesan
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

function MenuGrid({ items }: { items: MenuItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <MenuCard key={item.name} item={item} />
      ))}
    </div>
  );
}

function BottomCta() {
  const waMessage = encodeURIComponent(
    "Halo Kak, saya mau tanya-tanya menu Ayam Geprek Lili!",
  );

  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center sm:flex-row sm:justify-between sm:text-left md:p-8">
      <div className="flex flex-col gap-1">
        <p className="font-[family-name:var(--font-heading)] text-lg font-bold text-card-foreground">
          Bingung pilih menu?
        </p>
        <p className="text-sm text-muted-foreground">
          Tanya langsung via WhatsApp, kita bantu pilihin yang paling pas!
        </p>
      </div>
      <Button
        className="gap-2 rounded-full bg-primary px-6 text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
        asChild
      >
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-4 w-4" />
          Chat WhatsApp
        </a>
      </Button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].key);
  const activeCategory = CATEGORIES.find((c) => c.key === activeTab)!;

  return (
    <section id="menu" className="relative overflow-hidden bg-muted/40">
      {/* Subtle decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-48 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -left-48 bottom-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="flex flex-col gap-10">
          {/* Section header */}
          <SectionHeader />

          {/* Tab navigation */}
          <div className="flex justify-center">
            <div
              className="flex flex-wrap items-center justify-center gap-2"
              role="tablist"
              aria-label="Kategori menu"
            >
              {CATEGORIES.map((cat) => (
                <TabButton
                  key={cat.key}
                  category={cat}
                  isActive={activeTab === cat.key}
                  onClick={() => setActiveTab(cat.key)}
                />
              ))}
            </div>
          </div>

          {/* Menu grid */}
          <div role="tabpanel" aria-label={`Menu ${activeCategory.label}`}>
            <MenuGrid items={activeCategory.items} />
          </div>

          {/* Bottom CTA */}
          <BottomCta />
        </div>
      </div>
    </section>
  );
}
