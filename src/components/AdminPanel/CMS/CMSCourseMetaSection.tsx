import { BookOpen, DollarSign } from "lucide-react";
import {
    inputClass,
    labelClass,
    sectionClass,
    sectionTitleClass,
    sectionSubtitleClass,
    CourseCategories,
    CourseLevels,
    CourseLanguages,
} from "./cms.constants";

export type CourseMetaFields = {
    title: string;
    slug: string;
    instructor: string;
    category: string;
    level: string;
    language: string;
    price: string;
    originalPrice: string;
    duration: string;
};

const CMSCourseMetaSection = ({
    fields,
    onChange,
}: {
    fields: CourseMetaFields;
    onChange: (field: keyof CourseMetaFields, value: string) => void;
}) => {
    const handleSlugChange = (value: string) => {
        const formatted = value
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "");
        onChange("slug", formatted);
    };

    return (
        <div className={sectionClass}>
            <h2 className={sectionTitleClass}>
                <BookOpen size={16} className="text-indigo-500" />
                Course Information
            </h2>
            <p className={sectionSubtitleClass}>
                Core details about your course visible to learners.
            </p>

            <div className="space-y-5">
                {/* Title */}
                <div>
                    <label className={labelClass}>
                        Course Title <span className="text-red-500">*</span>
                    </label>
                    <input
                        value={fields.title}
                        required
                        placeholder="Complete React Developer Bootcamp 2025"
                        className={inputClass}
                        onChange={(e) => onChange("title", e.target.value)}
                    />
                </div>

                {/* Instructor */}
                <div>
                    <label className={labelClass}>
                        Instructor Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        value={fields.instructor}
                        required
                        placeholder="John Doe"
                        className={inputClass}
                        onChange={(e) => onChange("instructor", e.target.value)}
                    />
                    <p className="text-xs text-gray-400 mt-1.5">
                        Name displayed on the course page and certificate
                    </p>
                </div>

                {/* Category + Level */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className={labelClass}>
                            Category <span className="text-red-500">*</span>
                        </label>
                        <select
                            required
                            value={fields.category}
                            onChange={(e) => onChange("category", e.target.value)}
                            className={`${inputClass} cursor-pointer`}
                        >
                            <option value="">Select a category</option>
                            {CourseCategories.map((cat, i) => (
                                <option key={i} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className={labelClass}>
                            Level <span className="text-red-500">*</span>
                        </label>
                        <select
                            required
                            value={fields.level}
                            onChange={(e) => onChange("level", e.target.value)}
                            className={`${inputClass} cursor-pointer`}
                        >
                            <option value="">Select level</option>
                            {CourseLevels.map((l, i) => (
                                <option key={i} value={l}>{l}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Slug + Language */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className={labelClass}>
                            Slug <span className="text-red-500">*</span>
                        </label>
                        <input
                            value={fields.slug}
                            required
                            placeholder="complete-react-developer-bootcamp"
                            className={inputClass}
                            onChange={(e) => handleSlugChange(e.target.value)}
                        />
                        <p className="text-xs text-gray-400 mt-1.5">
                            URL-safe · auto-formatted (lowercase + dashes)
                        </p>
                    </div>

                    <div>
                        <label className={labelClass}>
                            Language <span className="text-red-500">*</span>
                        </label>
                        <select
                            required
                            value={fields.language}
                            onChange={(e) => onChange("language", e.target.value)}
                            className={`${inputClass} cursor-pointer`}
                        >
                            <option value="">Select language</option>
                            {CourseLanguages.map((lang, i) => (
                                <option key={i} value={lang}>{lang}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Price + Original Price + Duration */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                        <label className={labelClass + " flex items-center gap-1"}>
                            <DollarSign size={13} />
                            Price (₹) <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            min="0"
                            step="1"
                            value={fields.price}
                            required
                            placeholder="999"
                            className={inputClass}
                            onChange={(e) => onChange("price", e.target.value)}
                        />
                        <p className="text-xs text-gray-400 mt-1.5">Enter 0 for a free course</p>
                    </div>

                    <div>
                        <label className={labelClass}>
                            Original Price (₹)
                            <span className="text-gray-400 font-normal text-xs ml-1">(optional)</span>
                        </label>
                        <input
                            type="number"
                            min="0"
                            step="1"
                            value={fields.originalPrice}
                            placeholder="1999"
                            className={inputClass}
                            onChange={(e) => onChange("originalPrice", e.target.value)}
                        />
                        <p className="text-xs text-gray-400 mt-1.5">Shown crossed-out for discount display</p>
                    </div>

                    <div>
                        <label className={labelClass}>
                            Duration <span className="text-red-500">*</span>
                        </label>
                        <input
                            value={fields.duration}
                            required
                            placeholder="12 hours"
                            className={inputClass}
                            onChange={(e) => onChange("duration", e.target.value)}
                        />
                        <p className="text-xs text-gray-400 mt-1.5">e.g., "8 hours", "4 weeks"</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CMSCourseMetaSection;
