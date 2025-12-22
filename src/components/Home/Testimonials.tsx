import Image from "next/image";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Avinash Kr",
    role: "Co-Founder at XYZ",
    image: "/images/Home/Course.jpg",
    message:
      "Like this video and ask your questions in the comment section, don't forget to subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
  },
  {
    id: 2,
    name: "Bharat Kunal",
    role: "Manager at XYZ",
    image: "/images/Home/Course.jpg",
    message:
      "Like this video and ask your questions in the comment section, don't forget to subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
  },
  {
    id: 3,
    name: "Prabhakar D",
    role: "Founder & CEO at XYZ",
    image: "/images/Home/Course.jpg",
    message:
      "Like this video and ask your questions in the comment section, don't forget to subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
  },
];

const Testimonials = () => {
  return (

    <section className="py-20 bg-white">
      
      <div className="max-w-7xl mx-auto px-6 text-center">


        <h2 className="text-4xl font-extrabold text-yellow-500 uppercase">
          Testimonials
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto my-4" />
        <p className="text-gray-500 mb-14">
          Subscribe Easy Tutorials YouTube channel to watch more videos.
        </p>


        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative bg-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer"
            >

              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden bg-white">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
              </div>


              <p className="text-gray-600 mt-10 leading-relaxed">
                <span className="text-yellow-500 text-2xl font-bold">“</span>
                {item.message}
                <span className="text-yellow-500 text-2xl font-bold">”</span>
              </p>


              <h4 className="mt-6 font-semibold text-yellow-600">
                {item.name}
              </h4>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          ))}


        </div>

      </div>

    </section>
  );
};

export default Testimonials;
