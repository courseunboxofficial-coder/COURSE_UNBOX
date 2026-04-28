"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
import CourseModulesHandler, { type CourseSection, sectionsToDb } from "@/components/AdminPanel/CourseEditor/CourseModulesHandler";
import VideoModulesHandler, { type VideoModuleItem } from "@/components/AdminPanel/CourseEditor/VideoModulesHandler";

const LS_KEY = "unbox-course-v2";

type FAQ = { id: string; question: string; answer: string };

const EMPTY_BASIC: CourseBasicFields = {
    title: "", slug: "", domain: "", language: "",
    startDate: "", duration: "", deliveryMode: "",
    price: "", low: "", high: "",
};

const EMPTY_HIGHLIGHTS: CourseHighlight[] = Array.from({ length: 6 }, (_, i) => ({
    id: `h-${i}`, title: "", subtitle: "",
}));

export default function CreateNewCourse() {
    const router = useRouter();

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
    const [saving, setSaving] = useState(false);

    /* ── Hydrate from localStorage ── */
    useEffect(() => {
        if (typeof window === "undefined") return;
        const raw = localStorage.getItem(LS_KEY);
        if (raw) {
            try {
                const p = JSON.parse(raw);
                setBasic(p.basic || EMPTY_BASIC);
                setImage(p.image || "");
                setAlt(p.alt || "");
                setSubContent(p.subContent || "");
                setDescription(p.description || "");
                setMetaTitle(p.meta?.title || "");
                setMetaDescription(p.meta?.description || "");
                if (p.highlights?.length) setHighlights(p.highlights);
                if (p.testimonials?.length) setTestimonials(p.testimonials);
                if (p.sections?.length) setSections(p.sections);
                if (p.videoModules?.length) setVideoModules(p.videoModules);
                if (p.faqs?.length) setFaqs(p.faqs);
            } catch {}
        }
        setIsLoaded(true);
    }, []);

    /* ── Auto-save ── */
    useEffect(() => {
        if (!isLoaded) return;
        localStorage.setItem(LS_KEY, JSON.stringify({
            basic, image, alt, subContent, description,
            meta: { title: metaTitle, description: metaDescription },
            highlights, testimonials, sections, videoModules, faqs,
        }));
    }, [basic, image, alt, subContent, description, metaTitle, metaDescription, highlights, testimonials, sections, videoModules, faqs, isLoaded]);

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

    const resetForm = () => {
        setBasic(EMPTY_BASIC); setImage(""); setAlt("");
        setSubContent(""); setDescription("");
        setMetaTitle(""); setMetaDescription("");
        setHighlights(EMPTY_HIGHLIGHTS); setTestimonials([]);
        setSections([]); setVideoModules([]); setFaqs([]);
        localStorage.removeItem(LS_KEY);
    };

    /* ── Slug uniqueness ── */
    const isSlugTaken = async (slug: string) => {
        const { data } = await supabase.from("Courses").select("id").eq("slug", slug).maybeSingle();
        return !!data;
    };

    const stripHtml = (html: string) => html.replace(/<[^>]*>/g, "").trim();

    /* ── Validate ── */
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
            toast.error("Slug already exists — choose a unique slug");
            return false;
        }
        return true;
    };

    /* ── Build Payload ── */
    const buildPayload = (status: "published" | "draft") => ({
        title: basic.title,
        slug: basic.slug,
        domain: basic.domain,
        language: basic.language,
        startDate: basic.startDate || null,
        Duration: basic.duration ? parseInt(basic.duration) : null,
        Delivery_Mode: basic.deliveryMode,
        price: parseFloat(basic.price) || 0,
        low: basic.low ? parseFloat(basic.low) : null,
        high: basic.high ? parseFloat(basic.high) : null,
        image,
        alt,
        description,
        content: highlights.map(({ title, subtitle }) => ({ title, subtitle })),
        Testimonials: testimonials.map(({ id: _id, ...rest }) => rest),
        modules: sectionsToDb(sections),
        videoModule: videoModules.map(({ id: _id, moduleName, videos }) => ({
            id: _id,
            moduleName,
            videos: videos.map(({ id, title, video }) => ({ id, title, video })),
        })),
        FAQ: faqs.map(({ id: _id, question, answer }) => ({ question, answer })),
        meta: { title: metaTitle, description: metaDescription },
        status,
    });

    /* ── PUBLISH ── */
    const handlePublish = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!(await validate("published"))) return;
        setSaving(true);
        try {
            const { error } = await supabase.from("Courses").insert([buildPayload("published")]);
            if (error) { toast.error(error.message || "Failed to publish course"); return; }
            toast.success("Course published successfully!");
            resetForm();
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
            const { error } = await supabase.from("Courses").insert([buildPayload("draft")]);
            if (error) { toast.error(error.message || "Failed to save draft"); return; }
            toast.success("Course saved as draft!");
            resetForm();
            router.push("/admin-X9876PQRS/courses");
        } catch {
            toast.error("Server error — please try again");
        } finally {
            setSaving(false);
        }
    };

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
                        actionType="create"
                        editorType="Course"
                        onSaveDraft={handleSaveDraft}
                        loading={saving}
                    />
                </form>
            </div>
        </section>
    );
}
