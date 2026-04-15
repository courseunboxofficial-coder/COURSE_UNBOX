"use client";

import React from "react";
import { useCheckout } from "@/context/CheckoutContext";

/* ─── Tool Data ────────────────────────────────────────────────────── */
const ROW_ONE = [
  {
    name: "Google Ads",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/1280px-Google_Ads_logo.svg.png",
    color: "#4285F4",
  },
  {
    name: "Meta Ads",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png",
    color: "#0082FB",
  },
  {
    name: "Semrush",
    logo: "data:image/png;base64,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",
    color: "#FF6028",
  },
  {
    name: "ChatGPT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/500px-ChatGPT-Logo.svg.png",
    color: "#10A37F",
  },
  {
    name: "Canva",
    logo: "https://1000logos.net/wp-content/uploads/2023/02/Canva-logo.png",
    color: "#7D2AE8",
  },
  {
    name: "HubSpot",
    logo: "https://1000logos.net/wp-content/uploads/2022/12/HubSpot-Logo.png",
    color: "#FF7A59",
  },
  {
    name: "Moz",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SvaQIIIAOS-kXrAVGev-hU72Nql94d8A_Q&s",
    color: "#00A4CA",
  },
  {
    name: "Ahrefs",
    logo: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_a5797c0c8d2c8744d3eb2f9af9caf0dc/ahrefs.png",
    color: "#FF8C00",
  },
  {
    name: "WordPress",
    logo: "https://cdn-icons-png.flaticon.com/512/0/583.png",
    color: "#21759B",
  },
  {
    name: "Mailchimp",
    logo: "https://www.clipartmax.com/png/middle/417-4171978_mailchimp-logo-png.png",
    color: "#FFE01B",
  },
];

const ROW_TWO = [
  {
    name: "Google Analytics",
    logo: "https://www.vhv.rs/dpng/d/445-4458609_google-analytics-logo-hd-png-download.png",
    color: "#E37400",
  },
  {
    name: "Yoast SEO",
    logo: "https://www.clipartmax.com/png/middle/238-2383697_gold-yoast-seo-plugin-logo.png",
    color: "#A4286A",
  },
  {
    name: "Shopify",
    logo: "https://e7.pngegg.com/pngimages/228/200/png-clipart-shopify-computer-icons-e-commerce-sales-inventory-management-software-marketing-logo-packaging-and-labeling-thumbnail.png",
    color: "#96BF48",
  },
  {
    name: "Copy.ai",
    logo: "https://vectorseek.com/wp-content/uploads/2025/07/copy-AI-Logo-PNG-SVG-Vector.png",
    color: "#6C47FF",
  },
  {
    name: "Jasper AI",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73i6NN1_SmdTiGFmDJvmisz4eygirvcC8Ow&s",
    color: "#F87315",
  },
  {
    name: "Ubersuggest",
    logo: "https://fahimai.com/wp-content/uploads/2025/06/Ubersuggest-CTA.png",
    color: "#EF4444",
  },
  {
    name: "Google Search Console",
    logo: "https://e7.pngegg.com/pngimages/902/896/png-clipart-google-logo-product-sans-business-google-search-console-text-logo-thumbnail.png",
    color: "#1A73E8",
  },
  {
    name: "InVideo",
    logo: "https://img.icons8.com/fluent/1200/invideo-ai.jpg",
    color: "#7C3AED",
  },
  {
    name: "Typeform",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL8wYt384W_nO63AtAUB5mfzQcttGc_JxfOg&s",
    color: "#262627",
  },
  {
    name: "Google Trends",
    logo: "https://image.similarpng.com/file/similarpng/very-thumbnail/2020/06/Logo-google-trends-royalty-free-PNG.png",
    color: "#4285F4",
  },
];

/* ─── Single Marquee Row ───────────────────────────────────────────── */
interface MarqueeRowProps {
  tools: typeof ROW_ONE;
  direction: "left" | "right";
}

function MarqueeRow({ tools, direction }: MarqueeRowProps) {
  const animClass =
    direction === "left"
      ? "animate-marquee-left"
      : "animate-marquee-right";

  // Triplicate for seamless loop
  const repeated = [...tools, ...tools, ...tools];

  return (
    <div className="overflow-hidden w-full tools-scroll-mask">
      <div className={`flex gap-4 w-max ${animClass}`}>
        {repeated.map((tool, idx) => (
          <div
            key={idx}
            className="tool-chip flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default select-none shrink-0"
          >
            <img
              src={tool.logo}
              alt={tool.name}
              className="h-6 md:h-7 w-auto object-contain max-w-[80px]"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <span className="text-sm md:text-base font-semibold text-gray-700 whitespace-nowrap font-headline">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Component ───────────────────────────────────────────────── */
export default function ToolsShowcase() {
  const { openEnrollment } = useCheckout();

  return (
    <section
      id="tools-showcase"
      className="tools-showcase-section w-full overflow-hidden relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex flex-col justify-center"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] h-full"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center pt-8 pb-6 md:pt-10 md:pb-8 px-4">
        <span className="inline-block text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] text-secondary-fixed mb-2 md:mb-3 font-label">
          Industrial Arsenal
        </span>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white font-headline leading-tight">
          Master{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            20+ AI-Powered Tools
          </span>{" "}
          That Run the Digital World
        </h2>
        <p className="mt-2 text-xs md:text-sm text-slate-400 font-body max-w-xl mx-auto">
          Learn the exact tools used by top marketers, content creators, and
          growth strategists worldwide.
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="relative z-10 flex flex-col gap-3 md:gap-4 pb-5 md:pb-6">
        <MarqueeRow tools={ROW_ONE} direction="left" />
        <MarqueeRow tools={ROW_TWO} direction="right" />
      </div>

      {/* CTA Button */}
      <div className="relative z-10 flex justify-center pb-16 md:pb-15 pt-2">
        <button
          onClick={openEnrollment}
          className="group animate-btn-tilt inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-secondary-fixed-dim text-primary font-headline font-bold text-sm md:text-base border-2 border-secondary-fixed-dim shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all duration-300 ease-out hover:bg-secondary-fixed hover:border-secondary-fixed hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:-translate-y-0.5 active:translate-y-0"
        >
          <span
            className="material-symbols-outlined text-base transition-transform duration-300 group-hover:scale-110 "
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            calendar_month
          </span>
          Book a Demo Class
        </button>
      </div>
    </section>
  );
}
