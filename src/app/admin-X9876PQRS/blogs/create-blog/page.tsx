"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabse/supabaseConfig";
import CMSHeader from "@/components/AdminPanel/CMS/CMSHeader";
import CMSMetaSection from "@/components/AdminPanel/CMS/CMSMetaSection";
import CMSMediaSection from "@/components/AdminPanel/CMS/CMSMediaSection";
import CMSContentSection from "@/components/AdminPanel/CMS/CMSContentSection";
import CMSSeoSection from "@/components/AdminPanel/CMS/CMSSeoSection";
import CMSSchema from "@/components/AdminPanel/CMS/CMSSchema";
import FaqHandler from "@/components/AdminPanel/CMS/FaqHandler";
import CMSActions from "@/components/AdminPanel/CMS/CMSActions";

const LS_KEY = "unbox-blog";

type BlogForm = {
  title: string;
  category: string;
  slug: string;
  author: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  alt: string;
  subContent: string;
  content: string;
  schemaTitle: string;
  schemaDescription: string;
};

type FAQ = { id: string; question: string; answer: string };

const EMPTY_FORM: BlogForm = {
  title: "", category: "", slug: "", author: "",
  metaTitle: "", metaDescription: "",
  image: "", alt: "",
  subContent: "", content: "",
  schemaTitle: "", schemaDescription: "",
};

export default function CreateNewBlog() {
  const router = useRouter();
  const [form, setForm] = useState<BlogForm>(EMPTY_FORM);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ── Hydrate from localStorage on mount ── */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      try {
        const p = JSON.parse(raw);
        setForm({
          title: p.title || "",
          category: p.category || "",
          slug: p.slug || "",
          author: p.author || "",
          image: p.image || "",
          alt: p.alt || "",
          subContent: p.subContent || "",
          content: p.content || "",
          metaTitle: p.meta?.title || "",
          metaDescription: p.meta?.description || "",
          schemaTitle: p.schema?.title || "",
          schemaDescription: p.schema?.description || "",
        });
        if (p.faqs?.length) setFaqs(p.faqs);
      } catch {}
    }
    setIsLoaded(true);
  }, []);

  /* ── Auto-save to localStorage on every change ── */
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(LS_KEY, JSON.stringify({
      title: form.title, category: form.category, slug: form.slug, author: form.author,
      image: form.image, alt: form.alt,
      subContent: form.subContent, content: form.content,
      meta: { title: form.metaTitle, description: form.metaDescription },
      schema: { title: form.schemaTitle, description: form.schemaDescription },
      status: "draft", faqs,
    }));
  }, [form, faqs, isLoaded]);

  const updateForm = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setFaqs([]);
    localStorage.removeItem(LS_KEY);
  };

  /* ── Slug uniqueness check ── */
  const isSlugTaken = async (slug: string) => {
    const { data } = await supabase
      .from("Blog")
      .select("id")
      .eq("slug", slug);
    return !!(data && data.length > 0);
  };

  /* ── Build Supabase payload ── */
  const buildPayload = (status: "published" | "draft") => ({
    title: form.title,
    category: form.category,
    slug: form.slug,
    author: form.author,
    meta: { title: form.metaTitle, description: form.metaDescription },
    schema: { title: form.schemaTitle, description: form.schemaDescription },
    image: form.image,
    alt: form.alt,
    subcontent: form.subContent,
    content: form.content,
    FAQ: faqs,
    status,
  });

  const stripHtml = (html: string) => html.replace(/<[^>]*>/g, "").trim();

  /* ── PUBLISH ── */
  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.title)    { toast.error("Blog title is required"); return; }
    if (!form.slug)     { toast.error("Slug is required"); return; }
    if (!form.category) { toast.error("Blog category is required"); return; }
    if (!form.author)   { toast.error("Author name is required"); return; }
    if (!form.image)    { toast.error("Blog thumbnail image is missing"); return; }
    if (!form.alt)      { toast.error("Image alt text is required"); return; }
    if (stripHtml(form.content).length < 300) {
      toast.error("Full description must be at least 300 characters");
      return;
    }
    if (await isSlugTaken(form.slug)) {
      toast.error("Slug already exists — choose a unique slug");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("Blog").insert(buildPayload("published"));
      if (error) { toast.error(error.message || "Failed to publish blog"); return; }
      toast.success("🎉 Blog published successfully!");
      resetForm();
      setTimeout(() => router.push("/admin-X9876PQRS/blogs"), 1200);
    } catch {
      toast.error("Server error — please try again");
    } finally {
      setLoading(false);
    }
  };

  /* ── SAVE DRAFT ── */
  const handleSaveDraft = async () => {
    if (!form.title) { toast.error("Title is required to save a draft"); return; }
    if (!form.slug)  { toast.error("Slug is required to save a draft"); return; }

    if (form.slug && (await isSlugTaken(form.slug))) {
      toast.error("Slug already exists — choose a unique slug");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("Blog").insert(buildPayload("draft"));
      if (error) { toast.error(error.message || "Failed to save draft"); return; }
      toast.success("📝 Blog saved as draft!");
      resetForm();
      setTimeout(() => router.push("/admin-X9876PQRS/blogs"), 1200);
    } catch {
      toast.error("Server error — please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen p-6 bg-linear-to-b from-gray-50 via-white to-gray-50">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-10 w-72 h-72 bg-indigo-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-violet-400/10 blur-3xl rounded-full" />
      </div>

      <div className="relative mx-auto p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_0_60px_-15px_rgba(99,102,241,0.15)]">
        <form className="space-y-8 pb-24" onSubmit={handleSave}>
          <CMSHeader editorType="Blog" />

          <CMSMetaSection
            title={form.title}
            category={form.category}
            slug={form.slug}
            onChange={updateForm}
            editorType="Blog"
          />

          {/* Author — standalone field */}
          <div className="bg-linear-to-br from-white to-gray-50/40 border border-gray-100 rounded-2xl p-6 shadow-sm">
            <label className="text-sm font-semibold text-gray-700">
              Author <span className="text-red-500">*</span>
            </label>
            <input
              value={form.author}
              required
              placeholder="Author name…"
              className="mt-2 w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 transition shadow-sm text-sm"
              onChange={(e) => updateForm("author", e.target.value)}
            />
          </div>

          <CMSSeoSection
            metaTitle={form.metaTitle}
            metaDescription={form.metaDescription}
            onChange={updateForm}
            editorType="Blog"
          />

          <CMSSchema
            schemaTitle={form.schemaTitle}
            schemaDescription={form.schemaDescription}
            onChange={updateForm}
            editorType="Blog"
          />

          <FaqHandler faqs={faqs} setFaqs={setFaqs} editorType="Blog" />

          <CMSMediaSection
            image={form.image}
            alt={form.alt}
            onChange={updateForm}
            editorType="Blog"
          />

          <CMSContentSection
            subContent={form.subContent}
            content={form.content}
            onChange={updateForm}
            editorType="Blog"
          />

          <CMSActions
            actionType="create"
            editorType="Blog"
            onSaveDraft={handleSaveDraft}
            loading={loading}
          />
        </form>
      </div>
    </section>
  );
}
