"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
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

export default function EditBlog() {
  const params = useParams();
  const router = useRouter();
  const blogId = params?.id as string;

  const [form, setForm] = useState<BlogForm>(EMPTY_FORM);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  /* contentKey forces SunEditor to re-mount once DB data arrives */
  const [contentKey, setContentKey] = useState(0);

  /* ── Fetch existing blog from Supabase ── */
  useEffect(() => {
    if (!blogId) return;

    const fetchBlog = async () => {
      setIsFetching(true);
      try {
        const { data, error } = await supabase
          .from("Blog")
          .select("*")
          .eq("id", blogId)
          .single();

        if (error || !data) {
          toast.error("Blog not found");
          router.push("/admin-X9876PQRS/blogs");
          return;
        }

        /* Prefer local autosave over DB if it exists */
        const lsKey = `unbox-blog-edit-${blogId}`;
        const raw = typeof window !== "undefined" ? localStorage.getItem(lsKey) : null;
        if (raw) {
          try {
            const saved = JSON.parse(raw);
            setForm({
              title:            saved.title            || data.title       || "",
              category:         saved.category         || data.category    || "",
              slug:             saved.slug             || data.slug        || "",
              author:           saved.author           || data.author      || "",
              image:            saved.image            || data.image       || "",
              alt:              saved.alt              || data.alt         || "",
              subContent:       saved.subContent       || data.subcontent  || "",
              content:          saved.content          || data.content     || "",
              metaTitle:        saved.meta?.title      || data.meta?.title || "",
              metaDescription:  saved.meta?.description|| data.meta?.description || "",
              schemaTitle:      saved.schema?.title    || data.schema?.title || "",
              schemaDescription:saved.schema?.description || data.schema?.description || "",
            });
            if (saved.faqs?.length) setFaqs(saved.faqs);
            else if (data.FAQ?.length) setFaqs(data.FAQ);
            toast("Restored from local autosave", { icon: "💾" });
          } catch {
            mapDbToForm(data);
          }
        } else {
          mapDbToForm(data);
        }

        /* Bump key so SunEditor re-mounts with the loaded content */
        setContentKey((k) => k + 1);
      } catch {
        toast.error("Failed to load blog");
        router.push("/admin-X9876PQRS/blogs");
      } finally {
        setIsFetching(false);
        setIsLoaded(true);
      }
    };

    fetchBlog();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogId]);

  const mapDbToForm = (data: Record<string, any>) => {
    setForm({
      title:            data.title       || "",
      category:         data.category    || "",
      slug:             data.slug        || "",
      author:           data.author      || "",
      image:            data.image       || "",
      alt:              data.alt         || "",
      subContent:       data.subcontent  || "",
      content:          data.content     || "",
      metaTitle:        data.meta?.title || "",
      metaDescription:  data.meta?.description || "",
      schemaTitle:      data.schema?.title || "",
      schemaDescription:data.schema?.description || "",
    });
    if (data.FAQ?.length) setFaqs(data.FAQ);
  };

  /* ── Auto-save edits to localStorage ── */
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(`unbox-blog-edit-${blogId}`, JSON.stringify({
      title: form.title, category: form.category, slug: form.slug, author: form.author,
      image: form.image, alt: form.alt,
      subContent: form.subContent, content: form.content,
      meta: { title: form.metaTitle, description: form.metaDescription },
      schema: { title: form.schemaTitle, description: form.schemaDescription },
      status: "draft", faqs,
    }));
  }, [form, faqs, isLoaded, blogId]);

  const updateForm = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  /* ── Slug uniqueness check (excludes current blog) ── */
  const isSlugTaken = async (slug: string) => {
    const { data } = await supabase
      .from("Blog")
      .select("id")
      .eq("slug", slug)
      .neq("id", blogId);
    return !!(data && data.length > 0);
  };

  /* ── Build payload ── */
  const buildPayload = (status: "published" | "draft") => ({
    title: form.title, category: form.category, slug: form.slug, author: form.author,
    meta: { title: form.metaTitle, description: form.metaDescription },
    schema: { title: form.schemaTitle, description: form.schemaDescription },
    image: form.image, alt: form.alt,
    subcontent: form.subContent, content: form.content,
    FAQ: faqs, status,
  });

  const stripHtml = (html: string) => html.replace(/<[^>]*>/g, "").trim();

  /* ── UPDATE (Publish) ── */
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
      toast.error("Slug already taken by another blog");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from("Blog")
        .update(buildPayload("published"))
        .eq("id", blogId);
      if (error) { toast.error(error.message || "Failed to update blog"); return; }
      toast.success("🎉 Blog updated successfully!");
      localStorage.removeItem(`unbox-blog-edit-${blogId}`);
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
      toast.error("Slug already taken by another blog");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from("Blog")
        .update(buildPayload("draft"))
        .eq("id", blogId);
      if (error) { toast.error(error.message || "Failed to save draft"); return; }
      toast.success("📝 Blog saved as draft!");
      localStorage.removeItem(`unbox-blog-edit-${blogId}`);
      setTimeout(() => router.push("/admin-X9876PQRS/blogs"), 1200);
    } catch {
      toast.error("Server error — please try again");
    } finally {
      setLoading(false);
    }
  };

  /* ── Loading skeleton ── */
  if (isFetching) {
    return (
      <section className="relative min-h-screen p-6 bg-linear-to-b from-gray-50 via-white to-gray-50 flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500 to-violet-600 animate-pulse mx-auto" />
          <p className="text-sm text-gray-500 font-medium">Loading blog editor…</p>
        </div>
      </section>
    );
  }

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
            contentKey={contentKey}
            onChange={updateForm}
            editorType="Blog"
          />

          <CMSActions
            actionType="update"
            editorType="Blog"
            onSaveDraft={handleSaveDraft}
            loading={loading}
          />
        </form>
      </div>
    </section>
  );
}
