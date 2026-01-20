import { supabase } from '@/lib/supabse/supabaseConfig';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

import "suneditor/dist/css/suneditor.min.css";

const Editor = dynamic(
  () => import("@monaco-editor/react"),
  { ssr: false }
);


const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

type Course = {

  id: string;
  title: string;
  description: string;
  startDate: string;
  Duration: number;
  language: string;
  domain: string;
  Delivery_Mode: string;
  low: number,
  high: number,
  price: number,
  content: {
    title: string;
    subtitle: string;
  }[];
  Testimonials:
  {
    name: string,
    role: string,
    company: string,
    title: string,
    description: string,
    ranking: string,
    course: string
  }[],
  modules: Record<
    string,
    {
      module: string;
      title: string;
      lectures: string[];
    }[]
  >,

  FAQ: {
    question: string;
    answer: string
  }[];

  meta: {
    title: string,
    description: string
  },

  slug: string,

  alt: string,

  image: string;

  city: string

}


const EditPage = ({ collapsed, course }: { collapsed: boolean; course: Course }) => {

  const [imageURL, setimageURL] = useState("");
  const [loading, setloading] = useState(false);
  const [meta, setMeta] = useState({

    metaTitle: "",
    metaDescription: ""

  });

  const [formData, setFormData] = useState({

    title: "",
    image: "",
    slug: "",
    city: "",
    alt: ""

  });

  const [editorContent, setEditorContent] = useState("");

  const [FAQ, setFAQ] = useState({

    firstQuestion: "",
    firstAnswer: "",
    secondQuestion: "",
    secondAnswer: "",
    thirdQuestion: "",
    thirdAnswer: "",
    fourthQuestion: "",
    fourthAnswer: "",
    fifthQuestion: "",
    fifthAnswer: "",
    sixthQuestion: "",
    sixthAnswer: ""

  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFAQChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFAQ({ ...FAQ, [e.target.name]: e.target.value });
  };

  const handleMeta = async (event: React.ChangeEvent<HTMLInputElement>) => {

    setMeta({ ...meta, [event.target.name]: event.target.value });

  };


  useEffect(() => {

    setFormData({

      title: course.title,
      slug: course.slug,
      image: course.image,
      city: course.city,
      alt: course.alt

    });

    setEditorContent(course.description);


    setFAQ({
      firstQuestion: course.FAQ?.[0]?.question || "",
      firstAnswer: course.FAQ?.[0]?.answer || "",

      secondQuestion: course.FAQ?.[1]?.question || "",
      secondAnswer: course.FAQ?.[1]?.answer || "",

      thirdQuestion: course.FAQ?.[2]?.question || "",
      thirdAnswer: course.FAQ?.[2]?.answer || "",

      fourthQuestion: course.FAQ?.[3]?.question || "",
      fourthAnswer: course.FAQ?.[3]?.answer || "",

      fifthQuestion: course.FAQ?.[4]?.question || "",
      fifthAnswer: course.FAQ?.[4]?.answer || "",

      sixthQuestion: course.FAQ?.[5]?.question || "",
      sixthAnswer: course.FAQ?.[5]?.answer || "",
    });

    setMeta({
      metaTitle: course.title,
      metaDescription: course.description
    })


  }, []);


  const handleFileData = async (event: React.ChangeEvent<HTMLInputElement>) => {

    const file = event.target.files?.[0];

    if (!file) {
      return;
    };

    const fileName = `${file.name}`;

    const { data, error } = await supabase.storage.from("AppImages").upload(fileName, file, { upsert: true });


    if (error) {
      console.log(error);
    } else {
      console.log(data);
    };

    const { data: publicUrlData } = await supabase.storage.from("AppImages").getPublicUrl(fileName);

    console.log(publicUrlData)
    console.log(publicUrlData.publicUrl);
    setimageURL(publicUrlData.publicUrl);


  }


  const handleEditData = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    const slug = formData.slug
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const { data: existingPages, error: slugError } = await supabase.from("Pages").select("*").eq("slug", slug);

    if (slugError) {

      console.error(slugError);
      return;

    }

    if (existingPages.length > 1) {

      alert("Slug already exists. Please use a unique slug.");
      return;

    }

    setloading(true);

    const { data, error } = await supabase.from("Pages").update(

      {

        title: formData.title,
        description: editorContent,
        slug: slug,
        image: imageURL || course.image,
        city: formData.city,

        FAQ: [
          { question: FAQ.firstQuestion, answer: FAQ.firstAnswer },
          { question: FAQ.secondQuestion, answer: FAQ.secondAnswer },
          { question: FAQ.thirdQuestion, answer: FAQ.thirdAnswer },
          { question: FAQ.fourthQuestion, answer: FAQ.fourthAnswer },
          { question: FAQ.fifthQuestion, answer: FAQ.fifthAnswer },
          { question: FAQ.sixthQuestion, answer: FAQ.sixthAnswer },
        ],

      }

    ).eq("id", course.id);


    if (error) {

      console.log("The error ocuur in this is : ");
      console.log(error);
      toast.error("There is some error occur : ");
      setloading(false);

    }

    console.log(data);
    setloading(false);

    toast.success("The course is Edited Successfully : ");

  }



  return (
    <div className={`${collapsed ? "w-[85vw]" : "w-[75vw]"} mx-auto mt-10 px-4`}>
      <form onSubmit={handleEditData}>
        <div className="rounded-2xl border border-blue-200 bg-white shadow-xl overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          <div className="text-center text-3xl font-bold mt-4">
            Pages Editor
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">

            {/* ================= FORM ================= */}

            <div className="space-y-5">


              <div>
                <label className="block text-sm font-medium mb-2">
                  Course Title
                </label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div className="flex gap-4">
                <div className="w-full">
                  <label className="block text-sm font-medium mb-2">
                    Slug
                  </label>
                  <input
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    className="w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>

              </div>

              <div className="flex gap-4">
                <div className="w-full">
                  <label className="block text-sm font-medium mb-2">
                    Meta Title
                  </label>
                  <input
                    name="metaTitle"
                    value={meta.metaTitle}
                    onChange={handleMeta}
                    className="w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium mb-2">
                    Meta Description
                  </label>
                  <input
                    name="metaDescription"
                    value={meta.metaDescription}
                    onChange={handleMeta}
                    className="w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>

              </div>

            </div>

            <div className="space-y-5">

              <div className="flex gap-4">
                <div className="w-full">
                  <label className="block text-sm font-medium mb-2">
                    City
                  </label>
                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>

              </div>

              <div className="w-full">
                <label className="block text-sm font-medium mb-2">
                  Alt Tag For Image
                </label>
                <input
                  name="alt"
                  value={formData.alt}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              {/* Image Upload */}

              <div>
                <label className="block text-sm font-medium mb-2">
                  Course Image
                </label>

                <div className="flex items-center gap-4">
                  <label className="flex cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-blue-300 bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600 hover:bg-blue-100 transition">
                    Upload Image
                    <input type="file" className="hidden" onChange={handleFileData} />
                  </label>
                  <span className="text-xs text-gray-500">
                    PNG, JPG up to 5MB
                  </span>
                </div>

                <div>
                  {
                    imageURL.slice(0, 10)
                  }...
                </div>
              </div>

            </div>
          </div>

          <div>

            {/* content */}

            <div className="h-[80vh] border p-5 rounded-3xl mb-7">
              <p className="text-center text-2xl font-bold mb-5"> Frequently Asked Questions ? </p>

              <div className="flex gap-4 justify-between w-full">
                <div className="flex flex-col mb-3 w-full">
                  <label className="block text-sm font-medium mb-2">
                    First Question
                  </label>
                  <input
                    name="firstQuestion"
                    value={FAQ.firstQuestion}
                    onChange={handleFAQChange}
                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                    required
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="block text-sm font-medium mb-2 ">
                    First Answer
                  </label>
                  <textarea
                    name="firstAnswer"
                    value={FAQ.firstAnswer}
                    onChange={handleFAQChange}
                    rows={2}
                    className="w-full rounded-xl border px-4 text-sm resize-none"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-4 justify-between">
                <div className="flex flex-col mb-3 w-full">
                  <label className="block text-sm font-medium mb-2">
                    Second Question
                  </label>
                  <input
                    name="secondQuestion"
                    value={FAQ.secondQuestion}
                    onChange={handleFAQChange}
                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                    required
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="block text-sm font-medium mb-2 ">
                    Second Answer
                  </label>
                  <textarea
                    name="secondAnswer"
                    value={FAQ.secondAnswer}
                    onChange={handleFAQChange}
                    rows={2}
                    className="w-full rounded-xl border px-4 text-sm resize-none"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-4 justify-between">
                <div className="flex flex-col mb-3 w-full">
                  <label className="block text-sm font-medium mb-2">
                    Third Question
                  </label>
                  <input
                    name="thirdQuestion"
                    value={FAQ.thirdQuestion}
                    onChange={handleFAQChange}
                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                    required
                  />
                </div>

                <div className="flex flex-col w-full">

                  <label className="block text-sm font-medium mb-2">

                    Third Answer

                  </label>
                  <textarea
                    name="thirdAnswer"
                    value={FAQ.thirdAnswer}
                    onChange={handleFAQChange}
                    rows={2}
                    className="w-full rounded-xl border px-4 text-sm resize-none"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-4 justify-between">
                <div className="flex flex-col mb-3 w-full">
                  <label className="block text-sm font-medium mb-2">
                    fourth Question
                  </label>
                  <input
                    name="fourthQuestion"
                    value={FAQ.fourthQuestion}
                    onChange={handleFAQChange}
                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                    required
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="block text-sm font-medium mb-2">
                    fourth Answer
                  </label>
                  <textarea
                    name="fourthAnswer"
                    value={FAQ.fourthAnswer}
                    onChange={handleFAQChange}
                    rows={2}
                    className="w-full rounded-xl border px-4 text-sm resize-none"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-4 justify-between">
                <div className="flex flex-col mb-3 w-full">
                  <label className="block text-sm font-medium mb-2">
                    Fifth Question
                  </label>
                  <input
                    name="fifthQuestion"
                    value={FAQ.fifthQuestion}
                    onChange={handleFAQChange}
                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                    required
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="block text-sm font-medium mb-2">
                    Fifth Answer
                  </label>
                  <textarea
                    name="fifthAnswer"
                    value={FAQ.fifthAnswer}
                    onChange={handleFAQChange}
                    rows={2}
                    className="w-full rounded-xl border px-4 text-sm resize-none"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-4 justify-between w-full">
                <div className="flex flex-col mb-3 w-full">
                  <label className="block text-sm font-medium mb-2">
                    sixth Answer
                  </label>
                  <input
                    name="sixthQuestion"
                    value={FAQ.sixthQuestion}
                    onChange={handleFAQChange}
                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                    required
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="block text-sm font-medium mb-2">
                    sixth Question
                  </label>
                  <textarea
                    name="sixthAnswer"
                    value={FAQ.sixthAnswer}
                    onChange={handleFAQChange}
                    rows={2}
                    className="w-full rounded-xl border px-4 text-sm resize-none"
                    required
                  />
                </div>
              </div>

            </div>

          </div>


          <div className="h-[85vh] w-full rounded-2xl border p-5 overflow-hidden mb-10">
            <div className="w-full text-2xl font-extrabold text-center mb-5">About Course Section</div>
            <SunEditor

              defaultValue={editorContent}
              setOptions={{
                minHeight: "65vh",
                maxHeight: "70vh",
                buttonList: [
                  ["undo", "redo"],
                  ["formatBlock"],   // H1, H2, H3 works here
                  ["bold", "italic", "underline"],
                  ["list"],
                  ["align"],
                  ["link", "image"],
                ],


              }}

              onChange={(content) => {
                setEditorContent(content);
              }}

            />
          </div>



          {/* Submit */}
          <button type='submit' className="mt-6 px-10 py-4 rounded-3xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition ml-5 mb-5 cursor-pointer">
            {

              loading ? "...Loading" : "Save Page"

            }
          </button>

        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default EditPage