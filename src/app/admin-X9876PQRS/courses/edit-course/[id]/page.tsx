"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabse/supabaseConfig";

import CMSHeader from "@/components/AdminPanel/CMS/CMSHeader";
import CMSMediaSection from "@/components/AdminPanel/CMS/CMSMediaSection";
import CMSContentSection from "@/components/AdminPanel/CMS/CMSContentSection";
import CMSSeoSection from "@/components/AdminPanel/CMS/CMSSeoSection";
import FaqHandler from "@/components/AdminPanel/CMS/FaqHandler";
import CMSActions from "@/components/AdminPanel/CMS/CMSActions";

import CMSCourseBasicInfo, { type CourseBasicFields } from "@/components/AdminPanel/CMS/CMSCourseBasicInfo";
import CourseHighlightsHandler, { type CourseHighlight } from "@/components/AdminPanel/CourseEditor/CourseHighlightsHandler";
import TestimonialsHandler, { type Testimonial } from "@/components/AdminPanel/CourseEditor/TestimonialsHandler";
import CourseModulesHandler, {
    type CourseSection,
    sectionsToDb,
    sectionsFromDb,
} from "@/components/AdminPanel/CourseEditor/CourseModulesHandler";
import VideoModulesHandler, { type VideoModuleItem } from "@/components/AdminPanel/CourseEditor/VideoModulesHandler";

type FAQ = { id: string; question: string; answer: string };

const EMPTY_BASIC: CourseBasicFields = {
    title: "", slug: "", domain: "", language: "",
    startDate: "", duration: "", deliveryMode: "",
    price: "", low: "", high: "",
};

const EMPTY_HIGHLIGHTS: CourseHighlight[] = Array.from({ length: 6 }, (_, i) => ({
    id: `h-${i}`, title: "", subtitle: "",
}));

export default function EditCourse() {
    const params = useParams();
    const router = useRouter();
    const courseId = params?.id as string;

    /* ── Form State ── */
    const [basic, setBasic] = useState<CourseBasicFields>(EMPTY_BASIC);
    const [image, setImage] = useState("");
    const [alt, setAlt] = useState("");
    const [subContent, setSubContent] = useState("");
    const [description, setDescription] = useState("");
    const [metaTitle, setMetaTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [highlights, setHighlights] = useState<CourseHighlight[]>(EMPTY_HIGHLIGHTS);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [sections, setSections] = useState<CourseSection[]>([]);
    const [videoModules, setVideoModules] = useState<VideoModuleItem[]>([]);
    const [faqs, setFaqs] = useState<FAQ[]>([]);

    const [isLoaded, setIsLoaded] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [saving, setSaving] = useState(false);
    const [contentKey, setContentKey] = useState(0);

    /* ── Fetch from Supabase ── */
    useEffect(() => {
        if (!courseId) return;
        const fetchCourse = async () => {
            setIsFetching(true);
            try {
                const { data, error } = await supabase
                    .from("Courses")
                    .select("*")
                    .eq("id", courseId)
                    .single();

                if (error || !data) {
                    toast.error("Course not found");
                    router.push("/admin-X9876PQRS/courses");
                    return;
                }

                const lsKey = `unbox-course-edit-v2-${courseId}`;
                const raw = typeof window !== "undefined" ? localStorage.getItem(lsKey) : null;

                if (raw) {
                    try {
                        const saved = JSON.parse(raw);
                        applyDraft(saved, data);
                        toast("Restored from local autosave", { icon: "💾" });
                    } catch {
                        applyDb(data);
                    }
                } else {
                    applyDb(data);
                }

                setContentKey((k) => k + 1);
            } catch {
                toast.error("Failed to load course");
                router.push("/admin-X9876PQRS/courses");
            } finally {
                setIsFetching(false);
                setIsLoaded(true);
            }
        };
        fetchCourse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [courseId]);

    const applyDb = (d: Record<string, any>) => {
        setBasic({
            title:        d.title        || "",
            slug:         d.slug         || "",
            domain:       d.domain       || "",
            language:     d.language     || "",
            startDate:    d.startDate    || "",
            duration:     d.Duration != null ? String(d.Duration) : "",
            deliveryMode: d.Delivery_Mode || "",
            price:        d.price != null ? String(d.price) : "",
            low:          d.low  != null ? String(d.low)  : "",
            high:         d.high != null ? String(d.high) : "",
        });
        setImage(d.image || "");
        setAlt(d.alt || "");
        setSubContent("");
        setDescription(d.description || "");
        setMetaTitle(d.meta?.title || "");
        setMetaDescription(d.meta?.description || "");

        const dbHighlights = Array.isArray(d.content) ? d.content : [];
        setHighlights(
            Array.from({ length: 6 }, (_, i) => ({
                id: `h-${i}`,
                title:    dbHighlights[i]?.title    || "",
                subtitle: dbHighlights[i]?.subtitle || "",
            }))
        );

        const dbTestimonials = Array.isArray(d.Testimonials) ? d.Testimonials : [];
        setTestimonials(dbTestimonials.map((t: any) => ({ ...t, id: t.id || crypto.randomUUID() })));

        setSections(Array.isArray(d.modules) ? sectionsFromDb(d.modules) : []);

        const dbVideos = Array.isArray(d.videoModule) ? d.videoModule : [];
        setVideoModules(
            dbVideos.map((m: any) => ({
                id:         m.id || crypto.randomUUID(),
                moduleName: m.moduleName || "",
                videos:     (m.videos || []).map((v: any) => ({
                    id:    v.id || crypto.randomUUID(),
                    title: v.title || "",
                    video: v.video || "",
                })),
            }))
        );

        const dbFaqs = Array.isArray(d.FAQ) ? d.FAQ : [];
        setFaqs(dbFaqs.map((f: any) => ({ id: f.id || crypto.randomUUID(), question: f.question || "", answer: f.answer || "" })));
    };

    const applyDraft = (saved: Record<string, any>, db: Record<string, any>) => {
        setBasic({
            title:        saved.basic?.title        || db.title        || "",
            slug:         saved.basic?.slug         || db.slug         || "",
            domain:       saved.basic?.domain       || db.domain       || "",
            language:     saved.basic?.language     || db.language     || "",
            startDate:    saved.basic?.startDate    || db.startDate    || "",
            duration:     saved.basic?.duration     || (db.Duration != null ? String(db.Duration) : ""),
            deliveryMode: saved.basic?.deliveryMode || db.Delivery_Mode || "",
            price:        saved.basic?.price        || (db.price != null ? String(db.price) : ""),
            low:          saved.basic?.low          || (db.low != null ? String(db.low) : ""),
            high:         saved.basic?.high         || (db.high != null ? String(db.high) : ""),
        });
        setImage(saved.image || db.image || "");
        setAlt(saved.alt || db.alt || "");
        setDescription(saved.description || db.description || "");
        setMetaTitle(saved.meta?.title || db.meta?.title || "");
        setMetaDescription(saved.meta?.description || db.meta?.description || "");

        const dbHighlights = Array.isArray(db.content) ? db.content : [];
        const savedHighlights = Array.isArray(saved.highlights) ? saved.highlights : [];
        setHighlights(
            Array.from({ length: 6 }, (_, i) => ({
                id: `h-${i}`,
                title:    savedHighlights[i]?.title    || dbHighlights[i]?.title    || "",
                subtitle: savedHighlights[i]?.subtitle || dbHighlights[i]?.subtitle || "",
            }))
        );

        const dbTestimonials = Array.isArray(db.Testimonials) ? db.Testimonials : [];
        const savedTestimonials = saved.testimonials?.length ? saved.testimonials : dbTestimonials;
        setTestimonials(savedTestimonials.map((t: any) => ({ ...t, id: t.id || crypto.randomUUID() })));

        if (saved.sections?.length) {
            setSections(saved.sections);
        } else if (Array.isArray(db.modules)) {
            setSections(sectionsFromDb(db.modules));
        }

        const dbVideos = Array.isArray(db.videoModule) ? db.videoModule : [];
        const savedVideos = saved.videoModules?.length ? saved.videoModules : dbVideos;
        setVideoModules(savedVideos.map((m: any) => ({
            id: m.id || crypto.randomUUID(),
            moduleName: m.moduleName || "",
            videos: (m.videos || []).map((v: any) => ({ id: v.id || crypto.randomUUID(), title: v.title || "", video: v.video || "" })),
        })));

        const dbFaqs = Array.isArray(db.FAQ) ? db.FAQ : [];
        const savedFaqs = saved.faqs?.length ? saved.faqs : dbFaqs;
        setFaqs(savedFaqs.map((f: any) => ({ id: f.id || crypto.randomUUID(), question: f.question || "", answer: f.answer || "" })));
    };

    /* ── Auto-save ── */
    useEffect(() => {
        if (!isLoaded) return;
        localStorage.setItem(`unbox-course-edit-v2-${courseId}`, JSON.stringify({
            basic, image, alt, description,
            meta: { title: metaTitle, description: metaDescription },
            highlights, testimonials, sections, videoModules, faqs,
        }));
    }, [basic, image, alt, description, metaTitle, metaDescription, highlights, testimonials, sections, videoModules, faqs, isLoaded, courseId]);

    const updateBasic = (field: keyof CourseBasicFields, value: string) =>
        setBasic((p) => ({ ...p, [field]: value }));

    const updateMedia = (field: string, value: string) => {
        if (field === "image") setImage(value);
        if (field === "alt") setAlt(value);
    };

    const updateContent = (field: string, value: string) => {
        if (field === "subContent") setSubContent(value);
        if (field === "content") setDescription(value);
    };

    const updateSeo = (field: string, value: string) => {
        if (field === "metaTitle") setMetaTitle(value);
        if (field === "metaDescription") setMetaDescription(value);
    };

    /* ── Slug uniqueness (excludes current) ── */
    const isSlugTaken = async (slug: string) => {
        const { data } = await supabase
            .from("Courses")
            .select("id")
            .eq("slug", slug)
            .neq("id", courseId)
            .maybeSingle();
        return !!data;
    };

    const stripHtml = (html: string) => html.replace(/<[^>]*>/g, "").trim();

    const validate = async (status: "published" | "draft") => {
        if (!basic.title) { toast.error("Course title is required"); return false; }
        if (!basic.slug)  { toast.error("Slug is required"); return false; }
        if (status === "published") {
            if (!basic.domain)       { toast.error("Domain / category is required"); return false; }
            if (!basic.language)     { toast.error("Language is required"); return false; }
            if (!basic.deliveryMode) { toast.error("Delivery mode is required"); return false; }
            if (!basic.startDate)    { toast.error("Start date is required"); return false; }
            if (!basic.duration)     { toast.error("Duration is required"); return false; }
            if (basic.price === "")  { toast.error("Price is required (0 for free)"); return false; }
            if (!image)              { toast.error("Course thumbnail image is missing"); return false; }
            if (stripHtml(description).length < 300) {
                toast.error("Full description must be at least 300 characters");
                return false;
            }
        }
        if (await isSlugTaken(basic.slug)) {
            toast.error("Slug already taken by another course");
            return false;
        }
        return true;
    };

    const buildPayload = (status: "published" | "draft") => ({
        title:        basic.title,
        slug:         basic.slug,
        domain:       basic.domain,
        language:     basic.language,
        startDate:    basic.startDate || null,
        Duration:     basic.duration ? parseInt(basic.duration) : null,
        Delivery_Mode: basic.deliveryMode,
        price:        parseFloat(basic.price) || 0,
        low:          basic.low  ? parseFloat(basic.low)  : null,
        high:         basic.high ? parseFloat(basic.high) : null,
        image,
        alt,
        description,
        content: highlights.map(({ title, subtitle }) => ({ title, subtitle })),
        Testimonials: testimonials.map(({ id: _id, ...rest }) => rest),
        modules: sectionsToDb(sections),
        videoModule: videoModules.map(({ id, moduleName, videos }) => ({
            id, moduleName,
            videos: videos.map(({ id: vid, title, video }) => ({ id: vid, title, video })),
        })),
        FAQ: faqs.map(({ id: _id, question, answer }) => ({ question, answer })),
        meta: { title: metaTitle, description: metaDescription },
        status,
        updated_at: new Date().toISOString(),
    });

    /* ── UPDATE (Publish) ── */
    const handlePublish = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!(await validate("published"))) return;
        setSaving(true);
        try {
            const { error } = await supabase
                .from("Courses")
                .update(buildPayload("published"))
                .eq("id", courseId);
            if (error) { toast.error(error.message || "Failed to update course"); return; }
            toast.success("Course updated and published!");
            localStorage.removeItem(`unbox-course-edit-v2-${courseId}`);
            router.push("/admin-X9876PQRS/courses");
        } catch {
            toast.error("Server error — please try again");
        } finally {
            setSaving(false);
        }
    };

    /* ── SAVE DRAFT ── */
    const handleSaveDraft = async () => {
        if (!(await validate("draft"))) return;
        setSaving(true);
        try {
            const { error } = await supabase
                .from("Courses")
                .update(buildPayload("draft"))
                .eq("id", courseId);
            if (error) { toast.error(error.message || "Failed to save draft"); return; }
            toast.success("Course saved as draft!");
            localStorage.removeItem(`unbox-course-edit-v2-${courseId}`);
            router.push("/admin-X9876PQRS/courses");
        } catch {
            toast.error("Server error — please try again");
        } finally {
            setSaving(false);
        }
    };

    /* ── Loading skeleton ── */
    if (isFetching) {
        return (
            <section className="relative min-h-screen p-6 bg-linear-to-b from-gray-50 via-white to-gray-50 flex items-center justify-center">
                <div className="text-center space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500 to-violet-600 animate-pulse mx-auto" />
                    <p className="text-sm text-gray-500 font-medium">Loading course editor…</p>
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
                <form className="space-y-8 pb-24" onSubmit={handlePublish}>
                    <CMSHeader editorType="Course" />

                    <CMSCourseBasicInfo fields={basic} onChange={updateBasic} />

                    <CMSMediaSection
                        image={image}
                        alt={alt}
                        onChange={updateMedia}
                        editorType="Course"
                    />

                    <CMSContentSection
                        subContent={subContent}
                        content={description}
                        contentKey={contentKey}
                        onChange={updateContent}
                        editorType="Course"
                    />

                    <CourseHighlightsHandler
                        highlights={highlights}
                        setHighlights={setHighlights}
                    />

                    <TestimonialsHandler
                        testimonials={testimonials}
                        setTestimonials={setTestimonials}
                    />

                    <CourseModulesHandler
                        sections={sections}
                        setSections={setSections}
                    />

                    <VideoModulesHandler
                        videoModules={videoModules}
                        setVideoModules={setVideoModules}
                    />

                    <FaqHandler faqs={faqs} setFaqs={setFaqs} editorType="Course" />

                    <CMSSeoSection
                        metaTitle={metaTitle}
                        metaDescription={metaDescription}
                        onChange={updateSeo}
                        editorType="Course"
                    />

                    <CMSActions
                        actionType="update"
                        editorType="Course"
                        onSaveDraft={handleSaveDraft}
                        loading={saving}
                    />
                </form>
            </div>
        </section>
    );
}
