"use client"

interface CategoryFiltersProps {
  categories: string[]
  selectedCategories: string[]
  handleCategoryChange: (category: string) => void
}

export function CategoryFilters({ categories, selectedCategories, handleCategoryChange }: CategoryFiltersProps) {
  return (
    <ul className="space-y-2">
      <h2 className="text-[20px] font-bold mt-2">Category</h2>
      {categories.map((category) => (
        <li key={category}>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            <span className="text-[18px]">{category}</span>
          </label>
        </li>
      ))}
    </ul>
  )
}

