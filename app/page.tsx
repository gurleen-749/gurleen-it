"use client";

import { useState } from "react";

const projects = [
  {
    title: "Ena Balian",
    image: "/gallery/ena-1.jpg",
    x: "18%",
    y: "25%",
    slug: "ena-balian",
  },
  {
    title: "Packaging",
    image: "/projects/project2.jpg",
    x: "38%",
    y: "32%",
    slug: "packaging",
  },
  {
    title: "Editorial",
    image: "/projects/project3.jpg",
    x: "62%",
    y: "18%",
    slug: "editorial",
  },
  {
    title: "Campaign",
    image: "/projects/project4.jpg",
    x: "78%",
    y: "48%",
    slug: "campaign",
  },
  {
    title: "Typography",
    image: "/projects/project5.jpg",
    x: "31%",
    y: "55%",
    slug: "typography",
  },
  {
    title: "Fashion",
    image: "/projects/project6.jpg",
    x: "28%",
    y: "68%",
    slug: "fashion",
  },
  {
    title: "Identity",
    image: "/projects/project7.jpg",
    x: "52%",
    y: "58%",
    slug: "identity",
  },
  {
    title: "GMuseum",
    image: "/gallery/gmuseum.jpg",
    x: "72%",
    y: "70%",
    slug: "gmuseum",
  },
  {
    title: "sspa",
    image: "/gallery/sspa.jpg",
    x: "65%",
    y: "25%",
    slug: "sspa",
  },
  {
    title: "SEASONAL EDITS",
    image: "/gallery/se-1.jpg",
    x: "28%",
    y: "38%",
    slug: "se",
  },
  {
    title: "Weather",
    image: "/gallery/weather.jpg",
    x: "42%",
    y: "15%",
    slug: "weather",
  },
  {
    title: "Gyfia",
    image: "/gallery/gyfia-1.jpg",
    x: "45%",
    y: "51%",
    slug: "gyfia",
  },
  {
    title: "Digital",
    image: "/projects/project13.jpg",
    x: "65%",
    y: "50%",
    slug: "digital",
  },
];

const polimiProjects = [
  {
    title: "Sebastian",
    cover: "/polimi/sebastian.png",
    pdf: "/pdfs/sebastian.pdf",
  },
  {
    title: "love",
    cover: "/polimi/love.png",
    pdf: "/pdfs/love.pdf",
  },
  {
    title: "row",
    cover: "/polimi/row.png",
    pdf: "/pdfs/row.pdf",
  },
  {
    title: "byredo",
    cover: "/polimi/byredo.png",
    pdf: "/pdfs/byredo.pdf",
  },
  {
    title: "echo",
    cover: "/polimi/echo.png",
    pdf: "/pdfs/echo.pdf",
  },
   {
    title: "cartier",
    cover: "/polimi/cartier.png",
    pdf: "/pdfs/cartier.pdf",
  },
  {
    title: "rahul-mishra",
    cover: "/polimi/rahul-mishra.png",
    pdf: "/pdfs/rahul-mishra.pdf",
  },
  {
    title: "miista",
    cover: "/polimi/miista.png",
    pdf: "/pdfs/miista.pdf",
  },
  {
    title: "rubelli",
    cover: "/polimi/rubelli.png",
    pdf: "/pdfs/rubelli.pdf",
  },
  {
    title: "ecoalf",
    cover: "/polimi/ecoalf.png",
    pdf: "/pdfs/ecoalf.pdf",
  },
];

const projectData = {
"ena-balian": {
  title: "Ena Balian",
  subtitle: "Brand Identity",
  description: "This multi-disciplinary creative portfolio showcases the sophisticated branding, art direction, and visual storytelling of Ena Balian Creation. Spanning diverse industries from sustainable skincare packaging and editorial print layout to sleek digital social networks, the project demonstrates a cohesive, minimalist aesthetic rooted in intentional design. It seamlessly bridges commercial identity with raw artistic expression, integrating high-end macro photography, tactile print elements, and intimate film cinematography. Grounded in a philosophy of quiet reflection, the collection captures the subtle, elegant space between memory and possibility, resulting in a deeply resonant, premium brand experience.",

  image: "/gallery/ena-1.jpg",

  preview: "/gallery/ena-1.jpg",

  gallery: [
    "/gallery/ena-2.jpg",
    "/gallery/ena-3.jpg",
    "/gallery/ena-4.jpg",
    "/gallery/ena-5.jpg",
    "/gallery/ena-6.jpg",
  ],

  details: [
    "Graphic Design",
    "Brand Identity",
    "UI Design",
  ],

  credits: [
    "Creative Direction: Gurleen Kaur",
    "Design: Gurleen Kaur",
  ],
},

  packaging: {
    title: "Packaging",
    subtitle: "Client Name",
    description: "Long project description goes here.",
    image: "/gallery/packaging.jpg",

    details: [
      "Packaging Design",
      "Print Production",
      "Art Direction",
    ],

    preview: "/gallery/cpc-1.jpg",

    credits: [
      "Design: Gurleen Kaur",
      "Packaging: Client Name",
    ],

    gallery: [
      "/gallery/cpc-2.jpg",
    ],
  },

  editorial: {
    title: "Editorial",
    subtitle: "Magazine Name",
    description: "Long project description goes here.",
    image: "/gallery/editorial.jpg",

    details: [
      "Editorial Design",
      "Magazine Layout",
      "Print",
    ],

    preview: "/gallery/editorial-cover.jpg",

    credits: [
      "Editorial Design: Gurleen Kaur",
      "Photography: Client",
    ],

    gallery: [
      "/gallery/editorial-1.jpg",
      "/gallery/editorial-2.jpg",
      "/gallery/editorial-3.jpg",
    ],
  },

  campaign: {
    title: "Campaign",
    subtitle: "Campaign Project",
    description: "Long project description goes here.",
    image: "/gallery/campaign.jpg",

    details: [
      "Campaign Design",
      "Advertising",
      "Art Direction",
    ],

    preview: "/gallery/campaign-cover.jpg",

    credits: [
      "Art Direction: Gurleen Kaur",
      "Design: Gurleen Kaur",
    ],

    gallery: [
      "/gallery/campaign-1.jpg",
      "/gallery/campaign-2.jpg",
      "/gallery/campaign-3.jpg",
    ],
  },

  typography: {
    title: "Typography",
    subtitle: "Typography Exploration",
    description: "Long project description goes here.",
    image: "/gallery/typography.jpg",

    details: [
      "Typography",
      "Experimental Design",
      "Print",
    ],

    preview: "/gallery/typography-cover.jpg",

    credits: [
      "Typography: Gurleen Kaur",
    ],

    gallery: [
      "/gallery/typography-1.jpg",
      "/gallery/typography-2.jpg",
      "/gallery/typography-3.jpg",
    ],
  },

  fashion: {
    title: "Fashion",
    subtitle: "Fashion Project",
    description: "Long project description goes here.",
    image: "/gallery/fashion.jpg",

    details: [
      "Fashion Design",
      "Art Direction",
      "Photography",
    ],

    preview: "/gallery/fashion-cover.jpg",

    credits: [
      "Creative Direction: Gurleen Kaur",
      "Photography: Team",
    ],

    gallery: [
      "/gallery/fashion-1.jpg",
      "/gallery/fashion-2.jpg",
      "/gallery/fashion-3.jpg",
    ],
  },

  identity: {
    title: "Identity",
    subtitle: "Visual Identity System",
    description: "Long project description goes here.",
    image: "/gallery/identity.jpg",

    details: [
      "Visual Identity",
      "Brand Strategy",
      "Design System",
    ],

    preview: "/gallery/identity-cover.jpg",

    credits: [
      "Identity Design: Gurleen Kaur",
    ],

    gallery: [
      "/gallery/identity-1.jpg",
      "/gallery/identity-2.jpg",
      "/gallery/identity-3.jpg",
    ],
  },

  gmuseum: {
    title: "GMuseum",
    subtitle: "Print Design",
    description: "Long project description goes here.",
    image: "/gallery/gmuseum.jpg",

    details: [
      "Print Design",
      "Editorial",
      "Production",
    ],

    preview: "/gallery/gmuseum.jpg",

    credits: [
      "Print Design: Gurleen Kaur",
    ],

    gallery: [
      "/gallery/gmuseum-0.jpg",
      "/gallery/gmuseum-1.jpg",
      "/gallery/gmuseum-2.jpg",
      "/gallery/gmuseum-3.jpg",
      "/gallery/gmuseum-4.jpg",
      "/gallery/gmuseum-5.jpg",
      "/gallery/gmuseum-6.jpg",
      "/gallery/gmuseum-7.jpg",
      "/gallery/gmuseum-8.jpg",
    ],
  },

  sspa: {
    title: "Scandinavian School - Photographic Arts",
    subtitle: "Informative eBanner",
    description: "Scandinavian School - Photographic Arts presents a curated collection of contemporary visual narratives, each exploring a distinct perspective. Designed with a clean Swiss-inspired layout, every page balances generous white space, refined typography, and striking imagery to create a timeless publication aesthetic. The consistent grid system allows each photograph to remain the focal point while accompanying descriptions provide context and artistic intent. Together, the series celebrates the diversity of photographic expression, highlighting themes of identity, and spatial exploration through a cohesive visual language that is both minimal, sophisticated, and thoughtfully composed.",
    image: "/gallery/sspa.jpg",

    details: [
      "Prototyping",
      "Design",
    ],

    preview: "/gallery/sspa.jpg",

    credits: [
      "Design: Gurleen Kaur",
    ],

    gallery: [
      "/gallery/sspa-1.jpg",
      "/gallery/sspa-2.jpg",
      "/gallery/sspa-3.jpg",
      "/gallery/sspa-4.jpg",
      "/gallery/sspa-5.jpg",
    ],
  },

  se: {
    title: "Seasonal Edits",
    subtitle: "Socials | Website",
    description: "Inspired by the refined language of luxury editorial design, this curated collection celebrates timeless objects through a minimalist visual narrative. Each piece is presented with generous negative space, elegant typography, and a muted colour palette that allows the product to become the focal point. From sculptural accessories and handcrafted homeware to fashion essentials and lifestyle objects, every selection reflects a balance of craftsmanship, functionality, and understated sophistication. The layout evokes the feeling of a premium printed catalogue, encouraging slow exploration and appreciation of detail. The result is a modern editorial experience that transforms everyday products into collectible design statements with lasting aesthetic value.",
    image: "/gallery/se-1.jpg",

    details: [
      "Graphics",
      "Editing",
    ],

    preview: "/gallery/se-1.jpg",

    credits: [
      "Design: Gurleen Kaur",
    ],

    gallery: [
      "/gallery/se-2.jpg",
      "/gallery/se-3.jpg",
      "/gallery/se-4.jpg",
      "/gallery/se-5.jpg",
      "/gallery/se-6.jpg",
      "/gallery/se-web.jpg",
    ],
  },

  weather: {
    title: "Weather",
    subtitle: "Poster Series",
    description: "Long project description goes here.",
    image: "/gallery/weather.jpg",

    details: [
      "Poster Design",
      "Typography",
      "Print",
    ],

    preview: "/gallery/weather.jpg",

    credits: [
      "Poster Design: Gurleen Kaur",
    ],

    gallery: [
      "/gallery/weather-1.jpg",
      "/gallery/weather-2.jpg",
      "/gallery/weather-3.jpg",
      "/gallery/weather-4.jpg",
      "/gallery/weather-5.jpg",
      "/gallery/weather-6.jpg",
    ],
  },

  "gyfia": {
    title: "Gyfia",
    subtitle: "Web Design",
    description: "Gyfia is a luxury skincare e-commerce website inspired by the harmony of Korean beauty traditions and modern scientific innovation. The design embraces a calm, editorial aesthetic with generous white space, refined typography, and warm, natural imagery that reflects purity and simplicity. Every interaction is intentionally minimal, allowing the products and their ingredients to become the visual focus. The website showcases a curated collection of vegan skincare through immersive product photography, thoughtful storytelling, and an intuitive shopping experience. Built to evoke trust, sophistication, and timeless elegance, Gyfia creates a digital environment where wellness, sustainability, and premium skincare seamlessly come together for the modern conscious consumer.",
    image: "/gallery/gyfia-1.jpg",

    details: [
      "Creative Direction",
      "Visual Development",
      "Campaign Strategy",
    ],

    preview: "/gallery/gyfia-2.jpg",

    credits: [
      "Art Direction: Gurleen Kaur",
    ],

    gallery: [
      "/gallery/gyfia-3.jpg",
      "/gallery/gyfia-4.jpg",
      "/gallery/gyfia-5.jpg",
    ],
  },

  digital: {
    title: "Digital",
    subtitle: "Digital Design",
    description: "Long project description goes here.",
    image: "/gallery/digital.jpg",

    details: [
      "UI Design",
      "Digital Campaign",
      "Web Design",
    ],

    preview: "/gallery/digital-cover.jpg",

    credits: [
      "Digital Design: Gurleen Kaur",
    ],

    gallery: [
      "/gallery/digital-1.jpg",
      "/gallery/digital-2.jpg",
      "/gallery/digital-3.jpg",
    ],
  },
};

export default function Home() {
  const [openWindows, setOpenWindows] = useState<
  Array<{
    id: string;
    x: number;
    y: number;
    dragging?: boolean;
  }>
>([]);
const [notesTab, setNotesTab] = useState("about");
const [binEmpty, setBinEmpty] = useState(false);
const bringToFront = (index: number) => {
  setOpenWindows((prev) => {
    const selected = prev[index];

    return [
      ...prev.filter((_, i) => i !== index),
      selected,
    ];
  });
};
const startDrag = (
  index: number,
  e: React.MouseEvent<HTMLDivElement>
) => {
  e.preventDefault();

  const startX = e.clientX;
  const startY = e.clientY;

  const { x, y } = openWindows[index];

  const handleMove = (moveEvent: MouseEvent) => {
    setOpenWindows((prev) =>
      prev.map((w, i) =>
        i === index
          ? {
              ...w,
              x: x + (moveEvent.clientX - startX),
              y: y + (moveEvent.clientY - startY),
            }
          : w
      )
    );
  };

  const handleUp = () => {
    document.removeEventListener("mousemove", handleMove);
    document.removeEventListener("mouseup", handleUp);
  };

  document.addEventListener("mousemove", handleMove);
  document.addEventListener("mouseup", handleUp);
};

  const openWindow = (id: string) => {
  const isMobile = window.innerWidth < 768;

  const positions = {
    indesign: { x: 610, y: 213 },
    photoshop: { x: 580, y: 265 },
    illustrator: { x: 650, y: 330 },
    polimi: { x: 500, y: 150},
    error: { x: 830, y: 255 },
    notes: { x: 450, y: 100 },
    photos: { x: 500, y: 120 },
    bin: { x: 600, y: 180 },

    "ena-balian": { x: 380, y: 90 },
    packaging: { x: 470, y: 130 },
    editorial: { x: 560, y: 80 },
    campaign: { x: 650, y: 140 },
    typography: { x: 420, y: 200 },
    fashion: { x: 340, y: 260 },
    "weather": { x: 530, y: 220 },
    "print": { x: 670, y: 250 },
    "sspa": { x: 600, y: 110 },
    "gmuseum": { x: 320, y: 150 },
    "se": { x: 500, y: 60 },
    "gyfia": { x: 450, y: 180 },
    digital: { x: 620, y: 190 },
  };

  setOpenWindows((prev) => [
    ...prev,
    {
      id,
      ...(isMobile
        ? { x: 15, y: 80 }
        : positions[id as keyof typeof positions]),
    },
  ]);
};

  const appData = {
    indesign: {
      title: "Adobe InDesign",
      icon: "/icons/id.png",
      message:
        "Cleaned up your footage folder? Too bad there's no way to connect all those Photoshop layers and videos!",
    },

    photoshop: {
      title: "Adobe Photoshop",
      icon: "/icons/ps.png",
      message:
        "Congratulations. You merged 87 layers and now nobody can edit anything.",
    },

    illustrator: {
      title: "Adobe Illustrator",
      icon: "/icons/ai.png",
      message:
        "This file contains 12,347 anchor points. Good luck finding the right one.",
    },

    polimi: {
      title: "Polimi",
      icon: "/icons/polimi.png",
      message:
        "",
    },

    error: {
      title: "System Error",
      icon: "/icons/error.png",
      message:
        "Unexpected inspiration detected. Please restart your creative process.",
    },

    notes: {
     title: "Information about: Gurleen Kaur",
     icon: "/icons/notes.png",
     message: "",
},
  };
  

  return (
    <main className="relative h-screen overflow-hidden bg-white">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-white/20" />

      {/* PROJECT ICONS */}
<div className="relative z-20 w-full h-full">
  {projects.map((project) => (
    <button
      key={project.slug}
      onClick={() => openWindow(project.slug)}
      className="absolute flex flex-col items-center gap-2"
      style={{
        left: project.x,
        top: project.y,
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="
          w-[58px]
          h-[58px]
          object-cover
          shadow-lg
          transition
          hover:scale-110
        "
      />

      <span
        className="
          text-[11px]
          font-semibold
          text-white
          drop-shadow-lg
          uppercase
          tracking-[0.05em]
          text-center
        "
      >
        {project.title}
      </span>
    </button>
  ))}
</div>

      {/* DOCK */}
    <footer
  className="
    fixed
    left-1/2
    -translate-x-1/2
    z-50
    w-[31vw]
    min-w-[420px]
    max-w-[520px]
  "
     
     style={{
     bottom: "calc(env(safe-area-inset-bottom) + 20px)",
    }}
>
  <div className="flex justify-around items-center px-0 py-2 rounded-2xl bg-white/13 backdrop-blur-xl border border-white/10">

          {/* InDesign */}
          <button
            onClick={() => openWindow("indesign")}
            className="relative group cursor-pointer"
          >
            <img src="/icons/id.png" alt="" className="w-9 h-9" />

            <div className="absolute bottom-[130%] left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-[#9a9a9a] text-white text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
              InDesign
            </div>
          </button>

          {/* Photoshop */}
          <button
            onClick={() => openWindow("photoshop")}
            className="relative group cursor-pointer"
          >
            <img src="/icons/ps.png" alt="" className="w-9 h-9" />

            <div className="absolute bottom-[130%] left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-[#9a9a9a] text-white text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
              Photoshop
            </div>
          </button>

          {/* Illustrator */}
          <button
            onClick={() => openWindow("illustrator")}
            className="relative group cursor-pointer"
          >
            <img src="/icons/ai.png" alt="" className="w-9 h-9" />

            <div className="absolute bottom-[130%] left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-[#9a9a9a] text-white text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
              Illustrator
            </div>
          </button>


          {/* Polimi */}
          
          <button
            onClick={() => openWindow("polimi")}
            className="relative group cursor-pointer"
          >
            <img src="/icons/polimi.png" alt="" className="w-9 h-9" />

            <div className="absolute bottom-[130%] left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-[#9a9a9a] text-white text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
              Polimi
            </div>
          </button>
<div className="w-px h-10 bg-white/20 self-center" />

          {/* Error */}
          <button
            onClick={() => openWindow("error")}
            className="relative group cursor-pointer"
          >
            <img src="/icons/error.png" alt="" className="w-9 h-8" />

            <div className="absolute bottom-[130%] left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-[#9a9a9a] text-white text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
              Error
            </div>
          </button>
          
          {/* Notes */}
<button
  onClick={() => openWindow("notes")}
  className="relative group cursor-pointer"
>
  <img src="/icons/notes.png" alt="" className="w-8 h-8" />

  <div className="absolute bottom-[130%] left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-[#9a9a9a] text-white text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
    Notes
  </div>
</button>
{/* Photos */}
<button
  onClick={() => openWindow("photos")}
  className="relative group cursor-pointer"
>
  <img src="/icons/photos.png" alt="" className="w-8 h-8" />

  <div className="absolute bottom-[130%] left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-[#9a9a9a] text-white text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
    Photos
  </div>
</button>
<div className="w-px h-10 bg-white/20 self-center" />
          {/* Instagram */}
<a
  href="https://instagram.com"
  target="_blank"
  rel="noopener noreferrer"
  className="relative group"
>
  <img src="/icons/Instagram.png" alt="" className="w-9 h-9" />

  <div className="absolute bottom-[130%] left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-[#9a9a9a] text-white text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
    Instagram
  </div>
</a>

{/* Mail */}
<a
  href="mailto:gurleen.it@gmail.com"
  className="relative group"
>
  <img src="/icons/mail.png" alt="" className="w-9 h-9" />

  <div className="absolute bottom-[130%] left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-[#9a9a9a] text-white text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
    Mail
  </div>
</a>

<div className="w-px h-10 bg-white/20 self-center" />

{/* Bin */}
<button
  onClick={() => openWindow("bin")}
  className="relative group w-9 h-9 flex items-center justify-center cursor-pointer"
>
  <img
    src={binEmpty ? "/icons/bin-empty.png" : "/icons/bin.png"}
    alt=""
    className="w-9 h-9"
  />

  <div className="absolute bottom-[130%] left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-[#9a9a9a] text-white text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
    Bin
  </div>
</button>

        </div>
      </footer>

      {/* POPUP */}
      {openWindows.map((window, index) => {

  if (window.id === "notes") return null;

  if (window.id === "error") {
  const apps = [
    {
      icon: "/icons/ai.png",
      name: "Adobe Illustrator",
      memory: "1.53 GB",
    },
    {
      icon: "/icons/ps.png",
      name: "Adobe Photoshop",
      memory: "13.56 GB",
    },
      {
      icon: "/icons/id.png",
      name: "Adobe InDesign",
      memory: "2.45 GB",
    },
    {
      icon: "/icons/vscode.png",
      name: "Code",
      memory: "2.38 GB",
    },
    {
      icon: "/icons/chrome.png",
      name: "Figma",
      memory: "225 MB",
    },
    {
      icon: "/icons/safari.png",
      name: "Safari",
      memory: "20.15 GB",
    },
    {
      icon: "/icons/terminal.png",
      name: "Terminal",
      memory: "1.44 GB",
    },
    {
      icon: "/icons/finder.png",
      name: "Finder",
      memory: "577 MB",
    },
  ];

  return (
    <div
      key={`${window.id}-${index}`}
      style={{ zIndex: 100 + index }}
      className="fixed inset-0 pointer-events-none"
    >
      <div
        style={{
          left: window.x,
          top: window.y,
        }}
        onMouseDown={() => bringToFront(index)}
        className="
          absolute
          w-[430px]
          h-[490px]
          bg-[#f5f5f7]
          rounded-[24px]
          shadow-1xl
          overflow-hidden
          pointer-events-auto
        "
      >
<div
  onMouseDown={(e) => startDrag(index, e)}
  className="
    h-9
    bg-[#f5f5f7]
    border-b
    border-[#d7d7d7]
    flex
    items-center
    px-5
    cursor-move
  "
>
  <button
    onClick={() =>
      setOpenWindows(prev =>
        prev.filter((_, i) => i !== index)
      )
    }
    className="w-3 h-3 rounded-full bg-[#ff5f57]" />
  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] ml-2" />
  <div className="w-3 h-3 rounded-full bg-[#28c840] ml-2" />
  <h2 className="ml-5 flex-1 text-left text-[11px] font-semibold text-[#2b2b2b]">
  Force Quit Applications
</h2>
</div>
<div className="flex px-6 pt-6 gap-7">

  <img
    src="/icons/error.png"
    alt=""
    className="w-[90px] h-[90px] object-contain"
  />

  <div>

    <h2 className="text-[17px] leading-6 font-medium text-[#2b2b2b]">
      Your system has run out of
      <br />
      application memory.
    </h2>

    <p className="mt-1 text-[12px] leading-5 text-[#444]">
      To avoid problems with your computer, quit
      <br />
       any applications you are not using.
    </p>

  </div>

</div>
<div className="px-6 pt-6">

  <div className="border border-[#d8d8d8] rounded-md bg-white">

    {apps.map((app) => (

      <div
        key={app.name}
        className="flex items-center justify-between px-3 py-1"
      >

        <div className="flex items-center gap-3">

          <img
            src={app.icon}
            className="w-5 h-5"
          />

          <span className="text-[13px]">
            {app.name}
          </span>

        </div>

        <span className="text-[13px]">
          {app.memory}
        </span>

      </div>

    ))}

  </div>

</div>
<div className="absolute bottom-7 right-7 flex gap-3">

  <button
    className="
  px-4
  h-8
  min-w-[88px]
  rounded-full
  bg-[#efefef]
  text-[13px]
  text-[#555]
  font-medium
  transition-all
  duration-150
  hover:bg-[#e4e4e4]
"
  >
    Resume
  </button>

  <button
    onClick={() =>
      setOpenWindows(prev =>
        prev.filter((_, i) => i !== index)
      )
    }
    className="
  px-4
  h-8
  min-w-[100px]
  rounded-full
  bg-[#efefef]
  text-[13px]
  text-[#555]
  font-medium
  transition-all
  duration-150
  hover:bg-[#007AFF]
  hover:text-white
"
  >
    Force Quit
  </button>

</div>
</div>
</div>
);
}

if (window.id === "photos") {
  
  return (
    <div
      key={`${window.id}-${index}`}
      style={{ zIndex: 100 + index }}
      className="fixed inset-0 pointer-events-none"
    >
      
      <div
  style={
    globalThis.window.innerWidth < 768
      ? {}
      : {
          left: window.x,
          top: window.y,
        }
  }
  onMouseDown={() => bringToFront(index)}
  className="
  absolute
  w-[700px]
  h-[520px]

  max-md:w-[92vw]
  max-md:h-[75vh]

  left-[500px]
  top-[120px]

  max-md:left-1/2
  max-md:top-1/2
  max-md:-translate-x-1/2
  max-md:-translate-y-1/2

    bg-[#f7f7f7]
    rounded-[13px]
    overflow-hidden
    shadow-xl
    pointer-events-auto
  "
>
        <div>
          
        </div>
          <div
  onMouseDown={(e) => startDrag(index, e)}
  className="
  h-8
  bg-[#ece9e6]
  border-b
  border-[#cfcfcf]
  flex
  items-center
  px-3
  gap-2
  cursor-move
  select-none
"
>
            <button
              onClick={() =>
                setOpenWindows((prev) =>
                  prev.filter((_, i) => i !== index)
                )
              }
              className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />

            <span className="ml-3 text-[11px] text-black">
  Information about: Gallery
</span>
          </div>
         <div className="flex h-[calc(100%-32px)]">
         <div className="flex-1 overflow-y-auto bg-[#f7f7f7]">
         <div className="px-4 pt-4">
         <div className="flex items-center gap-3 mb-3">

        <img
          src="/icons/photos.png"
          alt=""
          className="w-13 h-13 rounded-2xl"
        />

        <div>
          <h2 className="text-[13px] font-semibold text-black">
            Gallery
          </h2>

          <p className="text-[13px] text-black">
            Lowkey documentation
          </p>
        </div>

      </div>

      <div className="flex items-center gap-2 mb-4">

        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5 8L10 13L15 8"
            stroke="#999"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="text-[13px] font-medium">
          Preview:
        </span>

      </div>

    </div>

    <div className="px-4 pb-4">
      <img
        src="/gallery/cover.jpg"
        alt=""
        className="w-full rounded-[24px]"
      />
    </div>

  </div>

</div>
        </div>
      </div>
    );
  }
if (window.id === "polimi") {
  return (
    <div
      key={`${window.id}-${index}`}
      style={{ zIndex: 100 + index }}
      className="fixed inset-0 pointer-events-none"
    >
      <div
        style={{
          left: window.x,
          top: window.y,
        }}
        onMouseDown={() => bringToFront(index)}
        className="
          absolute
          w-[720px]
          h-[520px]
          bg-[#f8f8f8]
          rounded-[13px]
          overflow-hidden
          shadow-xl
          pointer-events-auto
        "
      >
        {/* Title Bar */}
        <div
          onMouseDown={(e) => startDrag(index, e)}
          className="
            h-8
            bg-[#ece9e6]
            border-b
            border-[#cfcfcf]
            flex
            items-center
            px-3
            gap-2
            cursor-move
          "
        >
          <button
            onClick={() =>
              setOpenWindows(prev =>
                prev.filter((_, i) => i !== index)
              )
            }
            className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]"
          />
          <div className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />

          <span className="ml-3 text-[11px]">
            Polimi
          </span>
        </div>
<div className="mt-0 pt-5">

  <img
    src="/icons/polimi.png"
    alt="Polimi"
    className="w-13 h-13 mx-auto mb-3"
  />

  <h2 className="text-1xl font-semibold text-center">
    Premium Design Management
  </h2>

  <p className="text-sm text-gray-500 text-center mt-0">
    Politecnico di Milano
  </p>

  <p className="max-w-3xl mx-auto mt-5 text-[12px] leading-5 text-gray-600 text-center">
    The following collection represents selected academic projects completed
    during my Master's in Premium Design Management at Politecnico di Milano.
    Spanning luxury branding, editorial design, visual identity, product
    communication, retail experiences and fashion, each project explores the
    relationship between strategic thinking and contemporary visual storytelling.
    Together, they reflect my approach to creating thoughtful, research-driven,
    and aesthetically refined design solutions.
  </p>

</div>
        <div className="p-6 overflow-auto h-[calc(100%-32px)]">
          {/* Put your content here */}
          <div className="grid grid-cols-5 gap-5">

  {polimiProjects.map((project) => (

    <button
      key={project.title}
      className="text-left hover:scale-105 transition"
      onClick={() => globalThis.window.open(project.pdf, "_blank")}
    >

      <img
        src={project.cover}
        className="rounded-lg"
      />

      <p className="mt-3 text-[11px] text-center">
        {project.title}
      </p>

    </button>

  ))}

</div>
        </div>
      </div>
    </div>
  );
}
  
const project =
  projectData[
    window.id as keyof typeof projectData
  ];

if (project) {
  return (
    <div
      key={`${window.id}-${index}`}
      style={{ zIndex: 100 + index }}
      className="fixed inset-0 pointer-events-none"
    >
      <div
style={{
  left: window.x,
  top: window.y,
}}
  onMouseDown={() => bringToFront(index)}
  className="
  absolute
  w-[700px]
  h-[520px]

  md:w-[700px]
  md:h-[520px]

  max-md:w-[92vw]
  max-md:h-[75vh]

  bg-[#f7f7f7]
  rounded-[13px]
  overflow-hidden
  shadow-xl
  pointer-events-auto
"
>

  <div
    onMouseDown={(e) => startDrag(index, e)}
    className="
      h-8
      bg-[#ece9e6]
      border-b
      border-[#cfcfcf]
      flex
      items-center
      px-3
      gap-2
      cursor-move
    "
  >
    <button
      onClick={() =>
        setOpenWindows((prev) =>
          prev.filter((_, i) => i !== index)
        )
      }
      className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
    <div className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]" />
    <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />

    <span className="ml-3 text-[11px] text-black">
      {project.title}
    </span>
  </div>

  <div className="overflow-y-auto h-[calc(100%-32px)]">

    <div className="px-4 pt-4 pb-6">

  {/* HEADER */}

  <div className="flex items-center gap-4 mb-4">

    <img
      src={project.image}
      alt=""
      className="w-[110px] h-[70px] object-cover rounded"
    />

    <div>
      <h2 className="text-[13px] font-semibold">
        {project.title}
      </h2>

      <p className="text-[12px]">
        {project.subtitle}
      </p>
    </div>

  </div>

  {/* TEXT BOX */}

  <div className="bg-white p-4 mb-5">

    <p className="text-[12px] text-[#7b7b7b] leading-relaxed">
      {project.description}
    </p>

  </div>

  {/* DETAILS */}

  <div className="mb-5">

    <h3 className="text-[13px] mb-2">
      ˅ Details:
    </h3>

    {project.details?.map((item) => (
      <p
        key={item}
        className="ml-8 text-[12px]"
      >
        {item}
      </p>
    ))}

  </div>

  {/* PREVIEW */}

  <div className="mb-5">

    <h3 className="text-[13px] mb-2">
      ˅ Preview:
    </h3>

    <img
      src={project.preview}
      alt=""
      className="w-full rounded-[24px]"
    />

  </div>

  {/* GALLERY */}

  <div className="grid grid-cols-1 gap-3 mb-5">

    {project.gallery?.map((image) => (
      <img
        key={image}
        src={image}
        alt=""
        className="rounded-xl"
      />
    ))}

  </div>

  {/* CREDITS */}

  <div>

    <h3 className="text-[13px] mb-2">
      ˅ Credits:
    </h3>

    {project.credits?.map((credit) => (
      <p
        key={credit}
        className="ml-8 text-[12px]"
      >
        {credit}
      </p>
    ))}

  </div>
</div>

  </div>

</div>
    </div>
  );
}

if (window.id === "bin") {
  return (
    <div
      key={`${window.id}-${index}`}
      style={{ zIndex: 100 + index }}
      className="fixed inset-0 pointer-events-none"
    >
<div
  style={{
    left: window.x,
    top: window.y,
  }}
  onMouseDown={() => bringToFront(index)}
  className="
    absolute
    w-[220px]
    bg-[#ececec]
    rounded-[24px]
    border
    border-[#cfcfcf]
    shadow-2xl
    px-5
    pt-5
    pb-4
    pointer-events-auto
  "
>
  <div
    onMouseDown={(e) => startDrag(index, e)}
    className="absolute top-0 left-0 w-full h-8 cursor-move"
  />

  <img
    src="/icons/bin.png"
    alt=""
    className="w-[48px] h-[48px] mb-5"
  />

  <h2 className="text-[12px] leading-[1.3] font-semibold text-[#2a2a2a] max-w-[210px]">
    Are you sure you want to permanently erase the items in the Bin?
  </h2>

  <p className="mt-2 text-[12px] text-[#2f2f2f]">
    You can’t undo this action.
  </p>

  <div className="mt-4 flex gap-4">
    <button
      onClick={() =>
        setOpenWindows((prev) =>
          prev.filter((_, i) => i !== index)
        )
      }
      className="
        flex-1
        h-[27px]
        rounded-full
        bg-[#dcdcdc]
        text-[12px]
        text-[#2a2a2a]
      "
    >
      Cancel
    </button>

<button
  onClick={() => {
    setBinEmpty(true);

    setOpenWindows((prev) =>
      prev.filter((_, i) => i !== index)
    );
  }}
  className="
    flex-1
    h-[27px]
    rounded-full
    bg-[#007aff]
    text-white
    text-[12px]
  "
>
  Empty Bin
</button>
  </div>
</div>
    </div>
  );
}
  return (
  <div
    key={`${window.id}-${index}`}
    style={{ zIndex: 100 + index }}
    className="fixed inset-0 pointer-events-none"
  >
    <div
  style={{
    left: window.x,
    top: window.y,
  }}
  onMouseDown={() => bringToFront(index)}
  className="
    absolute
    w-[390px]
        rounded-[9px]
        overflow-hidden
        bg-[#2b2b2f]/95
        backdrop-blur-xl
        shadow-2xl
        pointer-events-auto
      "
    >
     <div
  onMouseDown={(e) => startDrag(index, e)}
  className="
    h-7
    flex
    items-center
    justify-center
    text-[#bbbbbb]
    text-[12px]
    border-b
    border-black/30
    cursor-move
    select-none
  "
>
        {appData[window.id as keyof typeof appData].title}
      </div>

      <div className="flex items-start gap-3 px-3 py-3">
        <img
          src={appData[window.id as keyof typeof appData].icon}
          alt=""
          className="w-12 h-12 object-contain flex-shrink-0"
        />

        <div className="flex-1">
          <p className="text-white text-[11px] leading-4">
            {appData[window.id as keyof typeof appData].message}
          </p>

          <div className="flex justify-end mt-3">
            <button
              onClick={() =>
                setOpenWindows((prev) =>
                  prev.filter((_, i) => i !== index)
                )
              }
              className="
                px-3
                py-1
                bg-[#0A84FF]
                text-white
                rounded-md
                text-[11px]
              "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
})}
      {openWindows.map((window, index) => {
  if (window.id !== "notes") return null;
  return (
     <div
      key={`${window.id}-${index}`}
      style={{ zIndex: 100 + index }}
      className="fixed inset-0 pointer-events-none"
    >
      <div
  style={
    globalThis.window.innerWidth < 768
      ? {}
      : {
          left: window.x,
          top: window.y,
        }
  }
        className="
  absolute
  w-[700px]
  h-[520px]

  max-md:w-[92vw]
  max-md:h-[75vh]

  max-md:left-1/2
  max-md:top-1/2
  max-md:-translate-x-1/2
  max-md:-translate-y-1/2

  bg-[#f8f8f8]
  rounded-[13px]
  overflow-hidden
  shadow-xl
  pointer-events-auto
"
      >
        {/* HEADER */}
        <div
  onMouseDown={(e) => startDrag(index, e)}
  className="
    h-8
    bg-[#ece9e6]
    border-b
    border-[#cfcfcf]
    flex
    items-center
    px-3
    gap-2
    cursor-move
  "
>
  <button
    onClick={() =>
      setOpenWindows((prev) =>
        prev.filter((_, i) => i !== index)
      )
    }
    className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
  <div className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]" />
  <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />

  <span className="ml-3 text-[11px] text-black">
    Information about: Gurleen Kaur
  </span>
</div>

        <div className="flex h-[calc(100%-32px)]">

          {/* SIDEBAR */}
          <div className="w-[110px] border-r border-[#d5d5d5] bg-[#f7f7f7]">

  <button
    onClick={() => setNotesTab("about")}
    className={`w-full px-3 py-3 border-b border-[#d5d5d5] flex justify-between text-[12px]
      ${notesTab === "about" ? "bg-[#dddddd]" : ""}
    `}
  >
    <span>About me</span>
    <span className="text-[#8d8d8d]">18</span>
  </button>

  <button
    onClick={() => setNotesTab("cv")}
    className={`w-full px-3 py-3 border-b border-[#d5d5d5] flex justify-between text-[12px]
      ${notesTab === "cv" ? "bg-[#dddddd]" : ""}
    `}
  >
    <span>CV</span>
    <span className="text-[#8d8d8d]">48</span>
  </button>

  <button
    onClick={() => setNotesTab("interests")}
    className={`w-full px-3 py-3 flex justify-between text-[12px]
      ${notesTab === "interests" ? "bg-[#dddddd]" : ""}
    `}
  >
    <span>Interests</span>
    <span className="text-[#8d8d8d]">∞</span>
  </button>

</div>


          {/* CONTENT */}
          <div className="flex-1 px-4 pt-3 pb-4 overflow-y-auto text-black">

  {notesTab === "about" && (
    <>
      <p className="text-[11px] leading-[1.15] max-w-[520px] mb-4">
        Art Director, Graphic Designer, Photographer, and even
        Stylist sometimes, but honestly, I do way more than
        that. To put it simply, I bring ideas to life through
        visuals and manage everything that makes a project
        come together in the end.
      </p>

      <h3 className="text-[11px] font-semibold mb-3">
        I can do...
      </h3>

      <div className="space-y-1 text-[10px]">
        {[
          "Anything",
          "Art Direction",
          "Creative Direction",
          "Artwork",
          "Packaging Design",
          "Motion Design",
          "Photography",
          "Web",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#f2b32a] text-white flex items-center justify-center text-[8px]">
              ✓
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </>
  )}

  {notesTab === "cv" && (
    <div className="text-[10px] space-y-2">
      <h3 className="font-semibold mb-3">Experience</h3>

      <p>SBM Label — Art Director (2023–2025)</p>
      <p>Newonce — Graphic Designer (2023)</p>
      <p>Albo Albo — Graphic Designer (2021–2023)</p>
      <p>Freelance — Graphic Designer (2019–Present)</p>
    </div>
  )}

  {notesTab === "interests" && (
    <div className="grid grid-cols-2 gap-2">
      <img src="/interests/1.jpg" className="rounded-md" />
      <img src="/interests/2.jpg" className="rounded-md" />
      <img src="/interests/3.jpg" className="rounded-md" />
      <img src="/interests/4.jpg" className="rounded-md" />
    </div>
  )}
  

          </div>
        </div>
      </div>
    </div>
  );
})}

</main>

);
}