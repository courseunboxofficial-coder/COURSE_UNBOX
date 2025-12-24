import { supabase } from '@/lib/supabse/supabaseConfig';
import React, { useEffect, useState } from 'react'

type Course = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  Duration: number;
  language: string;
  domain: string;
  Delivery_Mode: string;
  low : number,
  high : number,
  content: {
    title: string;
    subtitle: string;
  }[];

  image?: File | null;
}

const EditCourse = ({ collapsed, course }: { collapsed: boolean; course: Course }) => {

  console.log(course);
  // const [content , setContent] = useState({
  //   firstTitle : "",
  //   firstSubTitle : "",
  //   secondTitle : "",
  //   secondSubtitle : "",
  //   thirdTitle : "",
  //   thirdSubTitle : "",
  //   fourthTitle : "",
  //   fourtSubTitle : "",
  //   fifthTitle : "",
  //   fifthSubTitle : "",
  //   sixthTitle : "",
  //   sixthSubTitle : ""

  // });

  const [imageURL , setimageURL] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    Duration: 0,
    language: "",
    domain: "",
    low : 0,
    high : 0,
    Delivery_Mode: "",
    image: null as File | null,
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  useEffect(() => {
    setFormData({
      title: course.title,
      description: course.description,
      startDate: course.startDate,
      Duration: course.Duration,
      language: course.language,
      domain: course.domain,
      Delivery_Mode: course.domain,
      image: null as File | null,
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


  const handleEditData = async () => {

    const {data , error} = await supabase.from("Courses").update(

      {

        title : formData.title, 
        description : formData.description,
        startDate : formData.startDate,
        Duration : formData.Duration,
        language : formData.language,
        content  : course.content,
        domain : formData.domain,
        low : 0,
        high : 0,
        Delivery_Mode: formData.Delivery_Mode,
        image : imageURL

      }



    ).eq("id", course.id);
    

    if(error){
      console.log("The error ocuur in this is : ");
      console.log(error);
    }

    console.log(data);
    
  }



  return (
    <div className={`${collapsed ? "w-[85vw]" : "w-[75vw]"} mx-auto mt-10 px-4`}>
      <div className="rounded-2xl border border-blue-200 bg-white shadow-xl overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

        <div className="text-center text-3xl font-bold mt-4">
          Course Editor
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">

          {/* ================= FORM ================= */}

          <div className="space-y-5">

            {/* Title */}

            {/* <div>COURSE ID IS : {course.id}</div>
            <div>COURSE title IS : {course.title}</div> */}

            <div>
              <label className="block text-sm font-medium mb-2">
                Course Title
              </label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Domain + Language */}

            <div className="flex gap-4">
              <div className="w-full">
                <label className="block text-sm font-medium mb-2">
                  Domain
                </label>
                <select
                  name="Delivery_Mode"
                  value={formData.domain}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                >
                  <option value="">Select Mode</option>
                  <option value="Online">Digital Marketing</option>
                  <option value="Offline">Development</option>
                  <option value="Hybrid">IT & Software</option>
                  <option value="Hybrid">Data Science</option>
                </select>
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium mb-2">
                  language
                </label>
                <select
                  name=""
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                >
                  <option value="">Select Mode</option>
                  <option value="Online">English</option>
                  <option value="Offline">Hindi</option>
                  <option value="Hybrid">Other</option>
                </select>
              </div>

            </div>

            {/* Start Date + Duration */}

            <div className="flex gap-4">
              <div className="w-full">
                <label className="block text-sm font-medium mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                />
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium mb-2">
                  Duration (Days)
                </label>
                <input
                  type="number"
                  name="Duration"
                  value={formData.Duration}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                />
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium mb-2">
                  Low Package
                </label>
                <input
                  type="number"
                  name="low"
                  value={formData.low}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                />
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium mb-2">
                  High Package
                </label>
                <input
                  type="number"
                  name="high"
                  value={formData.high}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                />
              </div>
            </div>

            {/* Delivery Mode */}

            <div>
              <label className="block text-sm font-medium mb-2">
                Delivery Mode
              </label>
              <select
                name="Delivery_Mode"
                value={formData.Delivery_Mode}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3 text-sm"
              >
                <option value="">Select Mode</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            {/* Description */}

            <div>
              <label className="block text-sm font-medium mb-2">
                Short Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
              />
            </div>

            {/* Content */}

            <div>
              <label className="block text-sm font-medium mb-2">
                Course Content
              </label>
              <textarea
                name="content"
                rows={4}
                className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
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
            </div>

            {/* Submit */}

            <button className="mt-6 px-10 py-4 rounded-3xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition" onClick={handleEditData}>
              Save Course
            </button>
          </div>

          {/* ================= PREVIEW ================= */}

          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8">
            <p className="text-xs font-medium text-gray-500 mb-3">
              LIVE PREVIEW
            </p>

            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-900">
                {formData.title || "Course title goes here"}
              </h1>

              <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold text-indigo-700">
                {formData.domain || "Domain"}
              </span>

              <p className="text-gray-600">
                {formData.description || "Course description preview"}
              </p>

              <div className="text-sm text-gray-500 space-y-1">
                <p>📅 Start: {formData.startDate || "Not set"}</p>
                <p>⏱ Duration: {formData.Duration || "0"} days</p>
                <p>🌐 Mode: {formData.Delivery_Mode || "N/A"}</p>
                <p>🗣 Language: {formData.language || "English"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditCourse