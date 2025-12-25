// "use client";
// import { useState, useRef, useEffect } from "react";

// export default function AboutUs() {
//   const [expanded, setExpanded] = useState(false);
//   const paragraphRef = useRef(null);
//   const [maxHeight, setMaxHeight] = useState("0px");

//   useEffect(() => {
//     if (paragraphRef.current) {
//       setMaxHeight(expanded ? `${paragraphRef.current.scrollHeight}px` : "80px"); // 80px = half visible
//     }
//   }, [expanded]);

//   return (
//     <div className="flex flex-col md:flex-row h-screen">
//       {/* Left Div: Image / Gradient */}
//       <div className="md:w-1/2 w-full bg-gradient-to-b from-sky-400 to-indigo-600 flex items-center justify-center">
//         <h1 className="text-white text-4xl font-bold">Our Story</h1>
//       </div>

//       {/* Right Div: Content */}
//       <div className="md:w-1/2 w-full p-10 flex flex-col justify-center">
//         <h2 className="text-3xl font-semibold mb-4">About Us</h2>

//         {/* Paragraph with smooth expand/collapse */}
//         <div
//           className="overflow-hidden transition-all duration-500 ease-in-out"
//           style={{ maxHeight }}
//           ref={paragraphRef}
//         >
//           <p className="text-gray-700">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
//             vel urna in sapien vestibulum euismod. Proin sit amet metus ut
//             neque dapibus ullamcorper. Sed vitae risus eu purus bibendum
//             tristique. Aliquam erat volutpat. Praesent vel ex at orci
//             ullamcorper laoreet. Donec eget neque non sem tincidunt feugiat.
//             Cras at fermentum libero. Vestibulum ante ipsum primis in faucibus
//             orci luctus et ultrices posuere cubilia curae; Sed nec diam sed
//             risus elementum commodo. Vivamus in augue sed lacus malesuada
//             facilisis.
//           </p>
//         </div>

//         {/* Button */}
//         <div className="flex justify-end mt-4">
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//             onClick={() => setExpanded(!expanded)}
//           >
//             {expanded ? "Read Less" : "Read More"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




















//original

// "use client";
// import { useState, useRef, useEffect } from "react";

// export default function AboutUs() {
//   const [expanded, setExpanded] = useState(false);
//   const paragraphRef = useRef<HTMLDivElement>(null); // ✅ Type added
//   const [maxHeight, setMaxHeight] = useState("0px");

//   useEffect(() => {
//     if (paragraphRef.current) {
//       setMaxHeight(expanded ? `${paragraphRef.current.scrollHeight}px` : "80px");
//     }
//   }, [expanded]);

//   return (
//     <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 ">
//       {/* Left Div: Image / Gradient */}
//       <div className="md:w-1/2 w-full bg-linear-to-b from-sky-400 to-indigo-600 flex items-center justify-center">
//         <h1 className="text-white text-4xl font-bold">Our Story</h1>
//       </div>

//       {/* Right Div: Content */}
//       <div className="md:w-1/2 w-full p-10 flex flex-col justify-center">
//         <h2 className="text-3xl font-semibold mb-4">About Us</h2>

//         {/* Paragraph with smooth expand/collapse */}
//         <div
//           className="overflow-hidden transition-all duration-500 ease-in-out"
//           style={{ maxHeight }}
//           ref={paragraphRef}
//         >
//           <p className="text-gray-700">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
//             vel urna in sapien vestibulum euismod. Proin sit amet metus ut
//             neque dapibus ullamcorper. Sed vitae risus eu purus bibendum
//             tristique. Aliquam erat volutpat. Praesent vel ex at orci
//             ullamcorper laoreet. Donec eget neque non sem tincidunt feugiat.
//             Cras at fermentum libero. Vestibulum ante ipsum primis in faucibus
//             orci luctus et ultrices posuere cubilia curae; Sed nec diam sed
//             risus elementum commodo. Vivamus in augue sed lacus malesuada
//             facilisis.
//           </p>
//         </div>

//         {/* Button */}
//         <div className="flex justify-end mt-4">
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//             onClick={() => setExpanded(!expanded)}
//           >
//             {expanded ? "Read Less" : "Read More"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";

// export default function AboutUs() {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 py-10 gap-8">
      
//       {/* Left Section */}
//       <div className="md:w-1/2 w-full rounded-2xl bg-gradient-to-b from-sky-400 to-indigo-600 flex items-center justify-center min-h-[300px] shadow-lg">
//         <h1 className="text-white text-4xl font-bold">Our Story</h1>
//       </div>

//       {/* Right Section */}
//       <div className="md:w-1/2 w-full p-8 bg-white rounded-2xl shadow-lg flex flex-col">
//         <h2 className="text-3xl font-semibold mb-4 text-gray-900">
//           About Us
//         </h2>

//         {/* Paragraph Box */}
//         <div
//           className={`
//             text-gray-700 leading-relaxed pr-2
//             ${expanded ? "overflow-y-auto" : "overflow-hidden"}
//           `}
//           style={{ height: "120px" }}   // ✅ fixed height (no layout shift)
//         >
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
//             vel urna in sapien vestibulum euismod. Proin sit amet metus ut
//             neque dapibus ullamcorper. Sed vitae risus eu purus bibendum
//             tristique. Aliquam erat volutpat. Praesent vel ex at orci
//             ullamcorper laoreet. Donec eget neque non sem tincidunt feugiat.
//             Cras at fermentum libero. Vestibulum ante ipsum primis in faucibus
//             orci luctus et ultrices posuere cubilia curae; Sed nec diam sed
//             risus elementum commodo. Vivamus in augue sed lacus malesuada
//             facilisis.
//           </p>
//         </div>

//         {/* Button */}
//         <div className="mt-4 self-end">
  

//           <button
//   onClick={() => setExpanded(!expanded)}
//   className="
//     relative inline-flex items-center gap-2
//     px-5 py-2
//     text-sm font-semibold
//     text-blue-600
//     border border-blue-600
//     rounded-full
//     transition-all duration-300 ease-in-out
//     hover:bg-blue-600 hover:text-white
//     hover:shadow-md
//     active:scale-95 cursor-pointer
//   "
// >
//   {expanded ? "Read Less" : "Read More"}
//   <span
//     className={`transition-transform duration-300 ${
//       expanded ? "rotate-180" : ""
//     }`}
//   >
//     ↓
//   </span>
// </button>

//         </div>
//       </div>
//     </div>
//   );
// }



import { useState, useRef } from "react";

export default function AboutUs() {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (expanded && contentRef.current) {
      contentRef.current.scrollTop = 0; // ✅ reset scroll position
    }
    setExpanded(!expanded);
  };

  return (


        <section className="w-full bg-[#add8e64b] py-10">

    <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 py-10 gap-8">
      
      {/* Left Section */}
      <div className="md:w-1/2 w-full rounded-2xl bg-linear-to-b from-sky-400 to-indigo-600 flex items-center justify-center min-h-[300px] shadow-lg">
        <h1 className="text-white text-4xl font-bold">Our Story</h1>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full p-8 bg-white rounded-2xl shadow-lg flex flex-col">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">
          About Us
        </h2>

        {/* Paragraph Box */}
        <div
          ref={contentRef}
          className={`text-gray-700 leading-relaxed pr-2  text-justify ${expanded ? "overflow-y-auto custom-scrollbar" : "overflow-hidden"}`}
          style={{ height: "130px" }}>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vel urna in sapien vestibulum euismod. Proin sit amet metus ut
            neque dapibus ullamcorper. Sed vitae risus eu purus bibendum
            tristique. Aliquam erat volutpat. Praesent vel ex at orci
            ullamcorper laoreet. Donec eget neque non sem tincidunt feugiat.
            Cras at fermentum libero. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Sed nec diam sed
            risus elementum commodo. Vivamus in augue sed lacus malesuada
            facilisis.

            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem quis sed nobis nihil cumque perferendis atque ipsa sequi libero explicabo itaque ut fugiat, ex nemo incidunt quae in? Non eveniet tempora autem facilis illum beatae. Libero delectus adipisci facere in doloremque at consequatur quos minima tempore velit labore nisi, aspernatur temporibus iusto laudantium neque incidunt deleniti sint ad voluptatem nihil assumenda quibusdam tempora! Nesciunt, id tempore! Molestiae non ea soluta reiciendis est iure quae aspernatur dolores sed expedita. Tempora quae nulla cum quis repellendus error eaque necessitatibus fugit rerum, vero rem consectetur quibusdam fugiat quasi mollitia, id doloremque esse laborum velit magnam ea nam. Sed aliquam ab quo aspernatur exercitationem, odio quos accusantium perspiciatis quas ducimus accusamus fugiat quisquam quibusdam facilis, culpa aperiam illo. Consequatur tenetur blanditiis adipisci aspernatur, minus quae eligendi cupiditate nihil alias exercitationem quidem nobis perferendis totam culpa iste itaque est voluptatum odit pariatur voluptates. Nihil repellat deleniti et cupiditate non voluptatum tenetur minima voluptate! Maxime quis labore magnam fuga illum harum, consectetur quasi eius qui necessitatibus modi at earum debitis vero exercitationem doloremque ratione minus atque iure natus esse nulla est a obcaecati! Doloribus, iure assumenda quod beatae laborum repellendus rerum adipisci cumque obcaecati rem ab tempore enim delectus natus quidem corrupti excepturi iste? Id facere ex libero, consectetur, adipisci reiciendis accusantium, ea recusandae odit tempora aperiam? Officia quidem, cupiditate nemo numquam exercitationem esse laborum aspernatur. Laudantium architecto veritatis et consequuntur recusandae a consequatur eius vero obcaecati praesentium, incidunt eos repellendus facilis quia deleniti maxime! Rerum accusamus tempore ipsa quo quis iste inventore consectetur adipisci nihil at reiciendis placeat dolorum, consequatur dolore eligendi! Placeat aliquid cumque tempore quaerat consequatur eaque perspiciatis quae quam dolor aperiam culpa adipisci excepturi tenetur voluptatibus aliquam ducimus in iure error, veritatis assumenda fuga magni. Fuga sunt error labore unde repellat officiis voluptatem libero voluptatum ullam possimus sit dolor ipsum fugiat, quos velit natus obcaecati in nostrum modi! Ipsa ipsam quia eos sunt aliquid odit nihil, nulla sequi facilis atque illo consequatur, optio, dolorum sed nobis explicabo! Nemo, architecto dolor voluptatum aspernatur dicta esse minima, nesciunt veritatis aperiam inventore, laudantium maxime autem ullam illo corporis distinctio velit! Ullam, facere laborum. Ducimus est laudantium voluptate totam repellat magni culpa inventore amet tenetur adipisci voluptatem possimus perferendis, deserunt iusto commodi quam perspiciatis explicabo unde aperiam velit reprehenderit quo doloremque aliquid maiores. Necessitatibus suscipit reiciendis veniam nostrum dolorem, fugit explicabo? Magnam nulla unde vero quaerat laborum, dolores enim quae, rem ex, adipisci cum ratione sequi perferendis amet accusamus dolorum nemo explicabo! Et totam odit vero suscipit sapiente dignissimos, nam nobis sint quos ducimus cum laborum? Officia natus, quas illo nostrum temporibus exercitationem numquam aperiam ratione quaerat nesciunt accusantium cumque beatae, dolorem ipsa consequatur et. Officia nostrum voluptate id illum odio, quos laudantium adipisci unde, ipsam debitis quaerat aspernatur esse consequatur. Earum totam tenetur tempore quaerat reiciendis asperiores labore doloremque, molestias, facilis, alias reprehenderit! Molestiae repudiandae beatae, excepturi dicta alias quas, optio quis totam eum ea eveniet quae commodi sed nulla aspernatur minima ipsum maxime sequi exercitationem porro ad vel officiis eligendi deserunt! Itaque tempora ad, impedit expedita quia inventore quos quaerat. Pariatur, reiciendis voluptatum fugit error consequatur tempore totam ut ducimus, soluta animi vel fugiat blanditiis quam obcaecati in. Soluta laborum provident iure deleniti doloribus ea autem et illum officiis debitis dolor, incidunt quas tempore, sunt assumenda totam molestiae quos dolorem. Quidem rem incidunt necessitatibus blanditiis, ea, deserunt saepe vel ipsam suscipit quaerat odio delectus, error a atque eos quibusdam. Dicta dolorem porro, aut temporibus nesciunt recusandae tempore! Optio ipsa vitae nemo ratione vel non, eum perspiciatis et dignissimos quasi magni assumenda ab fugit temporibus asperiores sunt maiores! Eum, ullam corporis architecto, voluptatum harum voluptatibus unde veritatis beatae amet quas iure error quae nostrum facilis quibusdam? Ipsam repellendus atque vero iure pariatur deleniti tenetur magnam molestiae, minima eos reprehenderit, asperiores, voluptas quia? A unde culpa est veritatis architecto neque perspiciatis velit quibusdam beatae sunt, expedita eveniet incidunt? Voluptates voluptatum aut quidem ullam officia commodi praesentium iste eaque cumque deserunt eveniet quaerat rem, temporibus voluptatem veniam maiores fuga ipsum velit aperiam sequi maxime facere! Unde fugiat aliquid quas! Explicabo libero praesentium, totam est nulla ratione iure quis ducimus tempore perspiciatis aut hic, adipisci, delectus doloremque cumque sint a similique repellendus officia vel exercitationem ullam nesciunt? Magni delectus in ullam saepe nemo quod eveniet reprehenderit, natus voluptatum nisi iusto odio ab modi qui animi tempore fuga rerum ad impedit tenetur. Ipsa ea facere iste ad impedit blanditiis. Nobis tenetur doloribus similique eum cumque ex corporis repellendus provident aperiam, modi laudantium accusantium laboriosam impedit. Perspiciatis itaque doloribus magni illum, recusandae perferendis nesciunt cumque nisi, hic similique mollitia repellat excepturi fugiat quidem sapiente aperiam. Nemo delectus debitis doloribus corporis molestias qui explicabo excepturi laudantium cupiditate cumque illum voluptatem itaque doloremque possimus, architecto ipsam sapiente. Officia fuga culpa voluptates autem. Officia illo eius, beatae atque quibusdam enim quisquam. Aspernatur ex nam excepturi. Molestias excepturi culpa et illum cumque voluptates qui. Nobis doloremque alias cumque quod cupiditate blanditiis sunt reiciendis saepe. Ex, quisquam. Alias aut magnam assumenda ducimus aliquam, a accusamus eaque cumque aliquid tempore nesciunt voluptatum, corrupti iste optio provident facilis quo eligendi. Blanditiis expedita possimus et autem quisquam harum repellat repellendus necessitatibus sint, nostrum facere sapiente neque quaerat sequi eligendi hic illo voluptatibus consequatur soluta delectus ad corporis doloribus. Explicabo obcaecati odio earum eos delectus laudantium unde neque similique illo veritatis! Maiores velit quia beatae excepturi perferendis, doloremque ipsum aut explicabo error facere? Possimus quo aliquam, commodi quasi debitis est quae, dicta voluptatem tenetur corrupti, consectetur aliquid exercitationem impedit non? Harum quod iure neque, alias qui voluptatibus fugit nam. Quos tenetur reiciendis quia molestias laboriosam mollitia consectetur error aliquid beatae ea quo vero tempora vel minus eligendi suscipit inventore, odit blanditiis omnis. Dolorum corrupti qui voluptatum suscipit earum doloremque consectetur ab quae officia sapiente quo omnis in ipsa doloribus, similique rerum, quasi odio amet laboriosam culpa. Excepturi iste porro qui nostrum doloribus, quidem dolor explicabo, voluptatem, eum temporibus reprehenderit quod vitae esse sunt ea illo reiciendis a eligendi. */}
          </p>
        </div>

        {/* Button */}
        <div className="mt-4 self-end">
          <button
            onClick={handleToggle}
            className="
              relative inline-flex items-center gap-2
              px-5 py-2
              text-sm font-semibold
              text-blue-600
              border border-blue-600
              rounded-full
              transition-all duration-300 ease-in-out
              hover:bg-blue-600 hover:text-white
              hover:shadow-md
              active:scale-95 cursor-pointer
            "
          >
            {expanded ? "Read Less" : "Read More"}
            <span
              className={`transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>
        </div>
      </div>
    </div>

    </section>
  );
}



















        {/* <button  onClick={() => setExpanded(!expanded)} className="text-sky-600 font-semibold hover:underline">{expanded ? "Read Less" : "Read More"}</button> */}


// "use client";

// import { useState } from "react";

// export default function AboutUsPage() {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, libero sed interdum commodo, elit tellus gravida leo, at pulvinar lectus sapien nec lorem. Donec a dui nisi. Integer ut luctus neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed nec turpis quis ipsum laoreet ultrices. Mauris id mi eget velit elementum rhoncus. Nullam efficitur imperdiet urna, a placerat quam porta eget.`;

//   const previewContent = content.slice(0, 150) + '...';

//   return (
//     <section className="w-full">
//       {/* Section 1: Background Image with Gradient Overlay */}
//       <div className="relative h-96 w-full">
//         <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/about-bg.jpg')` }} />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
//         <div className="relative z-10 flex items-center justify-center h-full">
//           <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
//         </div>
//       </div>

//       {/* Section 2: Content with ReadMore */}
//       <div className="max-w-5xl mx-auto px-4 py-16">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
//         <div className="relative">
//           <p className={`text-gray-700 text-lg transition-all duration-500 ${isExpanded ? 'max-h-full' : 'max-h-24 overflow-hidden'}`}>
//             {isExpanded ? content : previewContent}
//           </p>

//           {/* Read More Button */}
//           <button
//             onClick={() => setIsExpanded(!isExpanded)}
//             className="absolute right-0 bottom-0 bg-sky-500 text-white px-4 py-1 rounded-full hover:bg-sky-600 transition"
//           >
//             {isExpanded ? 'Show Less' : 'Read More'}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
