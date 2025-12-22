export default function BlogCategories() {
  const categories = [
    "Adventure",
    "Amazing Facts",
    "City Tour",
    "Culture",
    "Edu-Tourism",
    "Heritage",
    "Hill Stations",
    "Holidays",
    "Luxury",
    "Pilgrimage",
    "Travel Deals",
    "Travel Experience",
    "Wedding",
    "Wildlife",
  ];

  return (
    <section className="rounded-2xl bg-white p-6 border border-slate-100 shadow-sm">
      
      {/* Heading */}
      <div className="flex items-center gap-3 mb-5">
        <span className="h-6 w-1.5 rounded-full bg-blue-600" />
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
          Blog Categories
        </h3>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            className="
              px-4 py-2 rounded-full text-sm font-medium
              border border-blue-200 text-blue-700
              bg-blue-50
              hover:bg-blue-600 hover:text-white hover:border-blue-600
              transition-all duration-200
            "
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
