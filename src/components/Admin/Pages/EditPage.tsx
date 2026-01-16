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

  city : string

}


const EditPage = ({ collapsed, course }: { collapsed: boolean; course: Course }) => {

  const [imageURL, setimageURL] = useState("");
  const [loading, setloading] = useState(false);

  const [formData, setFormData] = useState({

    title: "",
    image: "",
    slug: "",
    city: ""

  });

  const [editorContent, setEditorContent] = useState("");



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  useEffect(() => {

    setFormData({

      title: course.title,
      slug: course.slug,
      image: course.image,
      city: course.city

    });

    setEditorContent(course.description);


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
        city : formData.city

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