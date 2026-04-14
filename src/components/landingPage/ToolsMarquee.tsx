"use client";

import React from 'react';

const TOOLS = [
  { name: 'Google Ads', domain: 'google.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/1280px-Google_Ads_logo.svg.png' },
  { name: 'Meta Ads', domain: 'meta.com', logo: 'https://thewemark.com/wp-content/uploads/2024/03/metaadsmonthly-services.png' },
  { name: 'AdRoll', domain: 'adroll.com', logo: 'https://cdn-public.softwarereviews.com/production/logos/offerings/3428/original/Adroll_logo.png?1711130303' },
  { name: 'Google Trends', domain: 'trends.google.com', logo: 'https://www.insightplatforms.com/wp-content/uploads/2021/03/Google-Trends-Logo-Square-Insight-Platforms.png' },
  { name: 'Semrush', domain: 'semrush.com', logo: 'https://1000logos.net/wp-content/uploads/2024/08/SEMrush-Logo.png' },
  { name: 'Canva', domain: 'canva.com', logo: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxo4K81Ei7WzcnqEk8W.MgwZKGOGyylNO5Zmpypx72dKW30JQijPB.R5zwcpxtBwH3OJlEQGtDjjqpeLMKnjHhi8-&format=source' },
  { name: 'ChatGPT', domain: 'openai.com', logo: 'https://store-images.s-microsoft.com/image/apps.14785.14423064005243201.42399137-369b-40bb-b5be-ac2f079c41bf.b1d6d110-9d93-441f-ac20-2e04fd7dfe3c' },
  { name: 'Jasper AI', domain: 'jasper.ai', logo: 'https://sm.pcmag.com/pcmag_me/review/j/jasper/jasper_pknd.jpg' },
  { name: 'HubSpot', domain: 'hubspot.com', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ5J9LfNkQ0Oizqle2Ovc_64R5X7vvoMAVzQ&s' },
];

export default function ToolsMarquee() {
  return (
    <section className="py-12 bg-white/50 border-y border-outline-variant/10 overflow-hidden" id="tools">
      <div className="mb-8 text-center">
        <span className="font-label text-[10px] font-extrabold uppercase tracking-[0.2em] text-outline">Industrial Arsenal</span>
        <h2 className="font-headline text-xl font-bold mt-2 text-on-surface">Tools You Will Master</h2>
      </div>
      <div className="relative flex scroll-mask">
        <div className="flex gap-16 animate-scroll whitespace-nowrap items-center py-4">
          {[...TOOLS, ...TOOLS].map((tool, idx) => (
            <div key={idx} className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              <img
                src={tool.logo}
                alt={tool.name}
                className="h-8 object-contain"
              />
              <span className="font-headline font-bold text-on-surface-variant">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
