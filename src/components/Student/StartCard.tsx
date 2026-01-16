export default function StatCard({
  title,
  value,
  color
}: {
  title: string;
  value: string;
  color : string
}) {
  return (
   <div className={`group rounded-2xl bg-${color}-400 p-6 border border-blue-100 shadow-sm
    transition-all hover:shadow-xl cursor-pointer`}>
  <p className="text-sm font-semibold text-white uppercase tracking-wide">
    {title}
  </p>

  <h3 className="mt-2 text-3xl font-extrabold text-white">
    {value}
  </h3>
</div>


  );
}
