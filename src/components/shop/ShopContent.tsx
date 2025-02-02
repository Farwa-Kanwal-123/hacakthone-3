
"use client"

import { useState, useEffect } from "react"
import { SearchBar } from "./SearchBar"
import { CategoryFilters } from "./CategoryFilters"
import { PriceFilter } from "./PriceFilter"
import { LatestProducts } from "./LatestProducts"
import { ProductTags } from "./ProductTags"
import { ProductGrid } from "./ProductGrid"
import { SortAndShowControls } from "./SortAndShowControls"
import { IoArrowForwardCircleOutline } from "react-icons/io5"
import { client } from "@/sanity/lib/client"

interface IFood {
  _id: string
  name: string
  category: string
  price: number
  originalPrice?: number
  tags: string[]
  imageUrl: string
  description: string
  available: boolean
}

export function ShopContent() {
  const [foods, setFoods] = useState<IFood[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [minPrice, setMinPrice] = useState(100)
  const [maxPrice, setMaxPrice] = useState(500)
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [showLimit, setShowLimit] = useState(12)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  useEffect(() => {
    const fetchFoods = async () => {
      setIsLoading(true)
      const query = `
        *[_type == "food"] {
          _id,
          name,
          category,
          price,
          originalPrice,
          tags,
          "imageUrl": image.asset->url,
          description,
          available
        }
      `
      const data = await client.fetch(query)
      setFoods(data)
      setIsLoading(false)
    }

    fetchFoods()
  }, [])

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const filteredProducts = foods
    .filter((food) => {
      const matchesSearch = food.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesPrice = food.price >= minPrice && food.price <= maxPrice
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(food.category)
      return matchesSearch && matchesPrice && matchesCategory
    })
    .sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price))
    .slice(0, showLimit)

  const categories = Array.from(new Set(foods.map((food) => food.category)))

  return (
    <div className="container mt-32 mb-16 mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8 min-h-[calc(100vh-200px)]">
        <div className="md:w-[984px] w-full flex-grow">
          <SortAndShowControls
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            showLimit={showLimit}
            setShowLimit={setShowLimit}
          />
          <ProductGrid products={isLoading ? Array(12).fill({}) : filteredProducts} />
        </div>
        <div className="w-full md:w-[312px] md:flex-shrink-0">
          <div className="md:sticky md:top-4 space-y-6">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <CategoryFilters
              categories={categories}
              selectedCategories={selectedCategories}
              handleCategoryChange={handleCategoryChange}
            />
            <div className="bg-[url(/images/shop.png)] p-4 mt-4 bg-cover w-[248px] h-[286px]">
              <div className="font-inter font-bold text-[16px] w-[105px] text-[#FFFFFF]">Perfect Taste</div>
              <h2 className="font-helvetica font-bold text-[20px] w-[181px] text-[#FFFFFF]">Classic Restaurant</h2>
              <div className="font-helvetica font-bold text-[16px] w-[58px] text-[#FF9F0D]">$45.00</div>
              <div className="flex gap-2 w-full h-[24px] mt-32">
                <button className="font-inter text-[16px] text-[#FFFFFF]">Shop Now</button>
                <IoArrowForwardCircleOutline size={20} className="text-[#FFFFFF] mt-1" />
              </div>
            </div>
            <PriceFilter minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
            <LatestProducts />
            <ProductTags />
          </div>
        </div>
      </div>
    </div>
  )
}

