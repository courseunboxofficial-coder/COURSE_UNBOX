export default function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
   <div className="group rounded-2xl bg-linear-to-br from-blue-50 to-white p-6 border border-blue-100 shadow-sm
    transition-all hover:shadow-xl cursor-pointer ">
  <p className="text-sm font-semibold text-blue-500 uppercase tracking-wide">
    {title}
  </p>

  <h3 className="mt-2 text-3xl font-extrabold text-[#025378]">
    {value}
  </h3>
</div>


  );
}
