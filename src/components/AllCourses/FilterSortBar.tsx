export default function FilterSortBar(){
    return (
        <div className="sticky top-16 z-20 bg-white border-b">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-4 items-center justify-between">
                
                {/* Result Count */}
                <p className="text-sm text-gray-600">
                Showing <span className="font-medium">24</span> courses
                </p>

                {/* Sort */}
                <select className="border rounded-lg px-4 py-2 text-sm">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Shortest Duration</option>
                <option>Upcoming Cohorts</option>
                </select>
            </div>
        </div>

)
}