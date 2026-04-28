"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabse/supabaseConfig";
import {
  LayoutGrid,
  Table,
  Plus,
  Search,
  Pencil,
  Trash2,
  TrendingUp,
  TrendingDown,
  FileText,
  BookOpen,
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
  ArrowUpRight,
  Eye,
  Clock,
  CheckCircle2,
  X,
  Sparkles,
  Filter,
  SlidersHorizontal,
  Download,
  Zap,
  ExternalLink,
} from "lucide-react";

/* ===================== TYPES ===================== */

interface IBlog {
  _id: string;
  title: string;
  subContent: string;
  category: string;
  status: "published" | "draft";
  image: string;
  createdAt: string;
  readTime: number;
  views: number;
  author: string;
  authorInitial: string;
}

type SortField = "title" | "category" | "status" | "createdAt" | "views";
type SortDir = "asc" | "desc";
type ViewMode = "card" | "table";
type StatusFilter = "all" | "published" | "draft";

/* ===================== DATA ===================== */

const CATEGORIES = [
  "All",
  "Digital Marketing",
  "Data Science",
  "IT & Software",
  "Development",
];

const CAT_STYLE: Record<
  string,
  { bg: string; text: string; dot: string }
> = {
  "Digital Marketing": {
    bg: "bg-violet-50",
    text: "text-violet-700",
    dot: "bg-violet-500",
  },
  "Data Science": {
    bg: "bg-sky-50",
    text: "text-sky-700",
    dot: "bg-sky-500",
  },
  "IT & Software": {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
  },
  Development: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    dot: "bg-amber-500",
  },
};

const TITLES = [
  "How AI Is Reshaping Content Strategy in 2025",
  "The Future of Remote Collaboration Tools",
  "SEO Trends Every Marketer Must Know",
  "Building Scalable React Applications at Scale",
  "Python for Data Engineers: A Complete Guide",
  "Cloud Security Best Practices for Startups",
  "Mobile-First Design Principles That Convert",
  "Data Visualization with D3.js Masterclass",
  "DevOps Pipelines Explained for Beginners",
  "Mastering TypeScript Generics & Utility Types",
  "Social Media ROI: How to Measure What Matters",
  "Kubernetes for Beginners: A Hands-On Guide",
  "A/B Testing Fundamentals for Growth Teams",
  "GraphQL vs REST APIs: Making the Right Choice",
  "Machine Learning in Modern Marketing Stacks",
  "Progressive Web Apps: The Complete 2025 Guide",
  "Email Campaign Optimization Strategies",
  "Docker Crash Course: From Zero to Production",
  "Conversion Rate Optimization Deep Dive",
  "Neural Networks Demystified for Developers",
  "Growth Hacking Strategies That Actually Work",
  "Next.js 14 Deep Dive: App Router & Beyond",
  "Customer Journey Mapping for SaaS Products",
  "Rust for Web Developers: A Practical Intro",
  "Predictive Analytics Tools Worth Using in 2025",
  "Agile for Small Teams: Practical Frameworks",
  "PPC Campaign Structuring for Maximum ROI",
  "WebSockets in Node.js: Real-Time Data Guide",
  "Data Warehouse Design Principles Explained",
  "UX Research Methods That Drive Real Decisions",
];

const AUTHORS = [
  { name: "Aarav Sharma", i: "AS" },
  { name: "Priya Mehra", i: "PM" },
  { name: "Rohan Kapoor", i: "RK" },
  { name: "Saira Khan", i: "SK" },
  { name: "Devraj Iyer", i: "DI" },
];

const DESCS = [
  "An in-depth guide covering the latest trends, tools, and strategies professionals need to stay ahead of the curve.",
  "Discover the essential techniques and frameworks that are transforming the industry in measurable, impactful ways.",
  "A comprehensive walkthrough with practical examples, code snippets, and real-world case studies for immediate application.",
  "Everything you need to know to get started and scale effectively, explained clearly with actionable next steps.",
];

const dummyBlogs: IBlog[] = Array.from({ length: 30 }).map((_, i) => {
  const a = AUTHORS[i % AUTHORS.length];
  return {
    _id: String(i),
    title: TITLES[i] ?? `Blog Title ${i + 1}`,
    subContent: DESCS[i % DESCS.length],
    category: CATEGORIES[(i % (CATEGORIES.length - 1)) + 1],
    status: i % 3 === 1 ? "draft" : "published",
    image: `https://picsum.photos/seed/${i + 20}/800/500`,
    createdAt: new Date(Date.now() - i * 1000 * 60 * 60 * 38).toISOString(),
    readTime: 3 + (i % 9),
    views: 120 + i * 43 + (i % 7) * 89,
    author: a.name,
    authorInitial: a.i,
  };
});

/* ===================== UTIL ===================== */

const fmtNum = (n: number) =>
  n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);

const relTime = (iso: string) => {
  const diff = Date.now() - new Date(iso).getTime();
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (d < 1) return "Today";
  if (d === 1) return "Yesterday";
  if (d < 7) return `${d}d ago`;
  if (d < 30) return `${Math.floor(d / 7)}w ago`;
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

/* ===================== TOAST ===================== */

interface Toast {
  id: number;
  message: string;
  type: "success" | "error" | "info";
}

function ToastContainer({
  toasts,
  remove,
}: {
  toasts: Toast[];
  remove: (id: number) => void;
}) {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-2 pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`pointer-events-auto flex items-center gap-3 pl-4 pr-3 py-3 rounded-xl shadow-xl shadow-black/5 border text-sm font-medium bg-white slide-in
            ${t.type === "success" ? "border-emerald-100" : ""}
            ${t.type === "error" ? "border-red-100" : ""}
            ${t.type === "info" ? "border-indigo-100" : ""}`}
        >
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center
              ${t.type === "success" ? "bg-emerald-50 text-emerald-600" : ""}
              ${t.type === "error" ? "bg-red-50 text-red-600" : ""}
              ${t.type === "info" ? "bg-indigo-50 text-indigo-600" : ""}`}
          >
            {t.type === "success" && <CheckCircle2 size={15} />}
            {t.type === "error" && <Trash2 size={14} />}
            {t.type === "info" && <Sparkles size={14} />}
          </div>
          <span className="text-gray-800">{t.message}</span>
          <button
            onClick={() => remove(t.id)}
            className="ml-1 text-gray-300 hover:text-gray-600 cursor-pointer p-1 rounded-md hover:bg-gray-50"
          >
            <X size={13} />
          </button>
        </div>
      ))}
    </div>
  );
}

/* ===================== DELETE MODAL ===================== */

function DeleteModal({
  blog,
  onConfirm,
  onCancel,
}: {
  blog: IBlog;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 fade-in"
      onClick={onCancel}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 p-6 w-full max-w-md scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center ring-4 ring-red-50/50">
            <Trash2 size={18} className="text-red-500" />
          </div>
          <div className="flex-1">
            <h3 className="text-[15px] font-bold text-gray-900 mb-1 font-display">
              Delete this blog post?
            </h3>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              You're about to delete{" "}
              <span className="font-semibold text-gray-700">
                "{blog.title.length > 50 ? blog.title.slice(0, 50) + "…" : blog.title}"
              </span>
              . This action is permanent and can't be undone.
            </p>
          </div>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-700 p-1 rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onCancel}
            className="px-4 py-2.5 text-[13px] font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all cursor-pointer border border-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2.5 text-[13px] font-semibold text-white bg-red-500 hover:bg-red-600 rounded-xl transition-all cursor-pointer shadow-sm shadow-red-200 flex items-center gap-1.5"
          >
            <Trash2 size={13} />
            Delete post
          </button>
        </div>
      </div>
    </div>
  );
}

/* ===================== STAT CARD ===================== */

function StatCard({
  icon,
  label,
  value,
  sub,
  accent,
  trend,
  trendUp,
  chart,
  glow,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  sub?: React.ReactNode;
  accent: string;
  trend?: string;
  trendUp?: boolean;
  chart?: number[];
  glow: string;
}) {
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm shadow-gray-100/50 p-5 hover:shadow-lg hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-300 overflow-hidden cursor-default">
      {/* Decorative background */}
      <div
        className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${glow}, transparent)` }}
      />

      <div className="relative flex items-start justify-between mb-4">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${accent} ring-4 ring-white group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        {trend && (
          <span
            className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold
            ${trendUp ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}
          >
            {trendUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
            {trend}
          </span>
        )}
      </div>

      <div className="relative">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
          {label}
        </p>
        <div className="flex items-end justify-between gap-3">
          <p className="font-display text-[32px] font-bold text-gray-900 tracking-tight leading-none">
            {value}
          </p>
          {chart && <Sparkline data={chart} />}
        </div>
        {sub && <div className="text-[11px] text-gray-500 mt-2">{sub}</div>}
      </div>
    </div>
  );
}

/* ===================== SPARKLINE ===================== */

function Sparkline({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 56;
  const h = 24;
  const step = w / (data.length - 1);

  const points = data
    .map((v, i) => `${i * step},${h - ((v - min) / range) * h}`)
    .join(" ");

  return (
    <svg width={w} height={h} className="overflow-visible">
      <defs>
        <linearGradient id="sparkGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke="#818cf8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
      <polyline
        fill="url(#sparkGradient)"
        stroke="none"
        points={`0,${h} ${points} ${w},${h}`}
        opacity="0.2"
      />
    </svg>
  );
}

/* ===================== SORT ICON ===================== */

function SortIcon({
  field,
  sort,
}: {
  field: SortField;
  sort: { field: SortField; dir: SortDir };
}) {
  if (sort.field !== field)
    return <ChevronsUpDown size={12} className="text-gray-300 ml-1 inline" />;
  return sort.dir === "asc" ? (
    <ChevronUp size={12} className="text-indigo-500 ml-1 inline" />
  ) : (
    <ChevronDown size={12} className="text-indigo-500 ml-1 inline" />
  );
}

/* ===================== PAGE ===================== */

export default function BlogsPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [view, setView] = useState<ViewMode>("card");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [visible, setVisible] = useState(12);
  const [sort, setSort] = useState<{ field: SortField; dir: SortDir }>({
    field: "createdAt",
    dir: "desc",
  });
  const [deleteTarget, setDeleteTarget] = useState<IBlog | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const toastId = useRef(0);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("Blog")
        .select("id, title, subcontent, category, status, image, created_at, content, author")
        .order("created_at", { ascending: false });

      if (error) {
        addToast("Failed to load blogs", "error");
      } else {
        const mapped: IBlog[] = (data || []).map((b) => ({
          _id: b.id,
          title: b.title || "",
          subContent: b.subcontent || "",
          category: b.category || "",
          status: b.status as "published" | "draft",
          image: b.image || "",
          createdAt: b.created_at,
          readTime: Math.max(1, Math.ceil((b.content || "").split(/\s+/).length / 200)),
          views: 0,
          author: b.author || "",
          authorInitial: (b.author || "?")
            .split(" ")
            .map((w: string) => w[0])
            .join("")
            .slice(0, 2)
            .toUpperCase(),
        }));
        setBlogs(mapped);
      }
      setLoading(false);
    };

    fetchBlogs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToast = (message: string, type: Toast["type"] = "success") => {
    const id = ++toastId.current;
    setToasts((p) => [...p, { id, message, type }]);
    setTimeout(
      () => setToasts((p) => p.filter((t) => t.id !== id)),
      3500
    );
  };

  const removeToast = (id: number) =>
    setToasts((p) => p.filter((t) => t.id !== id));

  const handleDelete = (blog: IBlog) => setDeleteTarget(blog);

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    const { error } = await supabase
      .from("Blog")
      .delete()
      .eq("id", deleteTarget._id);
    if (error) {
      addToast("Failed to delete blog", "error");
      setDeleteTarget(null);
      return;
    }
    setBlogs((p) => p.filter((b) => b._id !== deleteTarget._id));
    setSelected((prev) => {
      const n = new Set(prev);
      n.delete(deleteTarget._id);
      return n;
    });
    addToast(`Post deleted successfully`, "error");
    setDeleteTarget(null);
  };

  const handleSort = (field: SortField) => {
    setSort((prev) =>
      prev.field === field
        ? { field, dir: prev.dir === "asc" ? "desc" : "asc" }
        : { field, dir: "asc" }
    );
  };

  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setStatusFilter("all");
    setVisible(12);
  };

  const bulkDelete = async () => {
    if (!selected.size) return;
    const ids = Array.from(selected);
    const { error } = await supabase
      .from("Blog")
      .delete()
      .in("id", ids);
    if (error) {
      addToast("Failed to delete selected posts", "error");
      return;
    }
    setBlogs((p) => p.filter((b) => !selected.has(b._id)));
    addToast(`${selected.size} post${selected.size > 1 ? "s" : ""} deleted`, "error");
    setSelected(new Set());
  };

  /* filtering + sorting */
  const filtered = useMemo(() => {
    return blogs
      .filter((b) => {
        const q = search.toLowerCase();
        const ms =
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.subContent.toLowerCase().includes(q);
        const mc = category === "All" || b.category === category;
        const mst = statusFilter === "all" || b.status === statusFilter;
        return ms && mc && mst;
      })
      .sort((a, b) => {
        let va: string | number = a[sort.field] ?? "";
        let vb: string | number = b[sort.field] ?? "";
        if (typeof va === "string") va = va.toLowerCase();
        if (typeof vb === "string") vb = vb.toLowerCase();
        return sort.dir === "asc" ? (va > vb ? 1 : -1) : va < vb ? 1 : -1;
      });
  }, [blogs, search, category, statusFilter, sort]);

  const visibleBlogs = filtered.slice(0, visible);
  const published = blogs.filter((b) => b.status === "published").length;
  const drafts = blogs.filter((b) => b.status === "draft").length;
  const totalViews = blogs.reduce((s, b) => s + b.views, 0);

  const hasFilters =
    search !== "" || category !== "All" || statusFilter !== "all";

  return (
    <>
      {/* GLOBAL STYLES */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-display { font-family: 'Fraunces', serif; letter-spacing: -0.01em; }
        .font-body { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideIn { from { opacity: 0; transform: translateX(16px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .fade-in { animation: fadeIn 0.35s ease both; }
        .slide-in { animation: slideIn 0.3s ease both; }
        .scale-in { animation: scaleIn 0.2s ease both; }

        .skeleton { background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 37%, #f3f4f6 63%); background-size: 200% 100%; animation: shimmer 1.4s infinite linear; }

        .card-lift { transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s, border-color 0.3s; }
        .card-lift:hover { transform: translateY(-4px); box-shadow: 0 16px 40px -10px rgba(79, 70, 229, 0.15), 0 4px 12px rgba(0, 0, 0, 0.04); border-color: rgb(199, 210, 254); }

        .img-wrap { position: relative; overflow: hidden; }
        .img-wrap img { transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
        .img-wrap:hover img { transform: scale(1.08); }

        .tbl-row { transition: background 0.15s; }
        .tbl-row:hover { background: linear-gradient(90deg, #eef2ff 0%, #f5f3ff 100%); }
        .tbl-row:hover .tbl-action-btn { opacity: 1; }
        .tbl-action-btn { opacity: 0.65; transition: opacity 0.2s; }

        ::-webkit-scrollbar { height: 8px; width: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #d1d5db; }

        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }

        .grid-bg { background-image: linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px); background-size: 24px 24px; }

        .custom-check { appearance: none; -webkit-appearance: none; width: 16px; height: 16px; border: 1.5px solid #d1d5db; border-radius: 4px; background: white; cursor: pointer; position: relative; transition: all 0.15s; }
        .custom-check:hover { border-color: #6366f1; }
        .custom-check:checked { background: #6366f1; border-color: #6366f1; }
        .custom-check:checked::after { content: ''; position: absolute; left: 4px; top: 1px; width: 5px; height: 9px; border: solid white; border-width: 0 2px 2px 0; transform: rotate(45deg); }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 font-body">
        {/* ===== TOP BAR ===== */}
        <div className="bg-white/80 backdrop-blur-xl border-b border-gray-100 px-6 py-4 sticky top-0 z-30">
          <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-200">
                <BookOpen size={18} className="text-white" />
              </div>
              <div>
                <h1 className="font-display text-[22px] font-bold text-gray-900 leading-none">
                  Blog Studio
                </h1>
                <p className="text-[11px] text-gray-400 mt-1 font-medium">
                  {blogs.length} posts · {published} live · {drafts} drafts
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => addToast("Export started", "info")}
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-[12px] font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-xl transition-all cursor-pointer"
              >
                <Download size={13} />
                Export
              </button>
              <Link
                href="/admin-X9876PQRS/blogs/create-blog"
                className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white text-[13px] font-semibold rounded-xl shadow-md shadow-indigo-300/40 transition-all hover:shadow-lg hover:shadow-indigo-400/40 cursor-pointer"
              >
                <Plus size={14} strokeWidth={2.5} />
                Create Blog
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 py-7 space-y-6">
          {/* ===== HEADER ===== */}
          <div className="fade-in">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-wider">
                <Zap size={10} />
                Dashboard
              </span>
              <span className="text-[11px] text-gray-400">
                Last updated {new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold text-gray-900 leading-tight tracking-tight">
              Your content, <span className="italic text-indigo-600 font-medium">beautifully organized</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1.5 max-w-xl">
              Manage all your blogs efficiently. Filter, search, sort, and publish with ease.
            </p>
          </div>

          {/* ===== STATS ===== */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-in" style={{ animationDelay: "80ms" }}>
            <StatCard
              icon={<BookOpen size={18} className="text-indigo-600" />}
              label="Total Blogs"
              value={blogs.length}
              sub={`${published} active`}
              accent="bg-indigo-50"
              glow="#6366f122"
              trend="+12%"
              trendUp
              chart={[5, 8, 6, 10, 12, 9, 14, 13, 16, 18]}
            />
            <StatCard
              icon={<CheckCircle2 size={18} className="text-emerald-600" />}
              label="Published"
              value={published}
              sub="Live on your site"
              accent="bg-emerald-50"
              glow="#10b98122"
              trend="+8%"
              trendUp
              chart={[3, 5, 4, 7, 8, 9, 11, 10, 13, 15]}
            />
            <StatCard
              icon={<Clock size={18} className="text-amber-600" />}
              label="Drafts"
              value={drafts}
              sub="Awaiting review"
              accent="bg-amber-50"
              glow="#f59e0b22"
              trend="-3%"
              trendUp={false}
              chart={[8, 7, 9, 6, 8, 7, 5, 6, 5, 4]}
            />
            <StatCard
              icon={<Eye size={18} className="text-violet-600" />}
              label="Total Views"
              value={fmtNum(totalViews)}
              sub="Across all posts"
              accent="bg-violet-50"
              glow="#8b5cf622"
              trend="+24%"
              trendUp
              chart={[10, 14, 12, 18, 22, 20, 26, 28, 30, 34]}
            />
          </div>

          {/* ===== CONTROLS ===== */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm shadow-gray-100/50 p-4 fade-in" style={{ animationDelay: "160ms" }}>
            <div className="flex flex-wrap gap-3 items-center">
              {/* Search */}
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5 flex-1 min-w-[220px] focus-within:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-100 focus-within:bg-white transition-all">
                <Search size={15} className="text-gray-400 shrink-0" />
                <input
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setVisible(12);
                  }}
                  placeholder="Search posts, authors, descriptions..."
                  className="bg-transparent text-[13px] text-gray-800 placeholder:text-gray-400 outline-none w-full font-medium"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="text-gray-400 hover:text-gray-700 cursor-pointer p-0.5 rounded hover:bg-gray-100"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>

              {/* Status Tabs */}
              <div className="flex bg-gray-50 rounded-xl p-1 gap-0.5 border border-gray-100">
                {(["all", "published", "draft"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setStatusFilter(s);
                      setVisible(12);
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-[12px] font-semibold capitalize transition-all cursor-pointer
                      ${
                        statusFilter === s
                          ? "bg-white text-gray-900 shadow-sm ring-1 ring-gray-100"
                          : "text-gray-500 hover:text-gray-800"
                      }`}
                  >
                    {s}
                    {s !== "all" && (
                      <span
                        className={`ml-1.5 text-[10px] font-bold ${
                          statusFilter === s ? "text-indigo-500" : "text-gray-400"
                        }`}
                      >
                        {s === "published" ? published : drafts}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* View Toggle */}
              <div className="flex bg-gray-50 rounded-xl p-1 border border-gray-100">
                <button
                  onClick={() => setView("card")}
                  className={`p-2 rounded-lg transition-all cursor-pointer ${
                    view === "card"
                      ? "bg-white shadow-sm text-indigo-600 ring-1 ring-gray-100"
                      : "text-gray-400 hover:text-gray-700"
                  }`}
                  title="Card view"
                >
                  <LayoutGrid size={15} strokeWidth={2.2} />
                </button>
                <button
                  onClick={() => setView("table")}
                  className={`p-2 rounded-lg transition-all cursor-pointer ${
                    view === "table"
                      ? "bg-white shadow-sm text-indigo-600 ring-1 ring-gray-100"
                      : "text-gray-400 hover:text-gray-700"
                  }`}
                  title="Table view"
                >
                  <Table size={15} strokeWidth={2.2} />
                </button>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-100">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mr-1 self-center flex items-center gap-1">
                <Filter size={11} /> Category
              </span>
              {CATEGORIES.map((c) => {
                const active = category === c;
                const style = CAT_STYLE[c];
                return (
                  <button
                    key={c}
                    onClick={() => {
                      setCategory(c);
                      setVisible(12);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer inline-flex items-center gap-1.5
                      ${
                        active
                          ? "bg-gray-900 text-white shadow-md shadow-gray-300"
                          : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100"
                      }`}
                  >
                    {style && (
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          active ? "bg-white" : style.dot
                        }`}
                      />
                    )}
                    {c}
                  </button>
                );
              })}
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="ml-auto px-3 py-1.5 rounded-lg text-[11px] font-bold text-red-500 hover:bg-red-50 transition-all cursor-pointer inline-flex items-center gap-1"
                >
                  <X size={11} /> Clear all
                </button>
              )}
            </div>
          </div>

          {/* ===== BULK BAR ===== */}
          {selected.size > 0 && (
            <div className="fade-in flex items-center justify-between bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2 text-[13px]">
                <div className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-[11px] font-bold">
                  {selected.size}
                </div>
                <span className="font-semibold text-gray-800">
                  {selected.size} post{selected.size > 1 ? "s" : ""} selected
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelected(new Set())}
                  className="px-3 py-1.5 text-[12px] font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  Deselect
                </button>
                <button
                  onClick={bulkDelete}
                  className="px-3 py-1.5 text-[12px] font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 cursor-pointer flex items-center gap-1.5"
                >
                  <Trash2 size={12} /> Delete selected
                </button>
              </div>
            </div>
          )}

          {/* ===== RESULTS BAR ===== */}
          <div className="flex items-center justify-between fade-in" style={{ animationDelay: "200ms" }}>
            <p className="text-[12px] text-gray-500">
              Showing{" "}
              <span className="font-bold text-gray-800">{visibleBlogs.length}</span>{" "}
              of <span className="font-bold text-gray-800">{filtered.length}</span>{" "}
              results
              {hasFilters && (
                <span className="ml-2 text-indigo-600 font-semibold">· filtered</span>
              )}
            </p>
            <button
              onClick={() =>
                handleSort(sort.field === "createdAt" ? "title" : "createdAt")
              }
              className="flex items-center gap-1.5 text-[12px] text-gray-500 hover:text-gray-800 cursor-pointer font-semibold"
            >
              <SlidersHorizontal size={12} />
              Sort by {sort.field === "createdAt" ? "date" : sort.field}
              {sort.dir === "asc" ? (
                <ChevronUp size={12} />
              ) : (
                <ChevronDown size={12} />
              )}
            </button>
          </div>

          {/* ===== CONTENT ===== */}
          {loading ? (
            <LoadingState view={view} />
          ) : filtered.length === 0 ? (
            <EmptyState hasFilters={hasFilters} onClear={clearFilters} />
          ) : view === "card" ? (
            <CardView
              blogs={visibleBlogs}
              onDelete={handleDelete}
              onEdit={(blog) => router.push(`/admin-X9876PQRS/blogs/edit-blog/${blog._id}`)}
              selected={selected}
              toggleSelect={toggleSelect}
            />
          ) : (
            <TableView
              blogs={visibleBlogs}
              sort={sort}
              onSort={handleSort}
              onDelete={handleDelete}
              onEdit={(blog) => router.push(`/admin-X9876PQRS/blogs/edit-blog/${blog._id}`)}
              selected={selected}
              toggleSelect={toggleSelect}
            />
          )}

          {/* ===== LOAD MORE ===== */}
          {!loading && visible < filtered.length && (
            <div className="flex flex-col items-center gap-2 pt-2 fade-in">
              <button
                onClick={() => setVisible((p) => p + 12)}
                className="px-6 py-3 bg-white border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 text-gray-700 hover:text-indigo-700 text-[13px] font-bold rounded-xl shadow-sm transition-all cursor-pointer flex items-center gap-2 group"
              >
                Load {Math.min(12, filtered.length - visible)} more posts
                <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <span className="text-[11px] text-gray-400 font-medium">
                {filtered.length - visible} remaining
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ===== OVERLAYS ===== */}
      {deleteTarget && (
        <DeleteModal
          blog={deleteTarget}
          onConfirm={confirmDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
      <ToastContainer toasts={toasts} remove={removeToast} />
    </>
  );
}

/* ===================== LOADING STATE ===================== */

function LoadingState({ view }: { view: ViewMode }) {
  if (view === "card") {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
          >
            <div className="skeleton h-44" />
            <div className="p-4 space-y-3">
              <div className="skeleton h-3 w-20 rounded" />
              <div className="skeleton h-4 w-full rounded" />
              <div className="skeleton h-3 w-4/5 rounded" />
              <div className="skeleton h-8 w-full rounded-lg mt-3" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-8 space-y-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className="skeleton w-10 h-10 rounded-xl" />
          <div className="flex-1 space-y-2">
            <div className="skeleton h-3 w-2/3 rounded" />
            <div className="skeleton h-2 w-1/3 rounded" />
          </div>
          <div className="skeleton h-6 w-20 rounded-full" />
        </div>
      ))}
    </div>
  );
}

/* ===================== EMPTY STATE ===================== */

function EmptyState({
  hasFilters,
  onClear,
}: {
  hasFilters: boolean;
  onClear: () => void;
}) {
  return (
    <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center border border-gray-100">
          <FileText size={26} className="text-gray-300" />
        </div>
        <h3 className="font-display text-lg font-bold text-gray-900 mb-1">
          {hasFilters ? "No posts match your filters" : "No blog posts yet"}
        </h3>
        <p className="text-[13px] text-gray-500 max-w-xs mx-auto">
          {hasFilters
            ? "Try adjusting your search or filters to find what you're looking for."
            : "Start by creating your first blog post. It'll appear here."}
        </p>
        {hasFilters && (
          <button
            onClick={onClear}
            className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-[12px] font-semibold rounded-xl cursor-pointer transition-all shadow-md shadow-indigo-200"
          >
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}

/* ===================== CARD VIEW ===================== */

function CardView({
  blogs,
  onDelete,
  onEdit,
  selected,
  toggleSelect,
}: {
  blogs: IBlog[];
  onDelete: (b: IBlog) => void;
  onEdit: (b: IBlog) => void;
  selected: Set<string>;
  toggleSelect: (id: string) => void;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {blogs.map((blog, idx) => {
        const style = CAT_STYLE[blog.category] ?? CAT_STYLE["Development"];
        const isSelected = selected.has(blog._id);
        return (
          <div
            key={blog._id}
            className={`group relative bg-white border rounded-2xl overflow-hidden card-lift fade-in
              ${isSelected ? "border-indigo-300 ring-2 ring-indigo-100" : "border-gray-100"}`}
            style={{ animationDelay: `${idx * 40}ms` }}
          >
            {/* Select checkbox */}
            <div
              className="absolute top-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity data-[on=true]:opacity-100"
              data-on={isSelected}
            >
              <label className="flex cursor-pointer bg-white/90 backdrop-blur-sm rounded-md p-1 shadow-sm">
                <input
                  type="checkbox"
                  className="custom-check"
                  checked={isSelected}
                  onChange={() => toggleSelect(blog._id)}
                />
              </label>
            </div>

            {/* Image */}
            <div className="img-wrap h-44 bg-gray-100 relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.55) 100%)",
                }}
              />
              {/* Status badge */}
              <div className="absolute top-3 right-3 z-10">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide backdrop-blur-md
                    ${
                      blog.status === "published"
                        ? "bg-emerald-500/90 text-white"
                        : "bg-amber-400/90 text-white"
                    }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  {blog.status}
                </span>
              </div>
              {/* Bottom category overlay */}
              <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md shadow-sm ${style.text}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                  {blog.category}
                </span>
                <span className="flex items-center gap-1 px-2 py-1 rounded-lg bg-black/40 backdrop-blur-md text-white text-[10px] font-bold">
                  <Eye size={10} /> {fmtNum(blog.views)}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 flex flex-col gap-2.5">
              {/* Meta */}
              <div className="flex items-center justify-between text-[10px] text-gray-400">
                <span className="flex items-center gap-1 font-semibold uppercase tracking-wider">
                  <Clock size={10} /> {blog.readTime} min read
                </span>
                <span className="font-semibold">{relTime(blog.createdAt)}</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-[15px] font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-indigo-700 transition-colors">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-2">
                {blog.subContent}
              </p>

              {/* Author row */}
              <div className="flex items-center gap-2 pt-2 border-t border-gray-50">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                  {blog.authorInitial}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold text-gray-700 truncate">
                    {blog.author}
                  </p>
                  <p className="text-[10px] text-gray-400">Author</p>
                </div>
                <button
                  onClick={() => onEdit(blog)}
                  className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-gray-400 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer transition-all"
                  title="Quick edit"
                >
                  <Pencil size={11} />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-[1fr_1fr_auto] gap-2 mt-1">
                <button
                  onClick={() => onEdit(blog)}
                  className="flex items-center justify-center gap-1.5 py-2 text-[11px] font-bold rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-all cursor-pointer border border-indigo-100"
                >
                  <Pencil size={11} /> Edit
                </button>
                <button
                  onClick={() => onDelete(blog)}
                  className="flex items-center justify-center gap-1.5 py-2 text-[11px] font-bold rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-all cursor-pointer border border-red-100"
                >
                  <Trash2 size={11} /> Delete
                </button>
                <a
                  href="#"
                  className="flex items-center justify-center p-2 rounded-lg bg-gray-50 text-gray-500 hover:bg-gray-900 hover:text-white cursor-pointer transition-all border border-gray-100 hover:border-gray-900"
                  title="View post"
                >
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ===================== TABLE VIEW ===================== */

function TableView({
  blogs,
  sort,
  onSort,
  onDelete,
  onEdit,
  selected,
  toggleSelect,
}: {
  blogs: IBlog[];
  sort: { field: SortField; dir: SortDir };
  onSort: (f: SortField) => void;
  onDelete: (b: IBlog) => void;
  onEdit: (b: IBlog) => void;
  selected: Set<string>;
  toggleSelect: (id: string) => void;
}) {
  const thClass =
    "px-5 py-3.5 text-left text-[10px] font-bold uppercase tracking-widest text-gray-400 cursor-pointer select-none hover:text-gray-900 transition-colors whitespace-nowrap";

  const allSelected = blogs.every((b) => selected.has(b._id)) && blogs.length > 0;

  const toggleAll = () => {
    if (allSelected) blogs.forEach((b) => toggleSelect(b._id));
    else blogs.filter((b) => !selected.has(b._id)).forEach((b) => toggleSelect(b._id));
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm shadow-gray-100/50 overflow-hidden fade-in">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
              <th className="w-10 px-5 py-3.5">
                <input
                  type="checkbox"
                  className="custom-check"
                  checked={allSelected}
                  onChange={toggleAll}
                />
              </th>
              <th className={thClass} onClick={() => onSort("title")}>
                Post <SortIcon field="title" sort={sort} />
              </th>
              <th className={thClass} onClick={() => onSort("category")}>
                Category <SortIcon field="category" sort={sort} />
              </th>
              <th className={thClass} onClick={() => onSort("status")}>
                Status <SortIcon field="status" sort={sort} />
              </th>
              <th className={`${thClass} text-right`}>Author</th>
              <th
                className={`${thClass} text-right`}
                onClick={() => onSort("views")}
              >
                Views <SortIcon field="views" sort={sort} />
              </th>
              <th
                className={`${thClass} text-right`}
                onClick={() => onSort("createdAt")}
              >
                Date <SortIcon field="createdAt" sort={sort} />
              </th>
              <th className={`${thClass} text-right`}>Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {blogs.map((blog, idx) => {
              const style = CAT_STYLE[blog.category] ?? CAT_STYLE["Development"];
              const isSelected = selected.has(blog._id);
              return (
                <tr
                  key={blog._id}
                  className={`tbl-row fade-in ${
                    isSelected ? "bg-indigo-50/40" : ""
                  }`}
                  style={{ animationDelay: `${idx * 22}ms` }}
                >
                  {/* Checkbox */}
                  <td className="px-5 py-4">
                    <input
                      type="checkbox"
                      className="custom-check"
                      checked={isSelected}
                      onChange={() => toggleSelect(blog._id)}
                    />
                  </td>

                  {/* Post */}
                  <td className="px-5 py-4 max-w-sm">
                    <div className="flex items-center gap-3">
                      <div className="shrink-0 w-11 h-11 rounded-xl overflow-hidden bg-gray-100 ring-2 ring-white shadow-sm">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-gray-900 text-[13px] line-clamp-1 max-w-[260px]">
                          {blog.title}
                        </p>
                        <p className="text-[11px] text-gray-400 mt-0.5 flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <Clock size={10} /> {blog.readTime}m
                          </span>
                          <span>·</span>
                          <span className="line-clamp-1 max-w-[180px]">
                            {blog.subContent.slice(0, 40)}…
                          </span>
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${style.bg} ${style.text}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                      {blog.category}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider
                        ${
                          blog.status === "published"
                            ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                            : "bg-amber-50 text-amber-700 ring-1 ring-amber-100"
                        }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          blog.status === "published"
                            ? "bg-emerald-500 animate-pulse"
                            : "bg-amber-500"
                        }`}
                      />
                      {blog.status}
                    </span>
                  </td>

                  {/* Author */}
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-[12px] font-semibold text-gray-700">
                        {blog.author}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                        {blog.authorInitial}
                      </div>
                    </div>
                  </td>

                  {/* Views */}
                  <td className="px-5 py-4 text-right">
                    <span className="inline-flex items-center gap-1 text-[12px] text-gray-700 font-bold">
                      <Eye size={11} className="text-gray-300" />
                      {blog.views.toLocaleString()}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="px-5 py-4 text-right">
                    <div>
                      <p className="text-[12px] font-semibold text-gray-700">
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        {relTime(blog.createdAt)}
                      </p>
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-1 tbl-action-btn">
                      <button
                        onClick={() => onEdit(blog)}
                        className="p-2 rounded-lg text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer transition-all"
                        title="Edit"
                      >
                        <Pencil size={13} />
                      </button>
                      <a
                        href="#"
                        className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-800 cursor-pointer transition-all"
                        title="View"
                      >
                        <ExternalLink size={13} />
                      </a>
                      <button
                        onClick={() => onDelete(blog)}
                        className="p-2 rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600 cursor-pointer transition-all"
                        title="Delete"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Table footer */}
      <div className="px-5 py-3 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between">
        <p className="text-[11px] text-gray-500 font-medium">
          {blogs.length} post{blogs.length !== 1 ? "s" : ""} shown
        </p>
        <p className="text-[11px] text-gray-400 font-medium">
          Click column headers to sort
        </p>
      </div>
    </div>
  );
}