"use client"

interface SortAndShowControlsProps {
  sortOrder: "asc" | "desc"
  setSortOrder: (order: "asc" | "desc") => void
  showLimit: number
  setShowLimit: (limit: number) => void
}

export function SortAndShowControls({ sortOrder, setSortOrder, showLimit, setShowLimit }: SortAndShowControlsProps) {
  return (
    <div className="flex flex-col md:flex-row gap-3 ml-4 w-[317px]">
      <div className="flex w-[332px]">
        <label htmlFor="Sort By" className="mt-2 text-[20px] w-[81px]">
          Sort By:
        </label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
          className="rounded border border-gray-400 w-[236px] pl-2 text-[18px] h-12"
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
   

       {/* show */}
      <div className="flex md:w-[236px] gap-1">
        <label htmlFor="Show" className="mt-2 text-[20px] w-[64px]">
          Show:
        </label>
        <select
          value={showLimit}
          onChange={(e) => setShowLimit(Number(e.target.value))}
          className="rounded border pl-2 border-gray-400 md:w-[236px] text-[18px] h-12"
        >
          <option value={4}>Show 4</option>
          <option value={8}>Show 8</option>
          <option value={12}>Show 12</option>
          <option value={16}>Show 16</option>
        </select>
      </div>
    </div>
  )
}

